import PrimaryIconButton from "@/components/PrimaryIconButton";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import { CheckBox } from "@rneui/themed";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import Google2 from "../../../assets/svg/Google2.svg";
import Facebook2 from "../../../assets/svg/Facebook2.svg";
import PrimaryInput from "@/components/PrimaryInput";
import { isEmailValid } from "../../Auth/helpers";
import PrimaryButton from "@/components/PrimaryButton";
import { styles } from "./styles";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };
  return (
    <View
      style={{ flex: 1, backgroundColor: "#E6E6FA", paddingHorizontal: 16 }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <ThemedText type="title" style={{ color: Colors.light.green }}>
            Login
          </ThemedText>
          <ThemedText type="default" style={{ color: Colors.light.greyText }}>
            Welcome to EstheMate
          </ThemedText>
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
                onChangeText={setPassword}
                isError={false}
                placeholderText="********"
                textContentType="password"
                secureTextEntry={true}
              />
            </View>
            <CheckBox
              checked={rememberMe}
              onPress={toggleRememberMe}
              title="Remember Me"
              iconType="material-community"
              checkedIcon="checkbox-outline"
              uncheckedIcon="checkbox-outline"
              checkedColor={"#666874"}
              textStyle={styles.Forget}
              containerStyle={{
                backgroundColor: "transparent",
                borderColor: "transparent",
                marginLeft: -10,
              }}
              disabled={false}
            />
            <PrimaryButton
              text={"Login"}
              onPress={() => {
                navigation.navigate("Home");
              }}
            />
            <View style={styles.button}>
              <PrimaryIconButton
                disable={false}
                titleText={"Login with Google"}
                onPress={() => {}}
                icon={<Google2 />}
              />
            </View>
            <View style={styles.button}>
              <PrimaryIconButton
                disable={false}
                titleText={"Login with Facebook"}
                onPress={() => {
                  navigation.navigate("Home");
                }}
                icon={<Facebook2 />}
              />
            </View>
            <View>
              <View style={styles.separator}>
                <View style={styles.SeparatorLine}></View>
                <Text style={styles.separatorOrText}>or</Text>
                <View style={styles.separatorLine}></View>
              </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text style={styles.newaccount}>Don’t have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                <Text
                  style={[
                    styles.newaccount,
                    { color: "#010317", fontFamily: "Poppins-SemiBold" },
                  ]}
                >
                  {" "}
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
