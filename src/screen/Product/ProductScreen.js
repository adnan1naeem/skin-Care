import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ProductList from './ProductList/ProductList'; 
import { Colors } from '../../../constants/Colors';
import { getRequest } from '../../../components/ApiHandler';
import { useFocusEffect } from '@react-navigation/native';

const ProductScreen = () => {
    const [ProductListData,setProductList]=useState("");
    const [loading,setLoading]=useState(true);
    const [ReleventData,setReleventData]=useState("")
    useFocusEffect(
      useCallback(() => {
          const checkUserInfo = async () => {
              try {
                  const Prodcut = await getRequest('api/user/products');
                  setProductList(Prodcut);
                  await getRequest('api/user/products/relevant').then((res) => {
                      setReleventData(res?.products);
                  }).catch((error) => {
                      console.log(JSON?.stringify(error));
                  });
              } catch (error) {
                  console.error("Failed to fetch user info", error);
              }
              setLoading(false);
          };

          checkUserInfo();
          return () => {
          };
      }, [])
  );
    return (
        <View style={styles.container}>
            <ProductList products={ProductListData?.products}  ReleventData={ReleventData}/>
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
