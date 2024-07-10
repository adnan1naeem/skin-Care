import React, { useCallback, useState } from 'react';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import HomeHeading from './Component/HomeHeadingComponent';
import { styles } from './styles';
import GridItem from './Component/GridItem';
import ProductItem from './Component/ProductlComponent';
import { DailyRoutine, data, productList } from './HomeDummyData';
import DailyRecommand from './Component/DailyRecommand';
import CustomModal from './Component/CustomModal';
import { useNavigation,useFocusEffect } from "@react-navigation/native";
import global from '../../../utils/global'
const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation=useNavigation();
  const [Button,setButton]=useState(false);
  const [Analyze,setAnalyze]=useState(false);
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
    navigation.navigate('Analysis', {
      screen: 'SkinTypeScreen',
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
      <ScrollView style={{ flex: 1, paddingTop: 25 }} showsVerticalScrollIndicator={false}>
        <HomeHeading heading={"Facial Skin Analysis"} Text2={"View Analysis"} onPressView={()=>navigation.navigate('Analysis')}/>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ marginTop: 20, flex: 1, paddingLeft: 16 }}
          numColumns={2}
        />
        <HomeHeading heading={"Recommend For You"} Text2={"View All"} onPressView={()=>navigation.navigate('Product')}/>
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
      <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)} onAnalyze={handleModalNavgation}/>
    </View>
  );
};

export default HomeScreen;
