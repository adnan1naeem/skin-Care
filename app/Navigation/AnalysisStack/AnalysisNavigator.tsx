import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileTabParamList } from '../types';
import SkinAnalysis from '../../screen/Anylysis/SkinAnalysis'
import SkinDetail from '../../screen/Anylysis/SkinDetail'
const AnalysisStack = createStackNavigator<ProfileTabParamList>();

const AnalysisNavigator = () => {

  return (
    <AnalysisStack.Navigator initialRouteName="Analysis"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "blue",

        },
      }}>
      <AnalysisStack.Screen
        name="Analysis"
        component={SkinAnalysis}
        options={{
          headerShown: false,
        }}
      />
      <AnalysisStack.Screen
        name="SkinTypeScreen"
        component={SkinDetail}
        options={{
          headerShown: false,
        }}
      />

    </AnalysisStack.Navigator>
  );
};

export default AnalysisNavigator;