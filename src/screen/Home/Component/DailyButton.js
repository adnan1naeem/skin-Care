import { Colors } from '../../../../constants/Colors';
import Typography from '../../../../constants/Typography';
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const DailyButton = ({ image1, text, description, ButtonText, OnPress, horizontal, disabled }) => {

  return (
    <View style={[horizontal?styles.gridItem2:styles.gridItem, { marginRight: 15 }]}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column', width: horizontal?'54%':"62%" }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={image1} style={styles.image} />
            <Text style={styles.text}>{text}</Text>
          </View>
          <Text style={styles.desc} numberOfLines={2}>{description}</Text>
        </View>
        <View style={horizontal?styles.button_container:styles.button_container}>
          {disabled ? <Text style={[styles.completeText,{marginRight:horizontal?0:25}]} numberOfLines={1}>Done</Text> :
            <TouchableOpacity style={horizontal?styles.button2:styles.button} onPress={OnPress}>
              <Text style={disabled ? styles.completeText : styles.buttontext} numberOfLines={2}>{ButtonText}</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  gridItem2:{
    width: 217,
    height: 83,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight:10,
  },
  gridItem: {
    width: '100%',
    height: 72,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  button_container: { flex: 1, justifyContent: 'center', alignItems: "flex-end" },
  button_container2: {  justifyContent: 'center', alignItems: "flex-end" },
  completeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  completeText: {
    ...Typography.SemiBold14_21,
    color: Colors.light.green,
  },
  button: {
    backgroundColor: Colors.light.green,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button2: {
    width:90,
    height:25,
    backgroundColor: Colors.light.green,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    marginBottom: 5,
  },
  text: {
    ...Typography.Medium12_20,
    marginTop: 5,
    marginLeft: 10,
  },
  buttontext: {
    ...Typography.Medium10_15,
    color: Colors.light.background
  },
  icon: {
    width: 17,
    height: 17,
    marginRight: 5,
  },
  desc: {
    ...Typography.Light10_14,
    color: '#708090',
  },
  progressText: {
    fontSize: 10,
    color: '#000',
  },
});

export default DailyButton;
