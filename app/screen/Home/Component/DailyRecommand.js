import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";

import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";

const DailyRecommand = ({
  image1,
  text,
  description,
  ButtonText,
  OnPress,
  DailyRoutine,
  AnalyzeButton,
  Id,
}) => {
  return (
    <View style={[styles.gridItem, { marginRight: 15 }]}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginVertical: 4,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            width: "60%",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image source={image1} style={styles.image} />
            <Text style={styles.text}>{text}</Text>
          </View>
          <Text style={styles.desc} numberOfLines={1}>
            {description}
          </Text>
        </View>
        <View style={styles.button_container}>
          {DailyRoutine === true && Id == 2 ? (
            <View style={styles.completeButton} onPress={OnPress}>
              <Text style={styles.completeText} numberOfLines={2}>
                Done
              </Text>
            </View>
          ) : AnalyzeButton === true && Id == 1 ? (
            <View style={styles.completeButton} onPress={OnPress}>
              <Text style={styles.completeText} numberOfLines={2}>
                Done
              </Text>
            </View>
          ) : (
            // <PrimaryButton
            //   style={[
            //     Platform.OS == "ios" ? buttonShadowIos : styles.buttonShadow,
            //   ]}
            //   onPress={OnPress}
            //   text={ButtonText}
            // ></PrimaryButton>
            <View>
              <TouchableOpacity
                style={
                  Platform.OS == "android"
                    ? styles.buttonShadow
                    : styles.buttonShadowIos
                }
              >
                <View style={styles.button}>
                  <Text style={styles.buttontext} numberOfLines={2}>
                    {ButtonText}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            // <TouchableOpacity
            //   style={[
            //     Platform.OS == "android"
            //       ? styles.buttonShadow
            //       : styles.buttonShadowIos,
            //   ]}
            //   onPress={OnPress}
            // >
            //   <View style={styles.button}>
            //     <Text style={styles.buttontext} numberOfLines={2}>
            //       {ButtonText}
            //     </Text>
            //   </View>
            // </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  gridItem: {
    width: "100%",
    height: 72,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 3.96,
    elevation: 5,
  },
  button_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  completeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  completeText: {
    ...Typography.SemiBold14_21,
    color: Colors.light.green,
  },
  buttonShadowIos: {
    backgroundColor: "rgba(187, 186, 187, 0.3)",
    paddingBottom: 4,
    paddingRight: 3,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonShadow: {
    backgroundColor: "rgba(187, 186, 187, 0.25)",
    paddingBottom: 2,
    paddingRight: 2,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  button: {
    backgroundColor: Colors.light.green,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 14,
    position: "relative",
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "cover",
    marginBottom: 5,
  },
  text: {
    ...Typography.SemiBold12_20,
    marginTop: 5,
    marginLeft: 10,
  },
  buttontext: {
    ...Typography.Medium10_15,
    color: Colors.light.background,
  },
  icon: {
    width: 17,
    height: 17,
    marginRight: 5,
  },
  desc: {
    ...Typography.Light10_14,
    color: "#708090",
  },
  progressText: {
    fontSize: 10,
    color: "#000",
  },
});

export default DailyRecommand;
