import { Colors } from "../../../constants/Colors";
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform, } from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton';
import { styles } from './styles';
import { ThemedText } from "../../../components/ThemedText";
import TextWithLabel from "./Component/TextwithLabel";
import BackButton from "../../../components/BackButton";
import { formatDate } from "../../../utils/DateConverstion";
const AccountDetail = ({ navigation,route }) => {
  const data=route?.params?.userInfoData||""
  const handleNavigation=()=>{navigation.navigate("EditProfile",data)}

  return (
    <View style={[styles.mainContainer,{backgroundColor:Colors.light.background}]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <ThemedText type="title" style={{ color: Colors.light.green, }}>Personal Details</ThemedText>
          <View style={{marginTop:40}}>
          <TextWithLabel heading="First Name" data={data?.firstName} />
          <TextWithLabel heading="Last Name" data={data?.lastName} />
          <TextWithLabel heading="Date of Birth" data={formatDate(data?.dob)} />
          <TextWithLabel heading="Gender" data={data?.gender} />
          <TextWithLabel heading="Country of Residence" data={data?.country} />
          </View>
              <View style={styles.button}>
              <PrimaryButton text={"Edit"} onPress={handleNavigation}/>
              </View>
            <BackButton text="Back" onPress={()=>{navigation.goBack()}}/>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AccountDetail;