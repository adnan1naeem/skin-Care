import PrimaryButton from '../../../../components/PrimaryButton';
import { Colors } from '../../../../constants/Colors';
import Typography from '../../../../constants/Typography';
import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const ProductDetails = ({ product }) => {
    const navigation=useNavigation()
    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row', alignContent: 'center', marginTop: 18, paddingHorizontal: 16, }}>
                <TouchableOpacity onPress={() => { navigation.goBack()}} style={styles.backButton}>
                    <Icon name="arrow-back" size={20} color="#000" />
                </TouchableOpacity>
                <Text style={styles.backButtonText}>Back</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
                <Image source={product.image} style={styles.image} />
            </View>
            <View style={styles.detailsContainer}>
                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.originalPrice}>{product.originalPrice}</Text>
                    <Text style={styles.price}>${product.price}</Text>
                </View>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.description}>{product.detail}</Text>
               <View style={{marginTop:'12%'}}>
               <PrimaryButton text={"Buy Now"} onPress={()=>{navigation.navigate("Home")}}/>
               </View>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fafa',
    },
    backButton: {
        marginTop: 16,
        marginBottom: 8,
    },
    backButtonText: {
        fontSize: 16,
        marginLeft: 8,
        height: 40,
        paddingTop: 2,
        alignSelf: 'center',
        ...Typography.SemiBold16_20,
    },
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
    image: {
        width: '100%',
        height: 151,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    detailsContainer: {
        padding: 16,
    },
    productName: {
        ...Typography.SemiBold16_20,
        marginBottom: 8,
        flex: 1,
    },
    originalPrice: {
        paddingLeft: 10,
        ...Typography.SemiBold10_10,
        color: Colors.light.green,
    },
    price: {
        paddingLeft: 10,
        paddingTop:12,
        ...Typography.SemiBold28_20,
        color: Colors.light.green,
    },
    descriptionTitle: {
        marginTop:'3%',
       ...Typography.Medium16_20,
        marginBottom: 8,
    },
    description: {
        ...Typography.Light12_25,
        marginBottom:30,
    },
});

export default ProductDetails;
