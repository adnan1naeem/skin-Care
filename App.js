
import MainNavigator from './src/Navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import useCachedResources from './hooks/useCachedResources';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Settings } from "react-native-fbsdk-next";
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RecoilRoot } from 'recoil';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const checkToken = async () => {
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

  return (
   <RecoilRoot>
     <NavigationContainer>
      <StatusBar backgroundColor="#f5fafa" barStyle="dark-content"/>
      <MainNavigator isLoggedIn={isLoggedIn}/>
    </NavigationContainer>
   </RecoilRoot>
  );
}
