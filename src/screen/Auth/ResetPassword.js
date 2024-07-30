import { Colors } from "../../../constants/Colors";
import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import PrimaryInput from '../../../components/PrimaryInput';
import PrimaryButton from '../../../components/PrimaryButton';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from "../../../components/ThemedText";
import { isEmailValid } from "../../Auth/helpers";
import BackButton from "../../../components/BackButton";
import { postRequest } from "../../../components/ApiHandler";
const ResetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [loading,setLoading]=useState(false)
  const handleNavigation = async () => {
    let valid=true;
    let emailErr = '';
    if (!email) {
      emailErr = 'Email is required';
      valid = false;
      setEmailError(emailErr);
    } else if (!isEmailValid(email)) {
      emailErr = 'Email format is not correct';
      valid = false;
      setEmailError(emailErr);
    }
    if(valid) {
      setLoading(true)
      const endpoint = 'api/auth/forget-password';
      const body = { email: email }
      await postRequest(endpoint, body).then((res) => {
        setLoading(false)
        navigation.navigate("ResetCode", { email ,res})
      }).catch((error) => {
        setLoading(false)
        // alert(JSON?.stringify(error))
      });

    }
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
                Heading={"Enter your Email"}
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setEmailError(false);
                }}
                onValidate={(text) => {
                  setEmailError(!isEmailValid(text));
                }}
                placeholderText={"Emailhere@gmail.com"}
                isError={emailError}
                textContentType="emailAddress"
                autoCapitalize={"none"}
              />
            </View>
            {emailError ? <Text style={styles.InvalidText}>{emailError}</Text> : null}
            <View style={styles.button}>
              <PrimaryButton text={"Reset Password"} onPress={handleNavigation} loading={loading}/>
            </View>
            <BackButton text="Back" onPress={() => { navigation.goBack() }} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ResetPassword;