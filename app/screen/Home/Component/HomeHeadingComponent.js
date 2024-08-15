import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";
const HomeHeading = ({ heading, onPressView, Text2 }) => {
  return (
    <View style={[styles.HeadingContainer]}>
      <Text style={styles.HomeHeading}>{heading}</Text>
      <TouchableOpacity onPress={onPressView}>
        <Text style={styles.View_analysis}>{Text2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeading;
