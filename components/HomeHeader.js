// components/Header.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Typography from '../constants/Typography';

const Header = ({ title, subtitle }) => {
  return (
    <View style={styles.HeaderContainer}>
      <Image
        source={require('../assets/images/Notification.png')}
        style={{ height: 40, width: 40 }}
        resizeMode="contain"
      />
      <View style={styles.HeadingContainer}>
        <Text style={styles.Hello}>{title}</Text>
        <Text style={styles.HomeText}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer:{ height: 44, flexDirection: 'row',marginTop:10 },
  HeadingContainer:{ justifyContent: 'center', alignSelf: 'center', flex: 1, flexDirection: 'row', marginRight: 30 },
  Hello:{
    ...Typography.Light20_30,
      color:'#2F4F4F',
  },
  HomeText:{
    ...Typography.SemiBold20_30,
    color:'#2F4F4F',
},
});

export default Header;
