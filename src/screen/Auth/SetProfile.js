import { Colors } from '../../../constants/Colors';
import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton';
import { styles } from './styles'
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Screen from '../../../components/Screen';
import { ThemedText } from '../../../components/ThemedText';
import countries from './CountryData'
import { convertToISODateString } from '../../../utils/DateConverstion';
import { postRequest } from '../../../components/ApiHandler';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SetProfile = ({ navigation,route }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [isCountryFocus, setIsCountryFocus] = useState(false);
  const [countryValue, setCountryValue] = useState(null);
  const [validationError, setValidationError] = useState("");

  const handleDayChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    if (numericValue <= 31) {
      setDay(numericValue);
    }
  };
  const data = [
    { label: 'male', value: '1' },
    { label: 'female', value: '2' },
    { label: 'other', value: '3' },
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const handleMonthChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    if (numericValue <= 12) {
      setMonth(numericValue);
    }
  };

  const handleYearChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    if (numericValue.length <= 4) {
      setYear(numericValue);
    }
  };

  const validateForm = () => {
    if (!day || !month || !year) {
      setValidationError("Please enter a valid date of birth.");
      return false;
    }

    if (!value) {
      setValidationError("Please select your gender.");
      return false;
    }

    if (!countryValue) {
      setValidationError("Please select your country of residence.");
      return false;
    }

    setValidationError("");
    return true;
  };

  const handleSaveProfile =async () => {
    if (validateForm()) {
      const NewDate = convertToISODateString(day, month, year);
      const profileData = {
        ...route.params,
        dob:NewDate,
        gender: value,
        country: countryValue,
      };
      alert(JSON?.stringify(profileData))
      const endpoint = 'api/auth/register';
      const jsonResponse = await postRequest(endpoint, profileData);
      alert(JSON?.stringify(jsonResponse?.token))
      await AsyncStorage.setItem('token', jsonResponse?.token);
      await AsyncStorage.setItem('userInfo', JSON.stringify(jsonResponse?.userWithoutPassword));
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }
  };

  return (
    <Screen style={styles.mainContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <ThemedText type="title" style={{ color: Colors.light.green }}>Setup Your Profile</ThemedText>
          <View style={styles.topSection}>
            <View style={[styles.input, { marginTop: 25 }]}>
              <Text style={styles.heading}>Date of Birth</Text>
              <View style={styles.Datecontainer}>
                <TextInput
                  style={styles.Dateinput}
                  value={day}
                  onChangeText={handleDayChange}
                  placeholder="Day"
                  keyboardType="numeric"
                  maxLength={2}
                />
                <TextInput
                  style={styles.Dateinput}
                  value={month}
                  onChangeText={handleMonthChange}
                  placeholder="Month"
                  keyboardType="numeric"
                  maxLength={2}
                />
                <TextInput
                  style={styles.DateInputYear}
                  value={year}
                  onChangeText={handleYearChange}
                  placeholder="Year"
                  keyboardType="numeric"
                  maxLength={4}
                />
              </View>
              <Text style={[styles.heading, { marginTop: 10 }]}>Gender</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: Colors.light.green }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="label"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item?.label);
                  setIsFocus(false);
                }}
                renderRightIcon={() => (
                  <MaterialCommunityIcons
                    style={styles.icon}
                    color={isFocus ? 'black' : '#708090'}
                    name="unfold-more-horizontal"
                    size={20}
                  />
                )}
              />
              <Text style={[styles.heading, { marginTop: 10 }]}>Country of Residence</Text>
              <Dropdown
                style={[styles.dropdown, isCountryFocus && { borderColor: Colors.light.green }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={countries}
                search
                maxHeight={300}
                labelField="label"
                valueField="label"
                placeholder={!isCountryFocus ? 'Select' : '...'}
                searchPlaceholder="Search..."
                value={countryValue}
                onFocus={() => setIsCountryFocus(true)}
                onBlur={() => setIsCountryFocus(false)}
                onChange={item => {
                  setCountryValue(item?.label);
                  setIsCountryFocus(false);
                }}
                renderRightIcon={() => (
                  <MaterialCommunityIcons
                    style={styles.icon}
                    color={isCountryFocus ? 'black' : '#708090'}
                    name="unfold-more-horizontal"
                    size={20}
                  />
                )}
              />
              {validationError ? <Text style={{ color: 'red', textAlign: 'center' }}>{validationError}</Text> : null}
              <View style={styles.button}>
                <PrimaryButton text={"Save Profile"} onPress={handleSaveProfile} />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default SetProfile;
