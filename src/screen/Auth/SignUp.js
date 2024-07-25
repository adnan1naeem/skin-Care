import { Colors } from '../../../constants/Colors';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity, Pressable, Alert } from 'react-native';
import PrimaryInput from '../../../components/PrimaryInput';
import PrimaryButton from '../../../components/PrimaryButton';
import { styles } from './styles';
import Screen from '../../../components/Screen';
import { ThemedText } from '../../../components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [AgreeTC, setAgreeTC] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  
  const toggleRememberMe = () => {
    setAgreeTC(!AgreeTC);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = () => {
    let valid = true;
    if (!firstName) {
      setFirstnameError("First Name is required");
      valid = false;
    } else {
      setFirstnameError("");
    }

    if (!lastName) {
      setLastnameError("Last Name is required");
      valid = false;
    } else {
      setLastnameError("");
    }

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!AgreeTC) {
      Alert.alert("Terms and Conditions", "You must agree to the terms and conditions.");
      valid = false;
    }

    if (valid) {
      navigation.navigate("Password", { email, firstName, lastName });
    }
  };

  const handleTermsPress = () => {
    // navigation.navigate('TermsOfService');
  };

  const handlePrivacyPress = () => {
    // navigation.navigate('PrivacyPolicy');
  };

  return (
    <Screen style={styles.mainContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <ThemedText type="title" style={{ color: Colors.light.green }}>Create Your Account</ThemedText>
          <ThemedText type="default" style={{ color: Colors.light.greyText }}>Welcome to EstheMate</ThemedText>
          <View style={styles.topSection}>
            <View style={[styles.input, { marginTop: 35 }]}>
              <PrimaryInput
                Heading={"First Name"}
                value={firstName}
                onChangeText={(text) => setFirstname(text)}
                placeholderText={"First Name"}
                isError={""}
                textContentType="givenName"
                autoCapitalize={"words"}
              />
              {firstnameError ? <Text style={styles.InvalidText}>{firstnameError}</Text> : null}
            </View>
            <View style={styles.input}>
              <PrimaryInput
                Heading={"Last Name"}
                value={lastName}
                onChangeText={(text) => setLastname(text)}
                placeholderText={"Last Name"}
                isError={""}
                textContentType="familyName"
                autoCapitalize={"words"}
              />
              {lastnameError ? <Text style={styles.InvalidText}>{lastnameError}</Text> : null}
            </View>
            <View style={[styles.input]}>
              <PrimaryInput
                Heading={"Email"}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholderText={"Your email here"}
                isError={""}
                textContentType="emailAddress"
                autoCapitalize={"none"}
              />
              {emailError ? <Text style={styles.InvalidText}>{emailError}</Text> : null}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
              <TouchableOpacity onPress={toggleRememberMe}>
                <Ionicons
                  name={AgreeTC ? "checkbox-outline" : "square-outline"}
                  size={20}
                  color="#666874"
                />
              </TouchableOpacity>
              <Text style={styles.agreementText}>
                I have read and agree to the{' '}
                <Pressable onPress={handleTermsPress} style={{ paddingVertical: 1 }}>
                  <Text style={styles.linkText}>Terms of Service</Text>
                </Pressable>
                {" "}and{" "}
                <Pressable onPress={handlePrivacyPress} style={{ paddingVertical: 1 }}>
                  <Text style={styles.linkText}>Privacy Policy</Text>
                </Pressable>.
              </Text>
            </View>
            <PrimaryButton text={"Sign Up"} onPress={handleSignUp} />
            <View>
              <View style={styles.separator}>
                <View style={styles.SeparatorLine}></View>
                <Text style={styles.separatorOrText}>or</Text>
                <View style={styles.SeparatorLine}></View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
              <Text style={styles.newaccount}>Already have an Account?</Text>
              <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                <Text style={[styles.newaccount, { color: '#010317', fontFamily: 'Poppins-SemiBold', }]}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default SignUp;
