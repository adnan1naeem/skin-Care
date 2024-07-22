import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screen/Home/Home';
import SkinDetail from '../../screen/Anylysis/SkinDetail';
import { StyleSheet, View } from 'react-native';
import Header from '../../../components/HomeHeader';
import { Colors } from '../../../constants/Colors';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../../utils/State';

const Stack = createStackNavigator();

function HomeNavigator({}) {
  const userInfovalue=useRecoilValue(userInfo);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ 
          headerBackground: () => <View style={styles.headerBackground} />,
          headerTitleContainerStyle: styles.headerTitle,
          headerTitle: () => (
            <Header
              title={"Hello,"}
              subtitle={userInfovalue}
            />
          ),
        }}
      />
        <Stack.Screen
        name="SkinTypeScreen"
        component={SkinDetail}
        options={({ route }) => ({
          headerShown: false,
        })}

      />
      {/* Add other screens here */}
    </Stack.Navigator>
  );
}

export default HomeNavigator;
const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: Colors.light.background,
    alignItems: 'center'
  },
  headerTitle: {
    width: "100%",
    backgroundColor: Colors.light.background,
  },
  
});
