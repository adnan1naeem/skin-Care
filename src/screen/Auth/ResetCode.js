import { Colors } from "../../../constants/Colors";
import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import PrimaryInput from '../../../components/PrimaryInput';
import PrimaryButton from '../../../components/PrimaryButton';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from "../../../components/ThemedText";
import { isEmailValid } from "../../Auth/helpers";
const ResetCode = ({ navigation }) => {
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState(false);
  const isCodeValid = (text) => {
    // Example validation: code must be a number and have a specific length
    const regex = /^[0-9]{6}$/; // Adjust regex to match your code requirements
    return regex.test(text);
  };
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
              <PrimaryButton text={"Verify"} onPress={() => { navigation.navigate("ConfirmPassword") }} />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20, alignContent: 'center' }}>
              <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Ionicons name="arrow-back" size={24} color="#707070" />
              </TouchableOpacity>
              <Text style={[styles.newaccount, { marginTop: 1, marginLeft: 7 }]}>Back</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ResetCode;