import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
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
import CustomModal from "../screen/Home/Component/CustomModal";
import { useNavigation } from "expo-router";
import global from '../../utils/global'
import SettingNavigator from "./SettingStack/SettingNavigator";
type BottomTabParamList = {
  Track: undefined;
  Reward: undefined;
  Explore: undefined;
  Partners: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function TrackingBottomTabNavigator() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [modalVisible, setModalVisible] = useState(false);
  const handleModalNavgation = () => {
    global.DailyRoutine = true;
    setModalVisible(false);
    navigation.navigate("Analysis");
  }

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1, justifyContent: 'flex-end',
        }}>
        <BottomTab.Navigator
          sceneContainerStyle={{ backgroundColor: "", }}
          initialRouteName="Home"
          head
          screenOptions={{
            lazy: false,
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#FFFFFF",
              marginTop: insets.bottom === 0 ? 0 : -insets.bottom,
              transform: [
                {
                  translateY: insets.bottom === 0 ? 0 : insets.bottom
                }
              ],
              height: insets.bottom ? "12%" : "8%",

            },
          }}
        >

          <BottomTab.Screen
            name="Home"
            component={HomeNavigator}
            options={{
              headerShown: false,
              tabBarLabel: ({ focused }) => (
                <Text style={focused ? styles.markedtext : styles.text}>Home</Text>
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
                <Text style={focused ? styles.markedtext : styles.text}>Analysis</Text>
              ),
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? <MarkedTask /> : <Task />,
            }}
          />
          <BottomTab.Screen
            name=" "
            component={HomeNavigator}
            options={{
              headerShown: false,
              tabBarLabel: () => null,
              tabBarIcon: () => (
                <TouchableOpacity style={[styles.SmileIcon]} onPress={() => setModalVisible(true)}>
                  <SmileIcon></SmileIcon>
                </TouchableOpacity>
              ),
            }}
          />
          <BottomTab.Screen
            name="Product"
            component={ProductNavigator}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text style={focused ? styles.markedtext : styles.text}>Products</Text>
              ),
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? < MarkedBox /> : < Box />,
            }}
          />
          <BottomTab.Screen
            name="Settings"
            component={SettingNavigator}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text
                  style={focused ? styles.markedtext : styles.text}
                >Settings</Text>
              ),
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? <MarkedSetting /> : <Setting />,
            }}
          />

        </BottomTab.Navigator>
        <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)} onAnalyze={handleModalNavgation} />
      </SafeAreaView >
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    ...Typography.SemiBold12_14,
    color: '#DCAE96',
    marginBottom: 10
  },
  markedtext: {
    ...Typography.SemiBold12_14,
    color: Colors.light.green,
    letterSpacing: 0.2,
    marginBottom: 10
  },
  SmileIcon: {
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
    overflow: "hidden",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 2 }, // 设置为 0 以在 iOS 上环绕显示阴影
    shadowRadius: 6,
    elevation: 40, // Android 的 elevation 默认只显示底部阴影
  }
});
