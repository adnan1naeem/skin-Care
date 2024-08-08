import React from 'react';
import { FlatList } from 'react-native';
import ProductItem from "./../ProductlComponent";

const RecommendedProducts = ({ releventData, handleProductDeatil }) => {
  const renderItem = ({ item }) => (
    <ProductItem
      image1={item.productImage}
      description={item.description}
      text={item.title}
      icons={item?.featureImages}
      onPress={() => handleProductDeatil(item)}
    />
  );

  return (
    <FlatList
      data={releventData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      contentContainerStyle={{ marginTop: 20, paddingLeft: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default RecommendedProducts;
