import { Colors } from "../../../constants/Colors";
import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from "../../../components/ThemedText";
import TextWithLabel from "./Component/TextwithLabel";
import BackButton from "../../../components/BackButton";
const AccountDetail = ({ navigation }) => {
  const handleNavigation=()=>{
      navigation.navigate("EditProfile")
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
          <TextWithLabel heading="First Name" data="Adnan" />
          <TextWithLabel heading="Last Name" data="Naeem" />
          <TextWithLabel heading="Date of Birth" data="01 Jul 1980" />
          <TextWithLabel heading="Gender" data="Male" />
          <TextWithLabel heading="Country of Residence" data="United States" />
          </View>
              <View style={styles.button}>
              <PrimaryButton text={"Edit"} onPress={handleNavigation}/>
              </View>
            <BackButton text="Back" onPress={()=>{navigation.goBack()}}/>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AccountDetail;