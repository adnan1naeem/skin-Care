import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../../../constants/Colors';
import Typography from '../../../constants/Typography';
import Personal from '../../../assets/svg/Personal.svg'
import SignOut from '../../../assets/svg/Sign-in icon.svg';
import AboutUs from '../../../assets/svg/Aboutus.svg';
import Support from '../../../assets/svg/Support Icon.svg';
import Feedback from '../../../assets/svg/Feedback.svg'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
const ProfileSettings = () => {
    const navigation=useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.option}>
                    <Personal/>
                    <Text style={styles.optionText}>Personal details</Text>
                    <Icon name="chevron-forward" size={20} color={Colors.light.green} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                <SignOut/>
                    <Text style={styles.optionText}>Sign in and Security</Text>
                    <Icon name="chevron-forward" size={20} color={Colors.light.green} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                <AboutUs/>
                    <Text style={styles.optionText}>About us</Text>
                    <Icon name="chevron-forward" size={20} color={Colors.light.green} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                <Support/>
                    <Text style={styles.optionText}>Support</Text>
                    <Icon name="chevron-forward" size={20} color={Colors.light.green} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                <Feedback/>
                    <Text style={styles.optionText}>Feedback</Text>
                    <Icon name="chevron-forward" size={20} color={Colors.light.green} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={()=>{navigation.replace("Login")}}>
                <SignOut/>
                    <Text style={styles.optionText}>Sign Out</Text>
                    <Icon name="chevron-forward" size={20} color={Colors.light.green} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f5fafa',
        padding: 16,
        paddingTop:40,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    profileDetails: {
        marginLeft: 16,
    },
    profileName: {
        ...Typography.SemiBold16_20,
    },
    profileEmail: {
        ...Typography.Regular10_20
    },
    optionsContainer: {
        marginTop: 16,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        height:70,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 16,
    },
    optionText: {
        ...Typography.Light16_16,
        paddingLeft:10,
        letterSpacing:0.2,
        paddingTop:'1%',
        flex: 1,
        color:'#1A1E25'
        
    },
});

export default ProfileSettings;
