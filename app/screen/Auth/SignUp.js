import PrimaryIconButton from '@/components/PrimaryIconButton';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity} from 'react-native';
import Google2 from "../../../assets/svg/Google2.svg";
import Facebook2 from "../../../assets/svg/Facebook2.svg";
import PrimaryInput from '@/components/PrimaryInput';
import { isEmailValid } from '../../Auth/helpers';
import PrimaryButton from '@/components/PrimaryButton';
import { styles } from './styles';
const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [emailError, setEmailError] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor:"#f5fafa", paddingHorizontal: 16 }}>
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
            <View style={[styles.input,{marginBottom:20}]}>
            <PrimaryInput
                Heading={"Email"}
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setEmailError(false);
                }}
                placeholderText={"Emailhere@gmail.com"}
                isError={""}
                textContentType="emailAddress"
                autoCapitalize={"none"}
              />
            </View>

              <PrimaryButton text={"Sign Up"} onPress={()=>{navigation.navigate("Password")}}/>
              <View>
                <View style={styles.separator}>
                  <View style={styles.SeparatorLine}></View>
                <Text style={styles.separatorOrText}>or</Text>
                <View style={styles.separatorLine}></View>
                </View>
              </View>
              <View style={styles.button}>
                <PrimaryIconButton
                  disable={false}
                  titleText={"Sign up with Google"}
                  onPress={() => { }}
                  icon={<Google2 />}
                />
              </View>
              <View style={styles.button}>
                <PrimaryIconButton
                  disable={false}
                  titleText={"Sign Up with Facebook"}
                  onPress={() => { navigation.navigate("Password")}}
                  icon={<Facebook2 />}
                />
              </View>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
                <Text style={styles.newaccount}>Already have an Account?</Text>
               <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
               <Text style={[styles.newaccount,{color:'#010317',fontFamily:'Poppins-SemiBold',}]}> Login</Text>
               </TouchableOpacity>
              </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;
