import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { BottomSheet, CheckBox, Icon, Button } from '@rneui/themed';
import Typography from '../../../../constants/Typography';
import { Colors } from '../../../../constants/Colors';

const PaymentBottomSheet = ({
    isVisible,
    onClose,
    onSaveCardToggle,
    onPay,
    saveCardChecked,
    payAmount,
}) => {
    const [expiry, setExpiry] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvc, setCVC] = useState('');
    const [zip, setZIP] = useState('');
    const handleExpiryChange = (text) => {
        const numericText = text.replace(/\D/g, '');
        if (numericText.length <= 4) {
          if (numericText.length === 0) {
            setExpiry('');
          } else if (numericText.length === 1) {
            setExpiry(numericText);
          } else if (numericText.length === 2) {
            const month = parseInt(numericText.slice(0, 2), 10);
            if (month >= 1 && month <= 12) {
              setExpiry(numericText);
            }
          } else if (numericText.length === 3) {
            const month = parseInt(numericText.slice(0, 2), 10);
            if (month >= 1 && month <= 12) {
              setExpiry(numericText.slice(0, 2) + '/' + numericText.slice(2));
            }
          } else if (numericText.length === 4) {
            const month = parseInt(numericText.slice(0, 2), 10);
            if (month >= 1 && month <= 12) {
              setExpiry(numericText.slice(0, 2) + '/' + numericText.slice(2));
            }
          }
        }
      };

      const handleCardNumberChange = (text) => {
        const numericText = text.replace(/\D/g, '');
    
        // Validate card number (max 16 digits)
        if (/^\d{0,16}$/.test(numericText)) {
          // Format card number with spaces after every 4 digits
          const formattedText = numericText.match(/.{1,4}/g)?.join(' ') || '';
          setCardNumber(formattedText);
        }
      };

    // Function to handle CVC (max 3 digits)
    const handleCVCChange = (text) => {
        // Validate CVC (max 3 digits)
        if (/^\d{0,3}$/.test(text)) {
            setCVC(text);
        }
    };

    // Function to handle ZIP
    const handleZIPChange = (text) => {
        // Handle ZIP input (numeric)
        setZIP(text.replace(/[^0-9]/g, ''));
    };
    return (
        <BottomSheet isVisible={isVisible} onBackdropPress={onClose}>
            <View style={styles.bottomSheetContainer}>
                <Text style={styles.orPayUsingText}>Add Your Detail</Text>
                <View style={styles.inputContainer}>
                <Text style={{...Typography.Light12_18}}>Card number</Text>
                    <TextInput
                        placeholder="Card number"
                        style={styles.input}
                        keyboardType="numeric"
                        value={cardNumber}
                        onChangeText={handleCardNumberChange}
                        placeholderTextColor={"#D4D8D8"}
                    />
                    <View style={styles.expiryCvcContainer}>
                    <View style={{flexDirection:'column',flex:1}}>
                        <Text style={{...Typography.Light12_18}}>Expiry Date</Text>
                        <TextInput
                            placeholder="MM / YY"
                            style={[styles.input, styles.halfInput]}
                            keyboardType=""
                            value={expiry}
                            onChangeText={handleExpiryChange}
                            placeholderTextColor={"#D4D8D8"}
                        />
                        </View>
                        <View style={{flexDirection:'column', flex:1,marginLeft: 5}}>
                        <Text style={{...Typography.Light12_18}}>Card CVC</Text>
                         <TextInput
                            placeholder="CVC"
                            style={[styles.input, styles.halfInput]}
                            keyboardType="numeric"
                            value={cvc}
                            onChangeText={handleCVCChange}
                            placeholderTextColor={"#D4D8D8"}
                        />
                        </View>
                    </View>
                    <Text style={{...Typography.Light12_18}}>ZipCode</Text>
                    <TextInput
                        placeholder="ZIP"
                        style={styles.input}
                        keyboardType="numeric"
                        value={zip}
                        onChangeText={handleZIPChange}
                        placeholderTextColor={"#D4D8D8"}
                    />
                </View>

                <CheckBox
                    title="Save this card for future powdur payments"
                    checked={saveCardChecked}
                    onPress={onSaveCardToggle}
                    checkedColor={Colors.light.green}
                    containerStyle={styles.checkboxContainer}
                />

                <Button title={`Pay $${payAmount}`} onPress={onPay} buttonStyle={styles.payButton} />
            </View>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    bottomSheetContainer: {
        backgroundColor: 'white',
        padding: 20,
        paddingBottom: 50,
        borderRadius: 10,
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    applePayContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    applePayText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    orPayUsingText: {
        ...Typography.SemiBold20_30,
        marginVertical: 10,
    },
    paymentOptions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    paymentOption: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    inputContainer: {
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical:15,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    expiryCvcContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    halfInput: {
        width: '100%',
    },
    checkboxContainer: {
        backgroundColor: 'white',
        borderWidth: 0,
        padding: 0,
        marginVertical: 10,
    },
    payButton: {
        paddingVertical:15,
        backgroundColor: Colors.light.green,
        borderRadius: 5,
    },
});

export default PaymentBottomSheet;
