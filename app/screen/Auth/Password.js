import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import PrimaryInput from '@/components/PrimaryInput';
import PrimaryButton from '@/components/PrimaryButton';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
const Password = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.mainContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >

        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <ThemedText type="title" style={{ color: Colors.light.green, }}>Set your Password</ThemedText>
          <View style={styles.topSection}>
            <View style={[styles.input, { marginTop: 25 }]}>
            <PrimaryInput
                Heading={"New Password"}
                value={password}
                onChangeText={setPassword}
                isError={false}
                placeholderText='********'
                textContentType="password"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.input}>
              <PrimaryInput
                Heading={"Re-type Your Password"}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                isError={false}
                placeholderText='********'
                textContentType="password"
                secureTextEntry={true}
              />
            </View>
             
              <View style={styles.button}>
              <PrimaryButton text={"Save Password"} onPress={()=>{navigation.navigate("SetProfile")}}/>
              </View>
            <View style={{flexDirection:'row',marginTop:20,alignContent:'center'}}>
            <TouchableOpacity onPress={()=>{navigation.navigate("SignUp")}}>
            <Ionicons name="arrow-back" size={24} color="#707070" />
            </TouchableOpacity> 
               <Text style={[styles.newaccount,{marginTop:1,marginLeft:7}]}>Back</Text>
              </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Password;