import { Colors } from "../constants/Colors";
import Typography from "../constants/Typography";
import { useState } from "react";
import { TextInput, StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface Props {
  onChangeText: (text: string) => void;
  value: string;
  placeholderText: string;
  isError: boolean;
  textContentType?: any;
  secureTextEntry?: boolean;
  keyboardType?: any;
  autoCapitalize?: any;
  onValidate?: (text: string) => void;
  Heading?: string;
  ForgotPassword?:String;
  OnPress:()=>void;
}

const PrimaryInput = ({
  onChangeText,
  value,
  placeholderText,
  isError,
  textContentType,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  onValidate,
  Heading,
  ForgotPassword,
  OnPress,
}: Props) => {
  const [inputSelected, setInputSelected] = useState(false);

  let inputStyle = {};
  if (isError) {
    inputStyle = { borderColor: "red", color: "red" };
  } else if (inputSelected) {
    inputStyle = { borderColor: Colors.light.green };

  }
  return (
    <View>
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={styles.heading}>{Heading}</Text>
      <TouchableOpacity onPress={OnPress}>
      <Text style={styles.Forget}>{ForgotPassword}</Text>
      </TouchableOpacity>
      </View>
      <TextInput
        autoCapitalize={autoCapitalize}
        textContentType={textContentType}
        returnKeyType="next"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        value={value}
        onBlur={() => {
          setInputSelected(false);
          onValidate?.(value);
        }}
        onFocus={() => setInputSelected(true)}
        onChangeText={onChangeText}
        placeholder={placeholderText}
        style={[styles.inputField, inputStyle]}
        placeholderTextColor={"#708090"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    paddingHorizontal: 16,
    color: Colors.light.greyText,
    backgroundColor:Colors.light.white
  },
  heading:{
    ...Typography.Medium14_18,
    color:Colors.light.HeadingText,
    marginBottom:5,
  },
  Forget:{
    color:'#666874',
    ...Typography.Regular10_15,
    marginBottom:5,
    textDecorationLine:'underline'
  }
});

export default PrimaryInput;
