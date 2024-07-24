import { Colors } from "../../../constants/Colors";
import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import PrimaryInput from '../../../components/PrimaryInput';
import PrimaryButton from '../../../components/PrimaryButton';
import { styles } from './styles';
import { ThemedText } from "../../../components/ThemedText";
import BackButton from "../../../components/BackButton";
const ResetCode = ({ navigation,route }) => {
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState(false);
  const isCodeValid = (text) => {
    // Example validation: code must be a number and have a specific length
    const regex = /^[0-9]{6}$/; // Adjust regex to match your code requirements
    return regex.test(text);
  };
  const handleNavigation=()=>{
    navigation.navigate("ConfirmPassword",{...route?.params,token:code})
  }
  return (
    <View style={[styles.mainContainer, { backgroundColor: Colors.light.background }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >

        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <ThemedText type="title" style={{ color: Colors.light.green, }}>Reset Password</ThemedText>
          <View style={styles.topSection}>
            <View style={[styles.input, { marginTop: 35, marginBottom: 10 }]}>
              <PrimaryInput
                Heading={"Enter Code"}
                value={code}
                onChangeText={(text) => {
                  setCode(text);
                  setCodeError(false);
                }}
                onValidate={(text) => {
                  setCodeError(!isCodeValid(text));
                }}
                placeholderText={""}
                isError={codeError}
                keyboardType="numeric"
                textContentType="oneTimeCode" 
                autoCapitalize="none"
              />
              {codeError && <Text style={styles.InvalidText}>Invalid code</Text>}
            </View>

            <View style={styles.button}>
              <PrimaryButton text={"Verify"} onPress={handleNavigation} />
            </View>
            <BackButton text="Back" onPress={()=>{navigation.goBack() }}/>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ResetCode;