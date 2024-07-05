
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screen/Auth/Login';
import Password from '../screen/Auth/Password';
import SignUp from "../screen/Auth/SignUp";
import TrackingBottomTabNavigator from './BottomNavigator';
import SetProfile from '../screen/Auth/SetProfile'
import ProductDetailScreen from '../screen/Product/ProductDetailScreen';
const Stack = createStackNavigator();

function MainNavigator() {
  return (
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}} >
        <Stack.Screen options={{header:()=>null}} name="Login" component={Login}  />
        <Stack.Screen name="Password" component={Password}  />
        <Stack.Screen name="Home" component={TrackingBottomTabNavigator}/>
        <Stack.Screen name="SignUp" component={SignUp}  />
        <Stack.Screen name="SetProfile" component={SetProfile}  />
        <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen}  />
      </Stack.Navigator>
  );
}

export default MainNavigator;
