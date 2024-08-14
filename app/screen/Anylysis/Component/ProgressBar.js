import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ProgressBar } from "react-native-paper"; // Assuming you are using react-native-paper for ProgressBar
import { Colors } from "@/constants/Colors"; // Adjust the import according to your project structure
import Typography from "@/constants/Typography";
import { getColor } from "../../../../utils/ProgressBarColor";
const ProgressComponent = ({ label, value, progress, bgImg, onPress }) => {
  const tintColor = getColor(progress);
  const percentage = value * 100;
  return (
    <TouchableOpacity onPress={onPress} style={styles.progressContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.progressLabel}>{label}</Text>
        <Text style={[styles.progressValue]}>{percentage}%</Text>
      </View>
      <ProgressBar
        progress={progress}
        color={tintColor}
        fillStyle={{ borderRadius: 20 }}
        style={styles.progress}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    marginTop: 10,
    height: 66,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
    backgroundColor: Colors.light.background,
    marginBottom: 5,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  progressLabel: {
    ...Typography.SemiBold12_20,
    color: "#191970",
  },
  progressValue: {
    ...Typography.Medium12_20,
    color: "#191970",
  },
  progress: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#d4dcdc",
  },
});

export default ProgressComponent;
