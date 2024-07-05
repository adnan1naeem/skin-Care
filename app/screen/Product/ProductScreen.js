import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ProductList from './ProductList/ProductList'; 
const products = [
    {
        id: 1,
        name: 'Skin Analyzer',
        price: '24.99',
        originalPrice: '(u.p. $34.99)',
        description: 'Daily essential for testing your skin condition.',
        image:require('../../../assets/images/Product1.png'),
        detail:"It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of  letters, as opposed to using 'Content here, content here', making it  look like readable English. Many desktop publishing packages and web page editors now use Lorem  Ipsum as their default model text, and a search for 'lorem ipsum' will  uncover many web sites still in their infancy. Various versions"
    },
    {
        id: 2,
        name: 'Retinol Serum',
        price: '24.99',
        description: 'Great for skin hydration and for daily use.',
        image: require('../../../assets/images/Product2.png'),
        detail:"It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of  letters, as opposed to using 'Content here, content here', making it  look like readable English. Many desktop publishing packages and web page editors now use Lorem  Ipsum as their default model text, and a search for 'lorem ipsum' will  uncover many web sites still in their infancy. Various versions"
    },
    {
        id: 3,
        name: 'Hyaluronic Acid',
        price: '24.99',
        description: 'Great for skin hydration and for daily use.',
        image: require('../../../assets/images/Product2.png'),
        detail:"It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of  letters, as opposed to using 'Content here, content here', making it  look like readable English. Many desktop publishing packages and web page editors now use Lorem  Ipsum as their default model text, and a search for 'lorem ipsum' will  uncover many web sites still in their infancy. Various versions"
    },
    {
        id: 4,
        name: 'Hyaluronic Acid',
        price: '24.99',
        description: 'Great for skin hydration and for daily use.',
        image: require('../../../assets/images/Product2.png'),
        detail:"It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of  letters, as opposed to using 'Content here, content here', making it  look like readable English. Many desktop publishing packages and web page editors now use Lorem  Ipsum as their default model text, and a search for 'lorem ipsum' will  uncover many web sites still in their infancy. Various versions"
    },
    {
        id: 4,
        name: 'Hyaluronic Acid',
        price: '24.99',
        description: 'Great for skin hydration and for daily use.',
        image: require('../../../assets/images/Product2.png'),
    },
];

const ProductScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ProductList products={products} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ProductScreen;
