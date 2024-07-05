import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import ProductDetails from './ProductList/ProductDetails';

const ProductDetailScreen = ({route}) => {
    console.log(route?.params)
    return (
        <ScrollView style={styles.container}>
            <ProductDetails product={route?.params} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f5fafa'
    },
});

export default ProductDetailScreen;
