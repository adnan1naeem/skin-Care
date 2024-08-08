import React, { useEffect, useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, Alert } from 'react-native';
import { Colors } from '../../../../constants/Colors';
import AnalysisInput from './AnalysisInput';
import Typography from '../../../../constants/Typography';
import { ThemedText } from '../../../../components/ThemedText';
import { postRequestToken } from '../../../../components/ApiHandler';
import { ActivityIndicator } from 'react-native-paper';

const CustomModal = ({ visible, onClose, onAnalyze }) => {
    const [inputValue, setInputValue] = useState(0);
    const [inputValue2, setInputValue2] = useState(0);
    const [inputValue3, setInputValue3] = useState(0);
    const [inputValue4, setInputValue4] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (visible) {
            setInputValue(0);
            setInputValue2(0);
            setInputValue3(0);
            setInputValue4(0);
        }
    }, [visible]);
    const handleAnalyze = async () => {
        const hydration = Number(inputValue);
        const oilness = Number(inputValue2);
        const elasticity = Number(inputValue3);
        const skinAge = Number(inputValue4);
        if ([hydration, oilness, elasticity, skinAge].some(value => isNaN(value) || value <= 0)) {
            Alert.alert(
                "Invalid Input",
                "All fields must be filled with numbers greater than zero.",
                [{ text: "OK" }]
            );
            return;
        }
        try {
            setLoading(true)
            const analysisData = {
                hydration: hydration,
                oilness: oilness,
                elastcity: elasticity,
                skinAge: skinAge,
            };
            const response = await postRequestToken('api/user/skinnalysis', analysisData);
            if (response) {
                // alert('Analysis successful:', JSON?.stringify(response));
                setLoading(false)
                onAnalyze();
            }
        } catch (error) {
            setLoading(false)
            // alert('Error during analysis:', error);
        }
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={modalStyles.modalBackground}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={modalStyles.modalContainer}
                    >
                        <View style={modalStyles.modalContainer2}>
                            <ThemedText type="title" style={{ color: Colors.light.green }}>Input Analysis</ThemedText>
                            <ThemedText type="default" style={{ color: Colors.light.greyText, marginBottom: 20 }}>Enter values displayed on your device. Don’t have a device? Get yours now!</ThemedText>
                            <AnalysisInput value={inputValue} onChange={setInputValue} icon={require('../../../../assets/images/HydrationIcon.png')} title={"Hydration"} />
                            <AnalysisInput value={inputValue2} onChange={setInputValue2} icon={require('../../../../assets/images/OilLevelIcon.png')} title={"Oiliness"} />
                            <AnalysisInput value={inputValue3} onChange={setInputValue3} icon={require('../../../../assets/images/ElasticityIcon.png')} title={"Elasticity"} />
                            <AnalysisInput value={inputValue4} onChange={setInputValue4} icon={require('../../../../assets/images/Recycle.png')} title={"Skin Age"} />
                            <View style={{ flexDirection: 'row', justifyContent: "flex-end" }}>
                                <TouchableOpacity onPress={onClose} style={[modalStyles.closeButton, { marginRight: 10 }]}>
                                    <Text style={modalStyles.closeButtonText}>Cancel</Text>
                                </TouchableOpacity>
                                {loading ? <View style={[modalStyles.AnalyzeButon,{paddingHorizontal:36}]}> 
                                    <ActivityIndicator
                                    color={Colors.light?.white}
                                    size="small"
                                    style={{ flex: 1 }}
                                /></View> : <TouchableOpacity onPress={handleAnalyze} style={modalStyles.AnalyzeButon}>
                                    <Text style={modalStyles.AnalyzeButtonText}>Analyze</Text>
                                </TouchableOpacity>}
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const modalStyles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DFE0E099',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    modalContainer2: {
        width: '83%',
        paddingVertical: 20,
        paddingHorizontal: 25,
        backgroundColor: '#E6E5FB',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 4,
        elevation: 5,
    },
    closeButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.light.green,
        marginTop: 10,
    },
    closeButtonText: {
        color: Colors.light.green,
        ...Typography.SemiBold14_21,
        textAlign: 'center',
    },
    AnalyzeButon: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.light.green,
        borderRadius: 10,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    AnalyzeButtonText: {
        color: Colors.light.background,
        textAlign: 'center',
        ...Typography.SemiBold14_21

    },
});

export default CustomModal;
