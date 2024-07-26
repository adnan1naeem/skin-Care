import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Screen from '../../../components/Screen';
import { ThemedText } from '../../../components/ThemedText';
import { CommonActions } from '@react-navigation/native';
import countries from './../Auth/CountryData';
import PrimaryInput from '../../../components/PrimaryInput';
import { Colors } from '../../../constants/Colors';
import { convertToISODateString } from '../../../utils/DateConverstion';
import { putRequest } from '../../../components/ApiHandler';
import { useSetRecoilState } from 'recoil';
import { userInfo } from '../../../utils/State';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = ({ navigation, route }) => {
  // State variables
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isCountryFocus, setIsCountryFocus] = useState(false);
  const [countryValue, setCountryValue] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    day: "",
    month: "",
    year: "",
    country: "",
    gender: "",
  });

  const userInfoData = useSetRecoilState(userInfo);
  const endpoint = `api/user/${route.params?._id}`;

  const updateProfile = async () => {
    // Validation
    let valid = true;
    let newErrors = { ...errors };

    if (!firstname) {
      newErrors.firstname = 'First Name cannot be empty';
      valid = false;
    }

    if (!lastname) {
      newErrors.lastname = 'Last Name cannot be empty';
      valid = false;
    }

    if (!day || !month || !year) {
      newErrors.day = 'Day, Month, and Year cannot be empty';
      valid = false;
    } else if (day > 31) {
      newErrors.day = 'Day cannot be greater than 31';
      valid = false;
    } else if (month > 12) {
      newErrors.month = 'Month cannot be greater than 12';
      valid = false;
    }

    if (year.length < 4 || year > new Date().getFullYear()) {
      newErrors.year = `Invalid year. Must be a valid year less than ${new Date().getFullYear()}`;
      valid = false;
    }

    if (!countryValue) {
      newErrors.country = 'Country cannot be empty';
      valid = false;
    }

    if (!value) {
      newErrors.gender = 'Gender cannot be empty';
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    // Proceed with API request if valid
    try {
      const NewDate = convertToISODateString(day, month, year);

      const response = await putRequest(endpoint, {
        firstName: firstname,
        lastName: lastname,
        dob: NewDate,
        country: countryValue,
        gender: value,
      });

      userInfoData(response);
      await AsyncStorage.setItem('userInfo', JSON.stringify(response));
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'ProfileSettings' }],
        })
      );

    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  useEffect(() => {
    const { firstName, lastName, gender, country, dob } = route.params;
    if (route.params) {
      setFirstname(firstName || "");
      setLastname(lastName || "");
      setValue(gender || null);
      setCountryValue(country || null);
    }
    if (dob) {
      const date = new Date(dob);
      setDay(date.getDate().toString().padStart(2, '0')); // Ensuring two-digit format
      setMonth((date.getMonth() + 1).toString().padStart(2, '0')); // Months are zero-indexed
      setYear(date.getFullYear().toString());
    }
  }, [route.params]);

  // Handlers for input changes
  const handleDayChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    if (numericValue <= 31) {
      setDay(numericValue);
    }
  };

  const handleMonthChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    if (numericValue <= 12) {
      setMonth(numericValue);
    }
  };

  const handleYearChange = (text) => {
    const currentYear = new Date().getFullYear();
    const numericValue = text.replace(/[^0-9]/g, '');

    if (numericValue.length <= 4) {
      if (numericValue === '' || parseInt(numericValue) < currentYear) {
        setYear(numericValue);
      } else {
        Alert.alert('Invalid Year', `Year should not be greater than ${currentYear}`);
      }
    }
  };

  const handleFirstnameChange = (text) => {
    setFirstname(text);
    if (text) {
      setErrors(prevErrors => ({ ...prevErrors, firstname: "" }));
    } else {
      setErrors(prevErrors => ({ ...prevErrors, firstname: 'First Name cannot be empty' }));
    }
  };

  const handleNavigation = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'ProfileSettings' }],
      })
    );
  };

  const data = [
    { label: 'male', value: '1' },
    { label: 'female', value: '2' },
    { label: 'other', value: '3' },
  ];
  const handleLastnameChange = (text) => {
    setLastname(text);
    if (text) {
      setErrors(prevErrors => ({ ...prevErrors, lastname: "" }));
    } else {
      setErrors(prevErrors => ({ ...prevErrors, lastname: 'Last Name cannot be empty' }));
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
        >
          <ThemedText type="title" style={{ color: Colors.light.green }}>
            Personal Details
          </ThemedText>
          <View style={[styles.input, { marginTop: 25 }]}>
            <PrimaryInput
              Heading={"First Name"}
              value={firstname}
              onChangeText={handleFirstnameChange}
              placeholderText={"First Name"}
              isError={!!errors.firstname}
              errorText={errors.firstname}
              textContentType="givenName"
              autoCapitalize={"none"}
            />
            {errors?.firstname &&<Text style={styles.InvalidText}>{errors.firstname}</Text>}
          </View>
          <View style={styles.input}>
            <PrimaryInput
              Heading={"Last Name"}
              value={lastname}
              onChangeText={handleLastnameChange}
              placeholderText={"Last Name"}
              isError={!!errors.lastname}
              errorText={errors.lastname}
              textContentType="familyName"
              autoCapitalize={"none"}
            />
             {errors?.lastname &&<Text style={styles.InvalidText}>{errors.lastname}</Text>}
          </View>
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
                  allowFontScaling={false}
                  placeholderTextColor={"#D4D8D8"}
                />
                <TextInput
                  style={styles.Dateinput}
                  value={month}
                  onChangeText={handleMonthChange}
                  placeholder="Month"
                  keyboardType="numeric"
                  maxLength={2}
                  allowFontScaling={false}
                  placeholderTextColor={"#D4D8D8"}
                />
                <TextInput
                  style={styles.DateInputYear}
                  value={year}
                  onChangeText={handleYearChange}
                  placeholder="Year"
                  keyboardType="numeric"
                  maxLength={4}
                  allowFontScaling={false}
                  placeholderTextColor={"#D4D8D8"}
                />
              </View>
              <Text style={[styles.heading, { marginTop: 10 }]}>Gender</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: Colors.light.green }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="label"
                placeholder={!isFocus ? 'Select item' : '...'}
                itemTextStyle={{ textTransform: 'capitalize' }}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item.label);
                  setIsFocus(false);
                  setErrors(prevErrors => ({ ...prevErrors, gender: "" }));
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
              {errors.gender ? <Text style={styles.InvalidText}>{errors.gender}</Text> : null}
              <Text style={[styles.heading, { marginTop: 10 }]}>Country of Residence</Text>
              <Dropdown
                style={[styles.dropdown, isCountryFocus && { borderColor: Colors.light.green }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={countries}
                search
                maxHeight={180}
                labelField="label"
                valueField="label"
                placeholder={!isCountryFocus ? 'Select' : '...'}
                searchPlaceholder="Search..."
                value={countryValue}
                onFocus={() => setIsCountryFocus(true)}
                onBlur={() => setIsCountryFocus(false)}
                onChange={item => {
                  setCountryValue(item.label);
                  setIsCountryFocus(false);
                  setErrors(prevErrors => ({ ...prevErrors, country: "" }));
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
              {errors.country ? <Text style={styles.InvalidText}>{errors.country}</Text> : null}
              <View style={[styles.button, { marginBottom: 50 }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={updateProfile} style={styles.AnalyzeButon}>
                    <Text style={styles.AnalyzeButtonText}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default EditProfile;
