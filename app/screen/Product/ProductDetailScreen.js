import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import ProductDetails from "./ProductList/ProductDetails";

const ProductDetailScreen = ({ route }) => {
  return (
    <ScrollView style={styles.container}>
      <ProductDetails product={route?.params} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6FA",
  },
});

export default ProductDetailScreen;
