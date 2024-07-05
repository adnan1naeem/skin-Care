import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { Colors } from '../constants/Colors';

interface PrimaryButtonProps extends TouchableOpacityProps {
  text: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onPress, text, style, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} {...rest}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.light.green,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.light.background,
  },
});

export default PrimaryButton;
