import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screen/Home/Home';
import { useRoute } from '@react-navigation/native';

const Stack = createStackNavigator();

function HomeNavigator({  }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      {/* Add other screens here */}
    </Stack.Navigator>
  );
}

export default HomeNavigator;
