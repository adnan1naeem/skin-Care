import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import ProductCard from "./ProductCard";
import Typography from "@/constants/Typography";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";

const ProductList = ({ products }) => {
  let _recommendProducts = products.map((product) => {
    return {
      ...JSON.parse(JSON.stringify(product)),
      isRecommend: true,
    };
  });

  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <ProductCard product={item} onPress={() => handleProductDetail(item)} />
    );
  };
  const handleProductDetail = (item) => {
    navigation.navigate("ProductDetailScreen", item);
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.title}>Products</Text>
        <Text style={styles.subtitle}>Recommended For You</Text>
        <FlatList
          data={_recommendProducts}
          renderItem={renderItem}
          scrollEnabled={false}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
        />
      </View>
      <View>
        <Text style={styles.subtitle}>All Products</Text>
        <FlatList
          data={products}
          renderItem={renderItem}
          scrollEnabled={false}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6FA",
  },
  title: {
    marginTop: 20,
    ...Typography.SemiBold24_47,
    textAlign: "center",
    color: Colors.light.green,
    marginBottom: 20,
  },
  subtitle: {
    paddingHorizontal: 16,
    ...Typography.SemiBold16_20,
    marginBottom: 16,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  row: {
    justifyContent: "space-between",
  },
});

export default ProductList;
