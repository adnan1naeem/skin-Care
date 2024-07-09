
import MainNavigator from './src/Navigation/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import useCachedResources from './hooks/useCachedResources';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar/>
     <MainNavigator/>
    </NavigationContainer>
  );
}
