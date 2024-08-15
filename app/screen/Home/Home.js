import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  Platform,
} from "react-native";
import HomeHeading from "../Home/Component/HomeHeadingComponent";
import { styles } from "./styles";
import GridItem from "../Home/Component/GridItem";
import ProductItem from "../Home/Component/ProductlComponent";
import { DailyRoutine, data, productList } from "./HomeDummyData";
import DailyRecommand from "../Home/Component/DailyRecommand";
import CustomModal from "../Home/Component/CustomModal";
import { useFocusEffect, useNavigation } from "expo-router";
import global from "../../../utils/global";
import { getColorValue } from "@/utils/ProgressBarColor";

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [Button, setButton] = useState(false);
  const [Analyze, setAnalyze] = useState(false);
  const renderItemRoutine = ({ item }) => {
    return (
      <View
        style={Platform.OS == "android" ? styles.gridItem : styles.gridItemIOS}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={item?.image1} style={styles.image} />
            <Text style={styles.text}>{item?.text}</Text>
          </View>
          <Text style={styles.desc} numberOfLines={3}>
            Cleanse your skin to remove dirt
          </Text>
        </View>
        <View>
          <TouchableOpacity
          // style={
          //   Platform.OS == "android"
          //     ? styles.buttonShadow
          //     : styles.buttonShadowIos
          // }
          >
            <View style={styles.button}>
              <Text style={styles.buttontext} numberOfLines={2}>
                {item?.buttonText}{" "}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderItem = ({ item }) => {
    return (
      <GridItem
        image1={item.image1}
        progress={item.progress}
        text={item.text}
        id={item?.id}
        year={item?.Year}
        bgImg={item?.bgImg}
        onPress={() => handleSkinDetail(item)}
      />
    );
  };

  useFocusEffect(
    useCallback(() => {
      if (global.DailyRoutine === true) {
        setAnalyze(global.DailyRoutine);
      }
    }, [global.DailyRoutine])
  );
  const renderItem2 = ({ item }) => (
    <ProductItem
      image1={item.image1}
      description={item.desciption}
      text={item.text}
      icons={item?.icons}
      onPress={() => handleProductDeatil(item)}
    />
  );
  const handleSkinDetail = (item) => {
    console.log("item".item);

    navigation.navigate("Analysis", {
      screen: "SkinTypeScreen",
      params: {
        item,
      },
    });
  };
  const handleProductDeatil = (item) => {
    navigation.navigate("ProductDetailScreen", item);
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
      setButton(true);
    } else {
      setModalVisible(true);
    }
  };
  const handleModalNavgation = () => {
    setAnalyze(true);
    setModalVisible(false);
    navigation.navigate("Analysis");
  };
  return (
    <View style={styles.main_container}>
      <View style={styles.HeaderContainer}>
        <Image
          source={require("../../../assets/images/Notification.png")}
          style={{ height: 40, width: 40 }}
          resizeMode="contain"
        />
        <View style={styles.Heading_Container}>
          <Text style={styles.Hello}>Hello,</Text>
          <Text style={styles.HomeText}> Anabia</Text>
        </View>
      </View>
      <ScrollView
        style={{ flex: 1, paddingTop: 25 }}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={require("../../../assets/images/transparentBg.png")}
          style={{
            backgroundColor: "#FFD700",
            overflow: "hidden",
            paddingBottom: 16,
          }}
        >
          <Image
            source={require("../../../assets/images/RoutineBg.png")}
            style={
              Platform.OS == "ios" ? styles.RoutineBgIos : styles.RoutineBg
            }
          />
          <HomeHeading
            heading={<Title mainTitleText={"My Glow-up Routine"} />}
            onPressView={() => navigation.navigate("Product")}
          />
          <FlatList
            data={DailyRoutine}
            renderItem={renderItemRoutine}
            keyExtractor={(item) => item.id}
            horizontal
            contentContainerStyle={{ paddingLeft: 16 }}
            showsHorizontalScrollIndicator={false}
          />
        </ImageBackground>

        <HomeHeading
          heading={
            <Title
              mainTitleText={"Step 1: "}
              mainTitleTextsub={"My skin score"}
              subTitleText={"What my skin is telling me!"}
            />
          }
          Text2={<Btn content={"Track Now"} />}
          onPressView={() => navigation.navigate("Analysis")}
        />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ marginTop: 20, flex: 1, paddingLeft: 16 }}
          numColumns={2}
        />

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
        <FlatList
          data={productList}
          renderItem={renderItem2}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={{ marginTop: 20, paddingLeft: 16 }}
          showsHorizontalScrollIndicator={false}
        />
        <HomeHeading
          heading={
            <Title
              mainTitleText={"Step 3: "}
              mainTitleTextsub={"Glow-Up!"}
              subTitleText={"Your daily Glow-Up Routine Tracker"}
            />
          }
        />
        <FlatList
          data={DailyRoutine}
          renderItem={renderItem3}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            marginTop: 20,
            flex: 1,
            paddingHorizontal: 16,
            marginBottom: 20,
          }}
        />
      </ScrollView>
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAnalyze={handleModalNavgation}
      />
    </View>
  );
};

const Title = ({ mainTitleText, mainTitleTextsub, subTitleText, TimeText }) => {
  return (
    <View>
      <Text style={styles.markedmainTitle}>
        {mainTitleText}
        <Text style={styles.MainTitle} numberOfLines={2}>
          {mainTitleTextsub}
        </Text>
      </Text>
      <Text style={styles.subTitle}>
        {subTitleText}{" "}
        {TimeText && <Text style={styles.markedSubTitle}>{TimeText}</Text>}
      </Text>
    </View>
  );
};
const Btn = ({ content, OnPress }) => {
  return (
    <View>
      <TouchableOpacity
        style={
          Platform.OS == "android"
            ? styles.buttonShadow
            : styles.buttonShadowIos
        }
      >
        <View style={styles.button}>
          <Text style={styles.buttontext} numberOfLines={2}>
            {content}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
