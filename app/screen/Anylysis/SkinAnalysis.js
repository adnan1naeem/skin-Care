import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import ProgressComponent from "../Anylysis/Component/ProgressBar";
import { data } from "./AnalysisData";
import { useNavigation } from "expo-router";
const SkinAnalysis = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(3);

  const handleDatePress = (date) => {
    setSelectedDate(date);
  };
  const renderProgressItem = ({ item }) => (
    <ProgressComponent
      label={item.text}
      value={item.progress}
      bgImg={item.bgImg}
      progress={item.progress}
      onPress={() => handleSkinDeatil(item)}
    />
  );
  const handleSkinDeatil = (item) => {
    navigation.navigate("SkinTypeScreen", item);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Skin Analysis</Text>
      <View style={styles.dateContainer}>
        <TouchableOpacity
          style={[styles.dateBox, selectedDate === 2 && styles.selectedDateBox]}
          onPress={() => handleDatePress(2)}
        >
          <Text
            style={[
              styles.dateText,
              selectedDate === 2 && styles.selectedDateText,
            ]}
          >
            2
          </Text>
          <Text
            style={[
              styles.dateLabel,
              selectedDate === 2 && styles.selectedDateLabel,
            ]}
          >
            JUL
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.dateBox, selectedDate === 3 && styles.selectedDateBox]}
          onPress={() => handleDatePress(3)}
        >
          <Text
            style={[
              styles.dateText,
              selectedDate === 3 && styles.selectedDateText,
            ]}
          >
            3
          </Text>
          <Text
            style={[
              styles.dateLabel,
              selectedDate === 3 && styles.selectedDateLabel,
            ]}
          >
            JUL
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.dateBox, selectedDate === 4 && styles.selectedDateBox]}
          onPress={() => handleDatePress(4)}
        >
          <Text
            style={[
              styles.dateText,
              selectedDate === 4 && styles.selectedDateText,
            ]}
          >
            4
          </Text>
          <Text
            style={[
              styles.dateLabel,
              selectedDate === 4 && styles.selectedDateLabel,
            ]}
          >
            JUL
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderProgressItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
      <Text style={styles.overviewTitle}>Overview Of Your Skin</Text>
      <Text style={styles.overviewText}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingBottom: 16,
    paddingHorizontal: 16,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#E6E6FA",
  },
  title: {
    ...Typography.SemiBold24_47,
    textAlign: "center",
    color: Colors.light.green,
    marginBottom: 16,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  dateBox: {
    width: 80,
    height: 100,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  selectedDateBox: {
    backgroundColor: Colors.light.green,
  },
  dateText: {
    ...Typography.SemiBold16_20,
  },
  selectedDateText: {
    color: "#FFF",
  },
  dateLabel: {
    ...Typography.Light12_20,
  },
  selectedDateLabel: {
    color: "#FFF",
  },
  overviewTitle: {
    paddingHorizontal: 22,
    ...Typography.SemiBold16_20,
    marginBottom: 8,
  },
  overviewText: {
    paddingHorizontal: 24,
    ...Typography.Light12_18,
    marginBottom: 10,
  },
});

export default SkinAnalysis;
