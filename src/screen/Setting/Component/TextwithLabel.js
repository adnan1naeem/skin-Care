// components/TextWithLabel.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Typography  from '../../../../constants/Typography'; // Adjust path if needed
import { Colors } from '../../../../constants/Colors'; // Adjust path if needed

const TextWithLabel = ({ heading, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.data}>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  heading: {
    ...Typography.Medium14_18,
    color: Colors.light.HeadingText,
    marginBottom: 5,
  },
  data: {
    ...Typography.Light12_15,
    color: '#708090',
  },
});

export default TextWithLabel;
