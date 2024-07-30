import { Colors } from "../../../constants/Colors";
import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import PrimaryInput from '../../../components/PrimaryInput';
import PrimaryButton from '../../../components/PrimaryButton';
import { styles } from './styles';
import { ThemedText } from "../../../components/ThemedText";
import { postRequest } from "../../../components/ApiHandler";

const ConfirmPassword = ({ navigation, route }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loading,setLoading]=useState(false)
  const validatePasswords = async () => {
    let valid = true;
    let passwordErr = '';
    let confirmPasswordErr = '';

    if (!password) {
      passwordErr = 'Password cannot be empty';
      valid = false;
    }

    if (!confirmPassword) {
      confirmPasswordErr = 'Re-enter Password cannot be empty';
      valid = false;
    } else if (password !== confirmPassword) {
      confirmPasswordErr = 'Passwords did not match';
      valid = false;
    }

    setPasswordError(passwordErr);
    setConfirmPasswordError(confirmPasswordErr);

    if (valid) {
      setLoading(true)
      const endpoint = 'api/auth/reset-password';
      const data = {
        ...route.params,
        password: password
      };

      try {
        await postRequest(endpoint, data);
        setLoading(false)
        navigation.navigate("Login");
      } catch (error) {
        setLoading(false)
      }
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
          <ThemedText type="title" style={{ color: Colors.light.green }}>Reset Password</ThemedText>
          <View style={styles.topSection}>
            <View style={[styles.input, { marginTop: 25 }]}>
              <PrimaryInput
                Heading={"New Password"}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setPasswordError(''); // Clear error when user starts typing
                }}
                isError={!!passwordError}
                placeholderText='********'
                textContentType="password"
                secureTextEntry={true}
              />
            </View>
            {passwordError ? <Text style={styles.InvalidText}>{passwordError}</Text> : null}
            <View style={styles.input}>
              <PrimaryInput
                Heading={"Re-enter New Password"}
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                  setConfirmPasswordError(''); // Clear error when user starts typing
                }}
                isError={!!confirmPasswordError}
                placeholderText='********'
                textContentType="password"
                secureTextEntry={true}
              />
            </View>
            {confirmPasswordError ? <Text style={styles.InvalidText}>{confirmPasswordError}</Text> : null}
            <View style={styles.button}>
              <PrimaryButton text={"Reset Password"} onPress={validatePasswords} loading={loading}/>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ConfirmPassword;
