import React, { useEffect, useState } from 'react';
import { View, ScrollView, FlatList, Alert } from 'react-native';
import HomeHeading from './Component/HomeHeadingComponent';
import { styles } from './styles';
import GridItem from './Component/GridItem';
import { DailyRoutine, DailyRoutineData } from './HomeDummyData';
import DailyRecommand from './Component/DailyRecommand';
import CustomModal from './Component/CustomModal';
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from 'recoil';
import { userInfo } from '../../../utils/State';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../../../constants/Colors';
import { getRequest, putRequest } from '../../../components/ApiHandler';
import { dataFunction, EmyptyStatedata } from '../../../hooks/SkinAnalysis';
import DailyResetButton from './Component/DailyRoutine';
import HomeBanner from './Component/HomeBanner';
import RecommendedProducts from './Component/Products/RecommandedProducts';
const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [Button, setButton] = useState(false);
  const [AnalysisData, setAnalysisData] = useState("");
  const [userInfovalue, setUserInfo] = useRecoilState(userInfo);
  const [loading, setLoading] = useState(true);
  const [releventData, setReleventData] = useState(null)
  const [dailyRoutine, setDailyRoutine] = useState(null);

  const checkUserInfo = async () => {
    try {
      const userInfoData = await AsyncStorage.getItem('userInfo');
      if (userInfoData) {
        const parsedUserInfo = JSON?.parse(userInfoData);
        setUserInfo(parsedUserInfo);
      }
      const AnalysisData = await getRequest('api/user/skinnalysis/skinanalysisbydate');
      if (AnalysisData && AnalysisData.length > 0) {
        const sortedData = AnalysisData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        const SkinAnalysisData = dataFunction(sortedData[0]);
        setAnalysisData(SkinAnalysisData)
      }
      else {
        setAnalysisData(EmyptyStatedata)
      }
      await getRequest('api/user/products/relevant').then((res) => {
        setReleventData(res?.products)
      }).catch((error) => {
        console.log(JSON?.stringify(error))
      });
      const response = await putRequest('api/user/dailyroutine/update', {
      });
      const DailtRoutineData = DailyRoutineData(response?.routine);
      setDailyRoutine(DailtRoutineData)
    } catch (error) {
      console.log("Failed to fetch user info from AsyncStorage", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (loading) {
      checkUserInfo();
    }
  }, [loading]);
  const renderItem = ({ item }) => (
    <GridItem image1={item.image1} progress={item.progress} level={item?.level} text={item.text} id={item?.id} year={item?.Year} onPress={() => handleSkinDetail(item)} />
  );

  const handleSkinDetail = (item) => {
    if (item?.progress === 0) {
      Alert.alert(
        "Analysis Required",
        "You should do your analysis first",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );

    }
    else {
      navigation.navigate('SkinTypeScreen', {
        params: {
          item,
          screen: "Home"
        }
      });
    }
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
      AnalyzeButton={false}
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
  const handleModalNavgation = () => {
    checkUserInfo()
    setModalVisible(false);
    navigation.navigate("Analysis")
  }
  const handleDailyRoutine = async (item) => {
    try {
      setLoading(true);
      let data = {};
      switch (item?.id) {
        case '1':
          data = { hydrate: true };
          break;
        case '2':
          data = { cleanse: true };
          break;
        case '3':
          data = { tone: true };
          break;
        case '4':
          data = { moisturize: true };
          break;
        case '5':
          data = { protection: true };
          break;
        default:
          throw new Error('Invalid routine item');
      }
      const response = await putRequest('api/user/dailyroutine/update', data);
      if (response?.routine) {
        const updatedRoutineData = DailyRoutineData(response.routine);
        setDailyRoutine(updatedRoutineData);
      } else {
        throw new Error('Failed to update routine');
      }
    } catch (error) {
      console.error('Error in handleDailyRoutine:', error);
    } finally {
      setLoading(false);
    }
  };
  
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
              <HomeBanner routines={dailyRoutine} OnPress={handleDailyRoutine}/>
              <HomeHeading heading={"Facial Skin Analysis"} Text2={"View Analysis"} onPressView={() => navigation.navigate('Analysis')} />
              <FlatList
                data={AnalysisData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingTop: 20, flex: 1, paddingLeft: 19 }}
                numColumns={2}
              />
              {releventData?.length > 0 && <><HomeHeading heading={"Recommend For You"} Text2={"View All"} onPressView={() => navigation.navigate('Product')} />
              <RecommendedProducts releventData={releventData} handleProductDeatil={handleProductDeatil}/></>
                }
              <HomeHeading heading={"Daily Routines"} />
              <FlatList
                data={DailyRoutine}
                renderItem={renderItem3}
                keyExtractor={item => item.id}
                contentContainerStyle={{ marginTop: 20, flex: 1, paddingHorizontal: 16, }}
              />
              <DailyResetButton routines={dailyRoutine} OnPress={handleDailyRoutine}/>
            </ScrollView>
          )
      }
      <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)} onAnalyze={handleModalNavgation} />
    </View>
  );
};

export default HomeScreen;
