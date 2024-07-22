import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileTabParamList } from '../types';
import ProfileSettings from '../../screen/Setting/ProfileSettings';
import Logout from '../../screen/Setting/Logout';
import { Image, StyleSheet, Text, View } from 'react-native';
import Typography from '../../../constants/Typography';
import { Colors } from '../../../constants/Colors';
import AccountDetail from '../../screen/Setting/AccountDetail';
import EditProfile from '../../screen/Setting/EditProfile';
import Support from '../../screen/Setting/Support';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../../utils/State';
const SettingStack = createStackNavigator<ProfileTabParamList>();

const SettingNavigator = () => {
  const userInfoData = useRecoilValue(userInfo);
  const userName = userInfoData?.firstName;
  const userInitial = userName ? userName.charAt(0).toUpperCase() : '';
  return (
    <SettingStack.Navigator initialRouteName="ProfileSettings">
      <SettingStack.Screen
        name="ProfileSettings"
        component={ProfileSettings}
        options={{
          gestureEnabled: false,
          headerBackground: () => <View style={styles.headerBackground} />,
          headerTitleContainerStyle: styles.headerTitle,
          headerTitle: () => (
            <View style={styles.profileContainer}>
              {!userName ? (
                <Image
                  source={require('../../../assets/images/Notification.png')}
                  style={styles.profileImage}
                />
              ) : (
                <View style={styles.InitialContainer}>
                  <Text style={styles.InitialText}>{userInitial}</Text>
                </View>
              )}

              <View style={styles.profileDetails}>
                <Text style={styles.profileName}>{userInfoData?.firstName}</Text>
                <Text style={styles.profileEmail}>{userInfoData?.email}</Text>
              </View>
            </View>
          ),
          headerLeft: () => null,
        }}
      />
      <SettingStack.Screen
        name="Logout"
        component={Logout}
        options={{
          headerShown: false,
        }}
        initialParams={{userInfoData}}
      />
      <SettingStack.Screen
        name="AccountDetail"
        component={AccountDetail}
        options={{
          headerShown: false,
        }}
        initialParams={{userInfoData}}
      />
      <SettingStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
      <SettingStack.Screen
        name="Support"
        component={Support}
        options={{
          headerShown: false,
        }}
      />

    </SettingStack.Navigator>
  );
};
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
  text: {
    ...Typography.SemiBold10_15,
    color: Colors.light.icon
  },
  markedtext: {
    ...Typography.SemiBold10_15,
    color: Colors.light.green
  },
  SmileIcon: {
    backgroundColor: '#FFFFFF',
    height: 42,
    width: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  headerBackground: { flex: 1, backgroundColor: Colors.light.background },
  headerTitle: {
    width: "100%",
    backgroundColor: Colors.light.background,
  },
  title: {
    ...Typography.SemiBold24_47,
    textAlign: 'center',
    color: Colors.light.green,
  },
  InitialContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  InitialText: {
    ...Typography.SemiBold20_30,
    color: '#2F4F4F',
  },
});
export default SettingNavigator;