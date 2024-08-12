import PrimaryButton from '../../../../components/PrimaryButton';
import { Colors } from '../../../../constants/Colors';
import Typography from '../../../../constants/Typography';
import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const ProductDetails = ({ product }) => {
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [saveCardChecked, setSaveCardChecked] = useState(false);
    // const toggleBottomSheet = () => {
    //     setBottomSheetVisible(!isBottomSheetVisible);
    // };

    const handleSaveCardToggle = () => {
        setSaveCardChecked(!saveCardChecked);
    };

    const handlePay = () => {
        if (product?.amazonUrl) {
            Linking.openURL(product.amazonUrl).catch(err =>
                console.error('An error occurred', err)
            );
        } else {
            navigation.goBack()
        }
    };
    const navigation = useNavigation()
    const imageUrl = product ? product?.productImage.startsWith('uploads/')
        ? `https://esthemate.com/${product?.productImage}`
        : product?.productImage
        : " "
    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row', alignContent: 'center', marginTop: 18, paddingHorizontal: 16, }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.backButton}>
                    <Icon name="arrow-back" size={20} color="#000" />
                </TouchableOpacity>
                <Text style={styles.backButtonText}>Back</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
            <View style={styles.detailsContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.productName}>{product?.title}</Text>
                    {product?.discountPrice > 0 ? <Text style={styles.originalPrice}>{"(u.p. $"}{product?.price}{")"}</Text> :
                        <Text style={[styles.price, { paddingLeft: 10, }]}>${product?.price}</Text>}
                    {product?.discountPrice > 0 ? <Text style={[styles.price, { paddingLeft: 10, }]}>${product?.discountPrice}</Text> :
                        null}
                </View>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.description}>{product.detail}</Text>
                <View style={{ marginTop: '7%', marginBottom: 50 }}>
                    <PrimaryButton
                        text="Buy Now"
                        onPress={handlePay}
                    />
                </View>
            </View>
            {/* <PaymentBottomSheet
                isVisible={isBottomSheetVisible}
                onClose={toggleBottomSheet}
                onSaveCardToggle={handleSaveCardToggle}
                onPay={handlePay}
                saveCardChecked={saveCardChecked}
                payAmount={product.price}
            /> */}
        </ScrollView >
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
        paddingTop: 12,
        ...Typography.SemiBold28_20,
        color: Colors.light.green,
    },
    descriptionTitle: {
        marginTop: '3%',
        ...Typography.Medium16_20,
        marginBottom: 8,
    },
    description: {
        ...Typography.Light12_25,
        marginBottom: 30,
    },
});
export default ProductDetails;