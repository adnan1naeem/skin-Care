import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileTabParamList } from '../types';
import  ProfileSettings  from '../../screen/Setting/ProfileSettings';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Typography from '../../../constants/Typography';
import { Colors } from '../../../constants/Colors';
const SettingStack = createStackNavigator<ProfileTabParamList>();

const SettingNavigator = () => {

  return (
    <SettingStack.Navigator initialRouteName="ProductList">
      <SettingStack.Screen
        name="ProfileSettings"
        component={ProfileSettings}
        options={{
          headerBackground: () => <View style={styles.headerBackground} />,
          headerTitleContainerStyle: styles.headerTitle,
          headerTitle: () => (
            <View style={styles.profileContainer}>
                <Image
                    source={require('../../../assets/images/Notification.png')}
                    style={styles.profileImage}
                />
                <View style={styles.profileDetails}>
                    <Text style={styles.profileName}>Anabia</Text>
                    <Text style={styles.profileEmail}>youremail@gmail.com</Text>
                </View>
            </View>
          ),
          headerLeft: () => null,
        }}
      />
      
    </SettingStack.Navigator>
  );
};

export default SettingNavigator;
const styles = StyleSheet.create({
  profileEmail: {
    ...Typography.Regular10_20
},
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
},
profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
},
profileDetails: {
    marginLeft: 16,
},
profileName: {
    ...Typography.SemiBold16_20,
},

   headerBackground: { flex: 1, backgroundColor: Colors.light.background,alignItems:'center' },
   headerTitle: {
     width: "100%",
     backgroundColor: Colors.light.background ,
     height:60
   },
});
