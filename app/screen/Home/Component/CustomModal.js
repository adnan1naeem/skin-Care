import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import AnalysisInput from "./AnalysisInput";
import Typography from "@/constants/Typography";

const CustomModal = ({ visible, onClose, onAnalyze }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={modalStyles.modalBackground}>
        <View style={modalStyles.modalContainer}>
          <ThemedText type="title" style={{ color: Colors.light.green }}>
            Input Analysis
          </ThemedText>
          <ThemedText
            type="default"
            style={{ color: Colors.light.greyText, marginBottom: 20 }}
          >
            Enter values displayed on your device. Don’t have a device? Get
            yours now!
          </ThemedText>
          <AnalysisInput
            value={inputValue}
            onChange={setInputValue}
            icon={require("../../../../assets/images/HydrationIcon.png")}
            title={"Hydration"}
          />
          <AnalysisInput
            value={inputValue2}
            onChange={setInputValue2}
            icon={require("../../../../assets/images/OilLevelIcon.png")}
            title={"Oiliness"}
          />
          <AnalysisInput
            value={inputValue3}
            onChange={setInputValue3}
            icon={require("../../../../assets/images/ElasticityIcon.png")}
            title={"Elasticity"}
          />
          <AnalysisInput
            value={inputValue4}
            onChange={setInputValue4}
            icon={require("../../../../assets/images/Recycle.png")}
            title={"Skin Age"}
          />
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <TouchableOpacity
              onPress={onClose}
              style={[modalStyles.closeButton, { marginRight: 10 }]}
            >
              <Text style={modalStyles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onAnalyze}
              style={modalStyles.AnalyzeButon}
            >
              <Text style={modalStyles.AnalyzeButtonText}>Analyze</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const modalStyles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff70",
  },
  modalContainer: {
    width: "83%",
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: "#E6E6FA",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.light.green,
    marginTop: 10,
  },
  closeButtonText: {
    color: Colors.light.green,
    ...Typography.SemiBold14_21,
    textAlign: "center",
  },
  AnalyzeButon: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.light.green,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  AnalyzeButtonText: {
    color: Colors.light.background,
    textAlign: "center",
    ...Typography.SemiBold14_21,
  },
});

export default CustomModal;
