import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ProductList from './ProductList/ProductList'; 
import { Colors } from '../../../constants/Colors';
import { getRequest } from '../../../components/ApiHandler';

const ProductScreen = () => {
    const [ProductListData,setProductList]=useState("");
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        const checkUserInfo = async () => {
          try {
            const Prodcut = await getRequest('api/user/products');
            setProductList(Prodcut)
        
          } catch (error) {
            console.error("Failed to fetch user info from AsyncStorage", error);
          }
          setLoading(false);
        };
          checkUserInfo();
      }, []);
    return (
        <View style={styles.container}>
            <ProductList products={ProductListData?.products} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.light.background
    },
});

export default ProductScreen;
