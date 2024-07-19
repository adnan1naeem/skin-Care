import { Colors } from "../../../constants/Colors";
import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from "../../../components/ThemedText";
import { CommonActions } from '@react-navigation/native';
import TextWithLabel from "./Component/TextwithLabel";
import BackButton from "../../../components/BackButton";
const Logout = ({ navigation }) => {
  const handleNavigation=()=>{
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    );
  }
  return (
    <View style={[styles.mainContainer,{backgroundColor:Colors.light.background}]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <ThemedText type="title" style={{ color: Colors.light.green, }}>Account</ThemedText>
          <View style={{marginTop:40}}>
          <TextWithLabel heading="Email" data="Emailhere@gmail.com" />
          </View>
              <View style={styles.button}>
              <PrimaryButton text={"Log Out"} onPress={handleNavigation}/>
              </View>
              <BackButton text="Back" onPress={()=>{navigation.goBack()}}/>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Logout;