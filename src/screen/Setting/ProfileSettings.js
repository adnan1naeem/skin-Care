import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Colors } from '../../../constants/Colors';
import Typography from '../../../constants/Typography';
import Personal from '../../../assets/svg/Personal.svg'
import SignOut from '../../../assets/svg/Sign-in icon.svg';
import Support from '../../../assets/svg/Support Icon.svg';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { userInfo } from '../../../utils/State';
import { useRecoilValue } from 'recoil';
import AntDesign from '@expo/vector-icons/AntDesign';
const ProfileSettings = () => {
    const userInfoData = useRecoilValue(userInfo);
    const userName = userInfoData?.firstName;
    const userInitial = userName ? userName.charAt(0).toUpperCase() : '';
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: Colors.light.background }}>
            <View style={styles.profileContainer}>
                <View style={styles.InitialContainer}>
                    <Text style={styles.InitialText}>{userInitial}</Text>
                </View>

                <View style={styles.profileDetails}>
                    <Text style={styles.profileName}>{userInfoData?.firstName}</Text>
                    <Text style={styles.profileEmail}>{userInfoData?.email}</Text>
                </View>
            </View>
            <ScrollView style={styles.container}>

                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={styles.option} onPress={() => { navigation.navigate("AccountDetail") }}>
                        <Personal />
                        <Text style={styles.optionText}>Personal details</Text>
                        <Icon name="chevron-forward" size={20} color={Colors.light.green} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={() => { navigation.navigate("Logout") }}>
                        <SignOut />
                        <Text style={styles.optionText} >Account</Text>
                        <Icon name="chevron-forward" size={20} color={Colors.light.green} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={() => { navigation.navigate("Support") }}>
                        <Support />
                        <Text style={styles.optionText}>Support</Text>
                        <Icon name="chevron-forward" size={20} color={Colors.light.green} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={() => { navigation.navigate("DeleteAccount"),{email:userInfoData?.email} }}>
                        <View style={styles.deleteIcon}>
                            <AntDesign name="delete" size={20} color="white" />
                        </View>
                        <Text style={styles.optionText}>Delete Account</Text>
                        <Icon name="chevron-forward" size={20} color={Colors.light.green} />
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    profileEmail: {
        ...Typography.Regular10_20
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    InitialContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#d3d3d3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileDetails: {
        marginLeft: 16,
    },
    profileName: {
        ...Typography.SemiBold16_20,
    },
    text: {
        ...Typography.SemiBold10_15,
        color: Colors.light.icon
    },
    markedtext: {
        ...Typography.SemiBold10_15,
        color: Colors.light.green
    },
    SmileIcon: {
        backgroundColor: '#FFFFFF',
        height: 42,
        width: 42,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 4,
        elevation: 5,
    },
    container: {
        flexGrow: 1,
        backgroundColor: '#E6E5FB',
        padding: 16,
        paddingTop: 40,
    },
    profileContainer: {
        marginTop: Platform?.OS === "ios" ? "20%" : 60,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    optionsContainer: {
        marginTop: 16,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        height: 70,
        marginHorizontal: 2,
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
        paddingLeft: 10,
        letterSpacing: 0.2,
        paddingTop: '1%',
        flex: 1,
        color: '#1A1E25'

    },
    deleteIcon: {
        height: 40,
        width: 40,
        backgroundColor: Colors.light.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
});

export default ProfileSettings;
