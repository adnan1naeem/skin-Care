import { Colors } from '../../../../constants/Colors';
import Typography from '../../../../constants/Typography';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
const ProductCard = ({ product, onPress, recommanded }) => {
    const imageUrl = product ? product?.productImage.startsWith('uploads/')
        ? `http://152.42.225.202/${product?.productImage}`
        : product?.productImage
        : " "

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.ImageContainer}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
            <View style={recommanded?styles.lowerView:styles.lowerView2}>
                <Text style={styles.name} numberOfLines={2}>{product?.title}</Text>
                <View style={{ flexDirection: 'row' }}>
                    {product?.discountPrice > 0 ? <Text style={[styles.price, { paddingLeft: 10,color:recommanded?Colors?.light?.green:Colors?.light?.oldgreen }]}>${product?.discountPrice}</Text> :
                        null}
                    {product?.discountPrice > 0 ? <Text style={[styles.originalPrice,{color:recommanded?Colors?.light?.green:Colors?.light?.oldgreen}]}>{"(u.p. $"}{product?.price}{")"}</Text> :
                        <Text style={[styles.price, { paddingLeft: 10, }]}>${product?.price}</Text>}
                </View>
                <Text style={styles.description} numberOfLines={2}>{product?.description}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    backButton: {
        alignItems: 'center',
        marginBottom: 16,
        height: 40,
        width: 40,
        justifyContent: 'center',
        borderRadius: 27,
        backgroundColor: Colors.light.background,
        borderWidth: 1,
        borderColor: '#E6E8FE'
    },
    backButtonText: {
        fontSize: 16,
        marginLeft: 8,
        height: 40,
        paddingTop: 2,
        alignSelf: 'center',
        ...Typography.SemiBold16_20,
    },
    lowerView2:{
        height:120,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    lowerView: {
        height:120,
        backgroundColor: Colors.light.tabWhite,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    card: {
        width: '48%',
        height: 240,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 10,
        marginBottom: 16,
        marginTop: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 2,
    },
    ImageContainer: {
        width: '100%',
        height: 120,
        borderBottomWidth: 0.5,
        borderColor: "#2F4F4F33"
    },
    image: {
        width: '100%',
        height: 110,
        resizeMode: 'contain',
    },
    name: {
        marginTop:14,
        paddingHorizontal: 10,
        ...Typography.Medium12_20,
        marginBottom: 8,
    },
    price: {
        ...Typography.SemiBold12_14,
        color: Colors.light.green,
    },
    originalPrice: {
        paddingLeft: 6,
        fontSize: 14,
        ...Typography.SemiBold6_12,
        color: Colors.light.green,
    },
    description: {
        marginTop: 5,
        paddingHorizontal: 10,
        ...Typography.Light8_11,
        letterSpacing: 0.2,
        color: '#708090',
        marginBottom: 10
    },
});

export default ProductCard;
