import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Colors } from "../../constants/Colors";
import Home from "../../assets/svg/Home.svg";
import MarkedHome from "../../assets/svg/MarkedHome.svg";
import Task from "../../assets/svg/task.svg";
import MarkedTask from "../../assets/svg/MarkedTask.svg";
import Setting from "../../assets/svg/settings.svg";
import Box from "../../assets/svg/Box.svg";
import MarkedBox from "../../assets/svg/MarkedBox.svg";
import HomeNavigator from "./HomeStack/HomeNavigator";
import AnalysisNavigator from "./AnalysisStack/AnalysisNavigator";
import ProductNavigator from "./ProductStack/ProductNavigator";
import SmileIcon from '../../assets/svg/SimpleIcon.svg'
import MarkedSetting from '../../assets/svg/Markedsettings.svg'
import Typography from "@/constants/Typography";
import ProfileSettings from "../screen/Setting/ProfileSettings";
import CustomModal from "../screen/Home/Component/CustomModal";
import { useNavigation } from "expo-router";
import global from '../../utils/global'
type BottomTabParamList = {
  Track: undefined;
  Reward: undefined;
  Explore: undefined;
  Partners: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function TrackingBottomTabNavigator() {
  const navigation=useNavigation();
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalNavgation =()=>{
    global.DailyRoutine=true;
    setModalVisible(false);
    navigation.navigate("Analysis");
  }
  return (
    <>
      <BottomTab.Navigator
    sceneContainerStyle={{backgroundColor:"green"}}
        initialRouteName="Home"
        head
        screenOptions={{
          lazy: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor:"red",
           
          },
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            headerShown: false,
            tabBarLabel: ({ focused }) => (
              <Text style={focused?styles.markedtext:styles.text}>Home</Text>
              ),
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
          component={HomeNavigator}
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
          component={ProfileSettings}
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
  text:{
    ...Typography.SemiBold10_15,
    color:Colors.light.icon
  },
  markedtext:{
    ...Typography.SemiBold10_15,
    color:Colors.light.green
  },
  SmileIcon:{
    backgroundColor:'#FFFFFF',
    height:'100%',
    width:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    elevation: 5,}
});
