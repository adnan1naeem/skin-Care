import React from 'react';
import { View, ImageBackground } from 'react-native';
import HomeHeading from './HomeHeadingComponent';
import { styles } from './../styles';
import DailyResetButtons from './DailyRoutine';

const HomeBanner = ({ routines, OnPress }) => (
  <View style={styles.MainBanner}>
    <ImageBackground 
      source={require('../../../../assets/images/MainBanner.png')} 
      resizeMode="stretch" 
      style={{ height: 174, paddingVertical: 15 }}
    >
      <HomeHeading heading={"My Glow-up Routine"} />
        <DailyResetButtons OnPress={OnPress} routines={routines} horizontal={true}/>
    </ImageBackground>
  </View>
);

export default HomeBanner;
