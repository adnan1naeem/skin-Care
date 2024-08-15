import React, { useCallback, useEffect, useState } from 'react';
import { View, ScrollView, FlatList, Alert, Text, TouchableOpacity, Platform } from 'react-native';
import HomeHeading from './Component/HomeHeadingComponent';
import { styles } from './styles';
import GridItem from './Component/GridItem';
import { DailyRoutineData } from './HomeDummyData';
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
import { Btn, Title } from './Component/NewHeading';
const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [Button, setButton] = useState(false);
  const [AnalysisData, setAnalysisData] = useState("");
  const [userInfovalue, setUserInfo] = useRecoilState(userInfo);
  const [loading, setLoading] = useState(true);
  const [releventData, setReleventData] = useState(null)
  const [dailyRoutine, setDailyRoutine] = useState(null);
  const [date, setDate] = useState(null)
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
        const localDate = new Date(sortedData[0]?.updatedAt?.toLocaleString());
        const day = localDate.getDate();
        const month = localDate.toLocaleString('default', { month: 'long' });
        const year = localDate.getFullYear();
        setDate(localDate.toString())
        const formatted = `${day} ${month} ${year}`;
        setDate(formatted);
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
  const handleDailyRoutine = useCallback(async (item) => {
    try {
      setLoading(true);

      const routineDataMap = {
        '1': { hydrate: true },
        '2': { cleanse: true },
        '3': { tone: true },
        '4': { moisturize: true },
        '5': { protection: true },
      };

      const response = await putRequest('api/user/dailyroutine/update', routineDataMap[item?.id] || {});
      const updatedRoutineData = DailyRoutineData(response?.routine || {});
      setDailyRoutine(updatedRoutineData);

    } catch (error) {
      console.error('Error in handleDailyRoutine:', error);
    } finally {
      setLoading(false);
    }
  }, []);

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
              <HomeBanner routines={dailyRoutine} OnPress={handleDailyRoutine} />
              <HomeHeading
                heading={
                  <Title
                    mainTitleText={"Step 1: "}
                    mainTitleTextsub={"My skin score"}
                    subTitleText={"Last tracked:"}
                    TimeText={date}

                  />
                }
                Text2={<Btn content={"Track Now"} OnPress={handleRoutine} />}
                onPressView={() => navigation.navigate("Analysis")}
              />
              <FlatList
                data={AnalysisData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingTop: 20, flex: 1, paddingLeft: 19 }}
                numColumns={2}
              />
              {releventData?.length > 0 && <View style={{marginTop:Platform?.OS==="android"?20:0}}>
              <HomeHeading
                heading={
                  <Title
                    mainTitleText={"Step 2: "}
                    mainTitleTextsub={"Star Buys For Me!"}
                    subTitleText={"Products your skin is yearning for!"}
                  />
                }
                Text2={"View All"}
                onPressView={() => navigation.navigate("Product")}
              />
                <RecommendedProducts releventData={releventData} handleProductDeatil={handleProductDeatil} /></View>
              }
               <View style={{marginTop:Platform?.OS==="android"?20:0}}></View>
              <HomeHeading
                heading={
                  <Title
                    mainTitleText={"Step 3: "}
                    mainTitleTextsub={"Glow-Up!"}
                    subTitleText={"Your daily Glow-Up Routine Tracker"}
                  />
                }
              />
              <DailyResetButton routines={dailyRoutine} OnPress={handleDailyRoutine} />
            </ScrollView>
          )
      }
      <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)} onAnalyze={handleModalNavgation} />
    </View>
  );
};
export default HomeScreen;
