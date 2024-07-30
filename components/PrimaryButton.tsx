import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { ActivityIndicator } from 'react-native-paper';

interface PrimaryButtonProps extends TouchableOpacityProps {
  text: string;
  loading: Boolean
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onPress, text, style, loading, ...rest }) => {
  return (
    loading ? <View style={[styles.button, style]}>
      <ActivityIndicator
        color={Colors.light?.white}
        size="small"
        style={{ flex: 1 }}
      /></View> : <TouchableOpacity style={[styles.button, style]} onPress={onPress} {...rest}>
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
