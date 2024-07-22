import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import HomeHeading from './Component/HomeHeadingComponent';
import { styles } from './styles';
import GridItem from './Component/GridItem';
import ProductItem from './Component/ProductlComponent';
import { DailyRoutine, data, productList } from './HomeDummyData';
import DailyRecommand from './Component/DailyRecommand';
import CustomModal from './Component/CustomModal';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import global from '../../../utils/global'
import { useRecoilState, useRecoilValue } from 'recoil';
import { SkinAnalysisData, userInfo } from '../../../utils/State';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../../../constants/Colors';
import { getRequest } from '../../../components/ApiHandler';
import { dataFunction } from '../../../hooks/SkinAnalysis';
const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [Button, setButton] = useState(false);
  const [Analyze, setAnalyze] = useState(false);
  const [AnalysisData, setAnalysisData] = useState("");
  const [userInfovalue, setUserInfo] = useRecoilState(userInfo);
  const [loading, setLoading] = useState(true);
  const setSkinAnalysisDataRecoil=useRecoilState(SkinAnalysisData)
  useEffect(() => {
    const checkUserInfo = async () => {
      try {
        const AnalysisData = await getRequest('api/user/skinnalysis/skinanalysisbydate');
        if (AnalysisData && AnalysisData.length > 0) {
          const sortedData = AnalysisData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          const SkinAnalysisData=dataFunction(sortedData[0]);
          // setSkinAnalysisDataRecoil(AnalysisData)
          setAnalysisData(SkinAnalysisData)
        }
        
        const userInfoData = await AsyncStorage.getItem('userInfo');
        
        if (userInfoData) {
          const parsedUserInfo = JSON.parse(userInfoData);
          setUserInfo(parsedUserInfo);
        }
      } catch (error) {
        console.error("Failed to fetch user info from AsyncStorage", error);
      }
      setLoading(false);
    };
    if (loading) {
      checkUserInfo();
    }
  }, [loading]);
  
  const renderItem = ({ item }) => (
    <GridItem image1={item.image1} progress={item.progress} text={item.text} id={item?.id} year={item?.Year} onPress={() => handleSkinDetail(item)} />
  );

  useFocusEffect(
    useCallback(() => {
      if(global.DailyRoutine===true){
        setAnalyze(global.DailyRoutine);
      }
    }, [global.DailyRoutine])
  );
  const renderItem2 = ({ item }) => (
    <ProductItem image1={item.image1} description={item.desciption} text={item.text} icons={item?.icons} onPress={() => handleProductDeatil(item)} />
  );
  const handleSkinDetail = (item) => {
    navigation.navigate('SkinTypeScreen', {
      params:{
        item,
        screen:"Home"
      }
    });
  };
  const handleProductDeatil = (item) => {
    navigation.navigate('ProductDetailScreen', item);
  };
  
  const renderItem3 = ({ item }) => (
    <DailyRecommand
      image1={item.image1}
      description={item.desciption}
      text={item.text}
      Id={item?.id}
      DailyRoutine={Button}
      ButtonText={item?.buttonText}
      AnalyzeButton={Analyze}
      OnPress={() => handleRoutine(item)}
    />
  );

  const handleRoutine = (item) => {
    if (item?.buttonText === "Mark As Done") {
      setButton(true)
    } else {
      setModalVisible(true);
    }
  };
  const handleModalNavgation =()=>{
    setAnalyze(true);
    setModalVisible(false);
    navigation.navigate("Analysis")
  }
  return (
    <View style={styles.main_container}>
      {
        loading ?
          (<ActivityIndicator
            color={Colors.light?.green}
            size="small"
            style={{ flex: 1 }}
          />) : (
            <ScrollView style={{ flex: 1, paddingTop: 25 }} showsVerticalScrollIndicator={false}>
              <HomeHeading heading={"Facial Skin Analysis"} Text2={"View Analysis"} onPressView={() => navigation.navigate('Analysis')} />
              <FlatList
                data={AnalysisData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{ marginTop: 20, flex: 1, paddingLeft: 16 }}
                numColumns={2}
              />
              <HomeHeading heading={"Recommend For You"} Text2={"View All"} onPressView={() => navigation.navigate('Product')} />
              <FlatList
                data={productList}
                renderItem={renderItem2}
                keyExtractor={item => item.id}
                horizontal
                contentContainerStyle={{ marginTop: 20, paddingLeft: 16 }}
                showsHorizontalScrollIndicator={false}
              />
              <HomeHeading heading={"Daily Routines"} />
              <FlatList
                data={DailyRoutine}
                renderItem={renderItem3}
                keyExtractor={item => item.id}
                contentContainerStyle={{ marginTop: 20, flex: 1, paddingHorizontal: 16, marginBottom: 20 }}
              />
            </ScrollView>
          )
      }
      <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)} onAnalyze={handleModalNavgation} />
    </View>
  );
};

export default HomeScreen;
