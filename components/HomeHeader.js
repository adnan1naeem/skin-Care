// components/Header.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Typography from '../constants/Typography';

const Header = ({ title, subtitle }) => {
  const userName = subtitle?.firstName;
  const userInitial = userName ? userName.charAt(0).toUpperCase() : '';
  return (
    <View style={styles.HeaderContainer}>
      {!userName ? (
        <Image
          source={require('../assets/images/Notification.png')}
          style={{ height: 40, width: 40 }}
          resizeMode="contain"
        />
      ) : (
        <View style={styles.InitialContainer}>
          <Text style={styles.InitialText}>{userInitial}</Text>
        </View>
      )}

      <View style={styles.HeadingContainer}>
        <Text style={styles.Hello}>{title}</Text>
        <Text style={styles.HomeText}>{userName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: { height: 44, flexDirection: 'row', marginTop: 10 },
  HeadingContainer: { justifyContent: 'center', alignSelf: 'center', flex: 1, flexDirection: 'row', marginRight: 30 },
  Hello: {
    ...Typography.Light20_30,
    color: '#2F4F4F',
  },
  HomeText: {
    ...Typography.SemiBold20_30,
    color: '#2F4F4F',
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

export default Header;
