import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Platform } from 'react-native';
import ProductCard from './ProductCard';
import Typography from '../../../../constants/Typography';
import { Colors } from '../../../../constants/Colors';
import { useNavigation } from "@react-navigation/native";

const ProductList = ({ products, ReleventData }) => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <ProductCard product={item} onPress={() => handleProductDetail(item)} />
    );
    const renderItem2 = ({ item }) => (
        <ProductCard product={item} onPress={() => handleProductDetail(item)} />
    );
    const handleProductDetail = (item) => {
        navigation.navigate("ProductDetailScreen", item)
    };
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Products</Text>
            {ReleventData?.length > 0 &&
                <>
                    <Text style={styles.subtitle}>Recommended For You</Text>
                    <FlatList
                        data={ReleventData}
                        renderItem={renderItem2}
                        scrollEnabled={false}
                        keyExtractor={(item) => item._id.toString()}
                        numColumns={2}
                        columnWrapperStyle={styles.row}
                        contentContainerStyle={styles.list}
                    /></>}

            {products?.length > 0 ? <>
                <Text style={styles.subtitle}>All Products</Text>
                <FlatList
                    data={products}
                    renderItem={renderItem}
                    scrollEnabled={false}
                    keyExtractor={(item) => item._id.toString()}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    contentContainerStyle={styles.list}
                /></> : <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center', }}>
                <Text style={[styles.subtitle]}>No Product List Found</Text></View>}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E5FB',
    },
    title: {
        marginTop: Platform?.OS === "android" ? 60 : '17%',
        ...Typography.SemiBold24_47,
        textAlign: 'center',
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
        justifyContent: 'space-between',
    },
});

export default ProductList;
