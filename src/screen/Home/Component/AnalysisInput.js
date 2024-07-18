import { Colors } from '../../../../constants/Colors';
import Typography from '../../../../constants/Typography';
import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AnalysisInput = ({ value, onChange,title,icon }) => {
    const handleChange = (text) => {
        const numericValue = parseFloat(text);
        if(title=="Skin Age"){
            onChange(text);
        }else{
            if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 100) {
                onChange(text);
            } else if (text === '') {
                onChange('');
            }
        } 
    };
    return (
        <View style={styles.container}>
            <View style={styles.sub_container}>
                <Image source={icon} style={{ height: 30, width: 30 }} />
                <Text style={styles.text}>{title}</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Value" 
                    value={value}
                    onChangeText={handleChange}
                    keyboardType="numeric"
                />
                {title!="Skin Age"?(
                    <Icon name="percent" size={20} color="#708090" style={styles.icon} />

                ):(<Text style={styles.YearText}>Yrs Old</Text>)}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        backgroundColor: Colors.light.background, 
        flexDirection: 'row', 
        paddingHorizontal: 15, 
        paddingVertical: 10, 
        marginBottom: 10, 
        borderWidth: 1, 
        borderRadius: 10, 
        borderColor: '#0000001A'
    },
    sub_container:{ flex: 1, flexDirection: "column",justifyContent:'center' },
    text: {
        ...Typography.Medium12_20,
        color: '#708090',
        marginTop: 5
    },
    YearText:{
        ...Typography.Medium10_20,
        paddingRight:3,
       color:"#708090",
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 113,
        height: 53,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        ...Typography.Regular20_24,
        paddingTop:6,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        marginRight:5,
        ...Typography.Medium10_20,
    },
});

export default AnalysisInput;
