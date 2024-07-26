import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity, Alert } from 'react-native';
import Google2 from "../../../assets/svg/Google2.svg";
import Facebook2 from "../../../assets/svg/Facebook2.svg";
import PrimaryInput from '../../../components/PrimaryInput';
import { isEmailValid } from '../../Auth/helpers';
import PrimaryButton from '../../../components/PrimaryButton';
import { styles } from './styles';
import Screen from '../../../components/Screen';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '../../../components/ThemedText';
import { postRequest } from '../../../components/ApiHandler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSetRecoilState } from "recoil";
import { userInfo } from "../../../utils/State";
import { Colors } from '../../../constants/Colors';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [response, setResponse] = useState(null);
  const userInfoValues = useSetRecoilState(userInfo);

  useEffect(() => {
    const loadRememberedCredentials = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem('email');
        const savedPassword = await AsyncStorage.getItem('password');

        if (savedEmail && savedPassword) {
          setEmail(savedEmail);
          setPassword(savedPassword);
          setRememberMe(true);
        }
      } catch (error) {
        console.error("Error loading remembered credentials", error);
      }
    };

    loadRememberedCredentials();
  }, []);

  const handleLogin = async () => {
    let valid = true;
    let emailErr = '';
    let passwordErr = '';
    if (!email) {
      emailErr = 'Email cannot be empty';
      valid = false;
    } else if (!isEmailValid(email)) {
      emailErr = 'Email format is not correct';
      valid = false;
    }

    if (!password) {
      passwordErr = 'Password cannot be empty';
      valid = false;
    }
    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (valid) {
      const endpoint = 'api/auth/login';
      const body = {
        email: email,
        password: password,
      };
      try {
        const jsonResponse = await postRequest(endpoint, body);
        setResponse(jsonResponse);
        await AsyncStorage.setItem('token', jsonResponse.token);
        await AsyncStorage.setItem('userInfo', JSON.stringify(jsonResponse.userWithoutPassword));
        userInfoValues(jsonResponse?.userWithoutPassword);
        
        if (rememberMe) {
          await AsyncStorage.setItem('email', email);
          await AsyncStorage.setItem('password', password);
        } else {
          await AsyncStorage.removeItem('email');
          await AsyncStorage.removeItem('password');
        }

        navigation.replace("Home");
      } catch ({ error }) {
        // alert(error)
      }
    }
  };
  
  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };
  // const handleFacebookLogin = async () => {
  //   try {
  //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  //     if (result.isCancelled) {
  //       alert('Login cancelled');
  //     } else {
  //       const data = await AccessToken.getCurrentAccessToken();
  //       alert(data.accessToken.toString());
  //     }
  //   } catch (error) {
  //     console.log('Login fail with error: ' + error);
  //   }
  // };
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
  //   // alert(JSON?.stringify(user))
  //   setError ();
  //   } catch (e) {
  //   setError (e) ;
  //   }
  // }
  // const logout = () => {
  //   setUserInfo();
  //   GoogleSignin.revokeAccess();
  //   GoogleSignin.signOut();
  // }
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
          <ThemedText type="title" style={{ color: Colors.light.green }}>Log In</ThemedText>
          <ThemedText type="default" style={{ color: Colors.light.greyText }}>Welcome to EstheMate</ThemedText>
          <View style={styles.topSection}>
            <View style={[styles.input, { marginTop: 35 }]}>
              <PrimaryInput
                Heading={"Enter your Email"}
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setEmailError('');
                }}
                onBlur={() => {
                  if (!email) {
                    setEmailError('Email cannot be empty');
                  } else if (!isEmailValid(email)) {
                    setEmailError('Email format is not correct');
                  }
                }}
                placeholderText={"Emailhere@gmail.com"}
                isError={emailError !== ''}
                textContentType="emailAddress"
                autoCapitalize={"none"}
              />
            </View>
            {emailError ? <Text style={styles.InvalidText}>{emailError}</Text> : null}
            <View style={styles.input}>
              <PrimaryInput
                Heading={"Enter your Password"}
                ForgotPassword={"Forget Password"}
                value={password}
                OnPress={() => { navigation.navigate("ResetPassword") }}
                onChangeText={(text) => {
                  setPassword(text);
                  setPasswordError('');
                }}
                onBlur={() => {
                  if (!password) {
                    setPasswordError('Password cannot be empty');
                  }
                }}
                isError={passwordError !== ''}
                placeholderText='********'
                textContentType="password"
                secureTextEntry={true}
              />
            </View>
            {passwordError ? <Text style={styles.InvalidText}>{passwordError}</Text> : null}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
              <TouchableOpacity onPress={toggleRememberMe}>
                <Ionicons
                  name={rememberMe ? "checkbox-outline" : "square-outline"}
                  size={20}
                  color="#666874"
                />
              </TouchableOpacity>
              <Text style={styles.Forget}> Remember Me</Text>
            </View>
            <PrimaryButton text={"Log in"} onPress={handleLogin} />
            {/* Uncomment if needed
            <View style={styles.button}>
              <PrimaryIconButton
                disable={false}
                titleText={"Login with Google"}
                onPress={signin}
                icon={<Google2 />}
              />
            </View>
            <View style={styles.button}>
              <PrimaryIconButton
                disable={false}
                titleText={"Login with Facebook"}
                onPress={handleFacebookLogin}
                icon={<Facebook2 />}
              />
            </View>
            */}
            <View>
              <View style={styles.separator}>
                <View style={styles.SeparatorLine}></View>
                <Text style={styles.separatorOrText}>or</Text>
                <View style={styles.separatorLine}></View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={styles.newaccount}>Don’t have an account?</Text>
              <TouchableOpacity onPress={() => { navigation.navigate("SignUp") }}>
                <Text style={[styles.newaccount, { color: '#010317', fontFamily: 'Poppins-SemiBold' }]}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default Login;