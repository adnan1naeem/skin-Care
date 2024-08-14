import Typography from "@/constants/Typography";
import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const ProductItem = ({ image1, text, description, icons, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.gridItem, { marginRight: 15 }]}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row" }}>
        <Image source={image1} style={styles.image} />
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 5 }}>
        {icons &&
          icons.map((icon, index) => (
            <Image key={index} source={icon} style={styles.icon} />
          ))}
      </View>
      <Text style={styles.desc} numberOfLines={2}>
        {description}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    width: 217,
    height: 122,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 15,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "cover",
    marginBottom: 5,
  },
  text: {
    ...Typography.SemiBold12_20,
    fontWeight: "500",
    color: "black",
    marginTop: 5,
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  desc: {
    ...Typography.Light10_14,
    marginTop: 5,
    color: "#708090",
  },
});

export default ProductItem;
