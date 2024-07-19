import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/Colors'; // Adjust the path as necessary
import Typography from '../constants/Typography';

const BackButton = ({ text,onPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="arrow-back" size={24} color="#707070" />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    marginTop: 1,
    marginLeft: 7,
    color: Colors.light.greyText,
    ...Typography.Semi14_19,
  },
});

export default BackButton;
