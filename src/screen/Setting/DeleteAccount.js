import { Colors } from "../../../constants/Colors";
import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton';
import { styles } from './styles';
import { ThemedText } from "../../../components/ThemedText";
import { useNavigation } from '@react-navigation/native';
import TextWithLabel from "./Component/TextwithLabel";
import BackButton from "../../../components/BackButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useResetRecoilState } from "recoil";
import { userInfo } from "../../../utils/State";
import { deleteRequestToken } from "../../../components/ApiHandler";
const DeleteAccount = ({ route }) => {
  const navigation = useNavigation()
  const resetUserInfo = useResetRecoilState(userInfo);
  const [loading, setLoading] = useState(false)
  const handleNavigation = async () => {
    try {
      setLoading(true)
      const res=await deleteRequestToken(`api/user/delete/${route.params?.userInfoData?._id}`)
      if(res){
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('userInfo');
        resetUserInfo();
        setLoading(false)
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      }else{
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.error('Error logging out:', error);
    }

  }
  return (
    <View style={[styles.mainContainer, { backgroundColor: Colors.light.background }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <ThemedText type="title" style={{ color: Colors.light.green, }}>Delete Your Account</ThemedText>
          <View style={{ marginTop: 40 }}>
            <TextWithLabel heading="Email" data={route?.params?.userInfoData?.email} email={true} />
          </View>
          <View style={styles.button}>
            <PrimaryButton text={"Delete Account"} onPress={handleNavigation} loading={loading} />
          </View>
          <BackButton text="Back" onPress={() => { navigation.goBack() }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default DeleteAccount;