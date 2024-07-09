import { Colors } from '../../../../constants/Colors';
import Typography from '../../../../constants/Typography';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ product,onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.ImageContainer}>
            <Image source={ product?.image} style={styles.image} />
            </View>
            <Text style={styles.name}>{product?.name}</Text>
           <View style={{flexDirection:'row'}}>
           <Text style={styles.price}>${product?.price}</Text>
            {product?.originalPrice && (
                <Text style={styles.originalPrice}>({product?.originalPrice})</Text>
            )}
           </View>
            <Text style={styles.description}>{product?.description}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    backButton: {
        alignItems: 'center',
        marginBottom: 16,
        height:40,
        width:40,
        justifyContent:'center',
        borderRadius:27,
        backgroundColor:Colors.light.background,
        borderWidth:1,
        borderColor:'#E6E8FE'
    },
    backButtonText: {
        fontSize: 16,
        marginLeft: 8,
        height:40,
        paddingTop:2,
        alignSelf:'center',
        ...Typography.SemiBold16_20,
    },
    card: {
        width: '48%',
        height:235,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical:10,
        marginBottom: 16,
        marginTop:10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 2,
    },
    ImageContainer:{
        width: '100%',
        height: 120,
        marginBottom:14,
        borderBottomWidth:0.5,
        borderColor:"#2F4F4F33"
    },
    image: {
        width: '100%',
        height: 110,
        resizeMode: 'contain',
    },
    name: {
        paddingHorizontal:10,
        ...Typography.Medium12_20,
        marginBottom: 8,
    },
    price: {
        paddingLeft:10,
        ...Typography.SemiBold12_14,
        color: Colors.light.green,
    },
    originalPrice: {
        paddingLeft:6,
        fontSize: 14,
        ...Typography.SemiBold6_12,
        color: Colors.light.green,
    },
    description: {
        marginTop:5,
        paddingHorizontal:10,
        ...Typography.Light8_11,
        letterSpacing:0.2,
        color: '#708090',
        marginBottom:10
    },
});

export default ProductCard;
