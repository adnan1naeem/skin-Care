import * as React from 'react';
import { useEffect } from 'react';
import { AppState } from 'react-native';
import Login from '../screen/Auth/Login';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screen/Auth/SignUp';
import Password from '../screen/Auth/Password';
import SetProfile from '../screen/Auth/SetProfile';
import TrackingBottomTabNavigator from './BottomNavigator';
import ProductDetailScreen from '../screen/Product/ProductDetailScreen';
import * as Updates from 'expo-updates';

const Stack = createStackNavigator();

const checkAppUpdates = async () => {
  if (!__DEV__) {
    try {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        getUpdates();
      }
    } catch (error) {
      console.error("Error checking for updates", error);
    }
  }
};

const getUpdates = async () => {
  try {
    await Updates.fetchUpdateAsync();
    await Updates.reloadAsync();
  } catch (e) {
    console.error("Error fetching updates", e);
  }
};

function MainNavigator() {
  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'active') {
        checkAppUpdates();
      }
    };

    checkAppUpdates(); // Check immediately on mount
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen options={{ header: () => null }} name="Login" component={Login} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="Home" component={TrackingBottomTabNavigator} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SetProfile" component={SetProfile} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
