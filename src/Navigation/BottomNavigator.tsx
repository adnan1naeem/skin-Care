import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Colors } from "../../constants/Colors";
import Home from "../../assets/svg/home.svg";
import MarkedHome from "../../assets/svg/MarkedHome.svg";
import Task from "../../assets/svg/task.svg";
import MarkedTask from "../../assets/svg/MarkedTask.svg";
import MarkedSetting from "../../assets/svg/settings.svg";
import Box from "../../assets/svg/Box.svg";
import MarkedBox from "../../assets/svg/MarkedBox.svg";
import HomeNavigator from "./HomeStack/HomeNavigator";
import AnalysisNavigator from "./AnalysisStack/AnalysisNavigator";
import ProductNavigator from "./ProductStack/ProductNavigator";
import SmileIcon from '../../assets/svg/SimpleIcon.svg'
import Setting from '../../assets/svg/MarkedSettings.svg'
import Typography from "../../constants/Typography";
import CustomModal from "../screen/Home/Component/CustomModal";
import { useNavigation } from "@react-navigation/native";
import global from '../../utils/global'
import SettingNavigator from "./SettingStack/SettingNavigator";
type BottomTabParamList = {
  Track: undefined;
  Reward: undefined;
  Explore: undefined;
  Partners: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function TrackingBottomTabNavigator({route}) {
  const navigation=useNavigation();
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalNavgation =()=>{
    global.DailyRoutine=true;
    setModalVisible(false);
    navigation.reset({
      index: 0,
      routes: [{ name: "Analysis" }],
    });
  }
  return (
    <>
      <BottomTab.Navigator
        initialRouteName="Home"
        screenOptions={{
          lazy: false,
          tabBarStyle: {
            backgroundColor:Colors.light.white,
            height: 55 + insets.bottom,
            borderTopWidth: 0.5,
            borderTopColor: "#3C3C432B",
            paddingBottom: insets.bottom > 4 ? insets.bottom - 10 : 5,
          },
          tabBarIconStyle: { flex: undefined, height: 37 },
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={focused?styles.markedtext:styles.text}>Home</Text>
              ),
             headerShown:false,
            tabBarIcon: ({ focused }) =>
              focused ? <MarkedHome /> : <Home />,
          }}
        />
        <BottomTab.Screen
          name="Analysis"
          component={AnalysisNavigator}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={focused?styles.markedtext:styles.text}>Analysis</Text>
              ),
              headerShown:false,
            tabBarIcon: ({ focused }) =>
              focused ? <MarkedTask /> : <Task />,
          }}
        />
       <BottomTab.Screen
          name=" "
          component={AnalysisNavigator}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <TouchableOpacity style={styles.SmileIcon} onPress={() => setModalVisible(true)}>
                <SmileIcon />
              </TouchableOpacity>
            ),
          }}
        />
                <BottomTab.Screen
          name="Product"
          component={ProductNavigator}
          options={{
            tabBarLabel: ({ focused }) => (
                <Text style={focused?styles.markedtext:styles.text}>Product</Text>
              ),
              headerShown:false,
            tabBarIcon: ({ focused }) =>
              focused ? < MarkedBox/> : < Box/>,
          }}
        />
        <BottomTab.Screen
          name="Settings"
          component={SettingNavigator}
          options={{
            tabBarLabel: ({ focused }) => (
                <Text
                  style={focused?styles.markedtext:styles.text}
                >Setting</Text>
              ),
              headerShown:false,
            tabBarIcon: ({ focused }) =>
                focused ? <MarkedSetting /> : <Setting />,
            }}
        />
      </BottomTab.Navigator>
      <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)} onAnalyze={handleModalNavgation}/>
      </>
  );
}

const styles = StyleSheet.create({
  profileEmail: {
    ...Typography.Regular10_20
},
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
},
profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
},
profileDetails: {
    marginLeft: 16,
},
profileName: {
    ...Typography.SemiBold16_20,
},
  text:{
    ...Typography.SemiBold10_15,
    color:"#DCAE96"
  },
  markedtext:{
    ...Typography.SemiBold10_15,
    color:"#673147"
  },
  SmileIcon:{
    backgroundColor:'#FFFFFF',
    height:42,
    width:42,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
    headerBackground: { flex: 1, backgroundColor: Colors.light.background },
    headerTitle: {
      width: "100%",
      backgroundColor: Colors.light.background ,
    },
    title: {
      ...Typography.SemiBold24_47,
       textAlign: 'center',
       color:Colors.light.green,
   },
});
