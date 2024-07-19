import PrimaryIconButton from '../../../components/PrimaryIconButton';
import { Colors } from '../../../constants/Colors';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity, Pressable } from 'react-native';
import Google2 from "../../../assets/svg/Google2.svg";
import Facebook2 from "../../../assets/svg/Facebook2.svg";
import PrimaryInput from '../../../components/PrimaryInput';
import PrimaryButton from '../../../components/PrimaryButton';
import { styles } from './styles';
import Screen from '../../../components/Screen';
import { ThemedText } from '../../../components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [AgreeTC, setAgreeTC] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const toggleRememberMe = () => {
    setAgreeTC(!AgreeTC);
  };
  // useEffect(()=>{
  //   GoogleSignin.configure(
  //     {
  //       webClientId: '563051675973-at507f1n2bmos7s0a3kp6d5b3jvnj2in.apps.googleusercontent.com',
  //      }
  //   );
  // },[])
  // const signin = async () => {
  //   try {
  //   await GoogleSignin.hasPlayServices();
  //   const user = await GoogleSignin.signIn();
  //   setUserInfo (user) ;
  //   navigation.replace("Home")
  //   setError ();
  //   } catch (e) {
  //     navigation.replace("Home")
  //     // alert(JSON?.stringify(e,null,2))
  //   setError (e) ;
  //   }
  // }
  const handleTermsPress = () => {
    navigation.navigate('TermsOfService');
  };

  const handlePrivacyPress = () => {
    navigation.navigate('PrivacyPolicy');
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
          <ThemedText type="title" style={{ color: Colors.light.green, }}>Create Your Account</ThemedText>
          <ThemedText type="default" style={{ color: Colors.light.greyText, }}>Welcome to EstheMate</ThemedText>
          <View style={styles.topSection}>
            <View style={[styles.input, { marginTop: 35 }]}>
              <PrimaryInput
                Heading={"First Name"}
                value={firstname}
                onChangeText={(text) => {
                  setFirstname(text)
                }}
                placeholderText={"First Name"}
                isError={""}
                textContentType="emailAddress"
                autoCapitalize={"none"}
              />
            </View>
            <View style={styles.input}>
              <PrimaryInput
                Heading={"Last Name"}
                value={lastname}
                onChangeText={(text) => {
                  setLastname(text)
                }}
                placeholderText={"Last Name"}
                isError={""}
                textContentType="emailAddress"
                autoCapitalize={"none"}
              />
            </View>
            <View style={[styles.input]}>
              <PrimaryInput
                Heading={"Email"}
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setEmailError(false);
                }}
                placeholderText={"Your email here"}
                isError={""}
                textContentType="emailAddress"
                autoCapitalize={"none"}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
              <TouchableOpacity onPress={toggleRememberMe}>
                <Ionicons
                  name={AgreeTC ? "checkbox-outline" : "square-outline"}
                  size={24}
                  color="#666874"
                />
              </TouchableOpacity>
              <Text style={styles.agreementText}>
                I have read and agree to the{' '}
                <Pressable onPress={handleTermsPress} style={{justifyContent:"center",paddingTop:1}}>
                  <Text style={styles.linkText}>Terms of Service</Text>
                </Pressable>
                {" "}and{" "}
                <Pressable onPress={handlePrivacyPress} style={{justifyContent:"flex-end",paddingTop:1}}>
                  <Text style={styles.linkText}>Privacy Policy</Text>
                </Pressable>.
              </Text>
            </View>
            <PrimaryButton text={"Sign Up"} onPress={() => { navigation.navigate("Password") }} />
            <View>
              <View style={styles.separator}>
                <View style={styles.SeparatorLine}></View>
                <Text style={styles.separatorOrText}>or</Text>
                <View style={styles.separatorLine}></View>
              </View>
            </View>
            {/* <View style={styles.button}>
                <PrimaryIconButton
                  disable={false}
                  titleText={"Sign up with Google"}
                  onPress={signin}
                  icon={<Google2 />}
                />
              </View> */}
            {/* <View style={styles.button}>
                <PrimaryIconButton
                  disable={false}
                  titleText={"Sign Up with Facebook"}
                  onPress={() => { navigation.navigate("Password")}}
                  icon={<Facebook2 />}
                />
              </View> */}
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
