import {Colors} from '../constants/Colors';
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

const Screen: React.FC<ViewProps> = ({ children, style, ...props }) => (
  <View style={[styles.container, style]} {...props}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    flex: 1,
  },
});

export default Screen;
