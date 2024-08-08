import React from 'react';
import { Platform, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import ProductDetails from './ProductList/ProductDetails';

const ProductDetailScreen = ({route}) => {
    return (
        <ScrollView style={styles.container}>
            <ProductDetails product={route?.params} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#E6E5FB',
        paddingTop:Platform?.OS==="android"?30:'11%',
    },
});

export default ProductDetailScreen;
