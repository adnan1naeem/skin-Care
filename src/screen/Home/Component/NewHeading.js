import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { styles } from '../styles';  // Adjust the import path as necessary

export const Title = ({ mainTitleText, mainTitleTextsub, subTitleText, TimeText }) => {
  return (
    <View>
      <Text style={styles.markedmainTitle}>
        {mainTitleText}
        <Text style={styles.MainTitle} numberOfLines={2}>
          {mainTitleTextsub}
        </Text>
      </Text>
      <Text style={styles.subTitle}>
        {subTitleText}{" "}
        {TimeText && <Text style={styles.markedSubTitle}>{TimeText}</Text>}
      </Text>
    </View>
  );
};

export const Btn = ({ content, OnPress }) => {
  return (
    <View>
      <TouchableOpacity
        style={
          Platform.OS == "android"
            ? styles.buttonShadow
            : styles.buttonShadowIos
        }
        onPress={OnPress}
      >
        <View style={styles.button}>
          <Text style={styles.buttontext} numberOfLines={2}>
            {content}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
