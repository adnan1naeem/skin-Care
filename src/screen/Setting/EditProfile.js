import { Colors } from '../../../constants/Colors';
import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Screen from '../../../components/Screen';
import { ThemedText } from '../../../components/ThemedText';
import { CommonActions } from '@react-navigation/native';
import countries from './../Auth/CountryData'
import PrimaryInput from '../../../components/PrimaryInput';
const EditProfile = ({ navigation }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isCountryFocus, setIsCountryFocus] = useState(false);
  const [countryValue, setCountryValue] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const handleDayChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    if (numericValue <= 31) {
      setDay(numericValue);
    }
  };
  const data = [
    { label: 'Male', value: '1' },
    { label: 'Female', value: '2' },
    { label: 'Other', value: '3' },
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
  const handleNavigation = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'ProfileSettings' }],
      })
    );
  }
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
          <ThemedText type="title" style={{ color: Colors.light.green, }}>Setup Your Profile</ThemedText>
          <View style={[styles.input, { marginTop: 35 }]}>
            <PrimaryInput
              Heading={"First Name"}
              value={firstname}
              onChangeText={(text) => {
                setFirstname(text)
              }}
              placeholderText={"First Name"}
              isError={""}
              textContentType="emailAddress"
              autoCapitalize={"none"}
            />
          </View>
          <View style={styles.input}>
            <PrimaryInput
              Heading={"Last Name"}
              value={lastname}
              onChangeText={(text) => {
                setLastname(text)
              }}
              placeholderText={"Last Name"}
              isError={""}
              textContentType="emailAddress"
              autoCapitalize={"none"}
            />
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
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item.value);
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
                maxHeight={150}
                labelField="label"
                valueField="value"
                placeholder={!isCountryFocus ? 'Select' : '...'}
                searchPlaceholder="Search..."
                value={countryValue}
                onFocus={() => setIsCountryFocus(true)}
                onBlur={() => setIsCountryFocus(false)}
                onChange={item => {
                  setCountryValue(item.value);
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
              <View style={[styles.button, { marginBottom: 50 }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity onPress={() => { navigation.goBack() }} style={[styles.closeButton]}>
                    <Text style={styles.closeButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleNavigation} style={styles.AnalyzeButon}>
                    <Text style={styles.AnalyzeButtonText}>Analyze</Text>
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
