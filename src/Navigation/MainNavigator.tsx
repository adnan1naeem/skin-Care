
import * as React from 'react';
import Login from '../screen/Auth/Login';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screen/Auth/SignUp';
import Password from '../screen/Auth/Password';
import SetProfile from '../screen/Auth/SetProfile';
import TrackingBottomTabNavigator from './BottomNavigator';
import ProductDetailScreen from '../screen/Product/ProductDetailScreen';
import ResetPassword from '../screen/Auth/ResetPassword';
import ResetCode from '../screen/Auth/ResetCode';
import ConfirmPassword from '../screen/Auth/ConfirmPassword';

const Stack = createStackNavigator();

function MainNavigator({ isLoggedIn }) {
  return (
    <Stack.Navigator initialRouteName={isLoggedIn ? "Home" : "Login"} screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Password" component={Password} />
          <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} options={{gestureEnabled:false}} />
          <Stack.Screen name="ResetCode" component={ResetCode} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="SetProfile" component={SetProfile} />
          <Stack.Screen name="Home" component={TrackingBottomTabNavigator}/>
          <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
