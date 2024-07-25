
import MainNavigator from './src/Navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import useCachedResources from './hooks/useCachedResources';
import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { Settings } from "react-native-fbsdk-next";
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RecoilRoot, useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { ActivityIndicator } from 'react-native-paper';
import { Colors } from './constants/Colors';
import { userInfo } from './utils/State';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userInfovalue, setUserInfo] = useRecoilState(userInfo);
  const resetUserInfo = useResetRecoilState(userInfo);
  useEffect(() => {
    const checkToken = async () => {
      const userInfo = await AsyncStorage.getItem('userInfo');
      setUserInfo(userInfo)
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      }
      setIsLoading(false);
    };

    checkToken();
  }, []);

  const tracking = () => {
    if (Platform.OS === "ios") {
      requestTrackingPermissionsAsync().then(({ status }: { status: string }) => {
        if (status === "granted") {
          Settings.setAdvertiserTrackingEnabled(true);
        }
      });
    }
  };

  tracking();
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  }
const checkInternetConnection = async () => {
    try {
        const response = await fetch('https://google.com', {
            method: 'HEAD',
            cache: 'no-cache'
        });
        console.log("response",response.ok);
        return response.ok;
    } catch (error) {
      alert("Network Error")
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userInfo');
      resetUserInfo();
    }
};
checkInternetConnection();
  return (
    (isLoading ?
      <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
        <ActivityIndicator
          color={Colors.light?.green}
          size="small"
          style={{ flex: 1 }}
        />
      </View> :
      <RecoilRoot>
        <NavigationContainer>
          <StatusBar backgroundColor="#f5fafa" barStyle="dark-content" />
          <MainNavigator isLoggedIn={isLoggedIn} userInfo={userInfo}/>
        </NavigationContainer>
      </RecoilRoot>)
  );
}
