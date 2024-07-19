import PrimaryIconButton from '../../../components/PrimaryIconButton';
import { Colors } from "../../../constants/Colors";
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import Google2 from "../../../assets/svg/Google2.svg";
import Facebook2 from "../../../assets/svg/Facebook2.svg";
import PrimaryInput from '../../../components/PrimaryInput';
import { isEmailValid } from '../../Auth/helpers';
import PrimaryButton from '../../../components/PrimaryButton';
import { styles } from './styles';
import Screen from '../../../components/Screen';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '../../../components/ThemedText';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const[error,setError]=useState();
  const[UserInfo,setUserInfo]=useState();
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
          <ThemedText type="title" style={{ color: Colors.light.green, }}>Log In</ThemedText>
          <ThemedText type="default" style={{ color: Colors.light.greyText, }}>Welcome to EstheMate</ThemedText>
          <View style={styles.topSection}>
            <View style={[styles.input, { marginTop: 35 }]}>
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
                isError={""}
                textContentType="emailAddress"
                autoCapitalize={"none"}
              />
            </View>
            <View style={styles.input}>
              <PrimaryInput
                Heading={"Enter your Passoword"}
                ForgotPassword={"Forget Password"}
                value={password}
                OnPress={()=>{navigation.navigate("ResetPassword")}}
                onChangeText={setPassword}
                isError={false}
                placeholderText='********'
                textContentType="password"
                secureTextEntry={true}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
            <TouchableOpacity onPress={toggleRememberMe} style={{}}>
              <Ionicons
                name={rememberMe ? "checkbox-outline" : "square-outline"}
                size={20}
                color="#666874"
              />
            </TouchableOpacity>
            <Text style={styles.Forget}> Remember Me</Text>
            </View>
              <PrimaryButton text={"Log in"} onPress={()=>{navigation.replace("Home")}}/>
              {/* <View style={styles.button}>
                <PrimaryIconButton
                  disable={false}
                  titleText={"Login with Google"}
                  onPress={signin}
                  icon={<Google2 />}
                />
              </View> */}
              {/* <View style={styles.button}>
                <PrimaryIconButton
                  disable={false}
                  titleText={"Login with Facebook"}
                  onPress={handleFacebookLogin}
                  icon={<Facebook2 />}
                />
              </View> */}
              <View>
                <View style={styles.separator}>
                  <View style={styles.SeparatorLine}></View>
                <Text style={styles.separatorOrText}>or</Text>
                <View style={styles.separatorLine}></View>
                </View>
              </View>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={styles.newaccount}>Don’t have an account?</Text>
               <TouchableOpacity onPress={()=>{navigation.navigate("SignUp")}}>
               <Text style={[styles.newaccount,{color:'#010317',fontFamily:'Poppins-SemiBold',}]}> Sign Up</Text>
               </TouchableOpacity>
              </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default Login;