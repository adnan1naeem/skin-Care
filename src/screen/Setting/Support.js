import { Colors } from "../../../constants/Colors";
import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './styles';
import { ThemedText } from "../../../components/ThemedText";
import BackButton from "../../../components/BackButton";
const Support = ({ navigation }) => {
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
          <ThemedText type="title" style={{ color: Colors.light.green, }}>Support</ThemedText>
          <View style={{marginTop:40}}>
            <Text style={styles.heading}>Feel free to send your inquiries to</Text>
            <Text style={styles.heading}>admin@esthemate.com</Text>
          </View>
          <BackButton text="Back" onPress={()=>{navigation.goBack()}}/>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Support;