import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileTabParamList } from '../types';
import  ProfileSettings  from '../../screen/Setting/ProfileSettings';
const SettingStack = createStackNavigator<ProfileTabParamList>();

const SettingNavigator = () => {

  return (
    <SettingStack.Navigator initialRouteName="ProductList">
      <SettingStack.Screen
        name="ProfileSettings"
        component={ProfileSettings}
        options={{
         headerShown:false,
        }}
      />
      
    </SettingStack.Navigator>
  );
};

export default SettingNavigator;