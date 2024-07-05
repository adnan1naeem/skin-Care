import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileTabParamList } from '../types';
import  ProductScreen  from '../../screen/Product/ProductScreen';
const ProductStack = createStackNavigator<ProfileTabParamList>();

const ProductNavigator = () => {

  return (
    <ProductStack.Navigator initialRouteName="ProductList">
      <ProductStack.Screen
        name="ProductList"
        component={ProductScreen}
        options={{
          headerShown: false,
        }}
      />
      
    </ProductStack.Navigator>
  );
};

export default ProductNavigator;