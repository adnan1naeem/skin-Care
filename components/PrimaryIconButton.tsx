import { Colors } from "@/constants/Colors";
import React, { FC } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

interface Props {
  titleText: string;
  onPress: () => void;
  disable?: any;
  icon: React.ReactNode;
}

const PrimaryIconButton: FC<Props> = ({
  titleText,
  icon,
  onPress,
  disable,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      disabled={disable}
      onPress={onPress}
    >

      <View style={styles.title}>
      <View style={styles.icon}>
        {icon}
      </View> 
        <Text
          style={styles.titleText}
        >
          {titleText}
        </Text>
      </View>

    </TouchableOpacity>
  );
};

export default PrimaryIconButton;

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "Poppins-Medium",
    color: "#010101",
    fontSize: 14,
    lineHeight: 18.2,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    flex: 1,
  },
  icon:{
    marginRight:10
  },
  container: {
    width: "100%",
    paddingVertical:16,
    backgroundColor: Colors.light.background,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth:1,
    borderColor:'#E5E4E3',
  },
})