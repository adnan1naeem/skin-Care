import { Colors } from "../../../constants/Colors";
import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import PrimaryInput from '../../../components/PrimaryInput';
import PrimaryButton from '../../../components/PrimaryButton';
import { styles } from './styles';
import { ThemedText } from "../../../components/ThemedText";
const ConfirmPassword = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const validatePasswords = () => {
    if (!password || !confirmPassword) {
      setPasswordError(true);
    } else if (password !== confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      navigation.navigate("Login");
    }
  };

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
          <ThemedText type="title" style={{ color: Colors.light.green, }}>Reset Password</ThemedText>
          <View style={styles.topSection}>
            <View style={[styles.input, { marginTop: 25 }]}>
            <PrimaryInput
                Heading={"New Password"}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                }}
                isError={passwordError}
                placeholderText='********'
                textContentType="password"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.input}>
              <PrimaryInput
                Heading={"Re-enter New Password"}
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                }}
                isError={passwordError}
                placeholderText='********'
                textContentType="password"
                secureTextEntry={true}
              />
            </View>
            {passwordError && <Text style={styles.InvalidText}>Passwords do not match</Text>}
              <View style={styles.button}>
              <PrimaryButton text={"Reset Password"} onPress={validatePasswords}/>
              </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ConfirmPassword;