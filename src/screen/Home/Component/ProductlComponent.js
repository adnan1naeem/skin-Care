import Typography from '../../../../constants/Typography';
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const ProductItem = ({ image1, text, description,icons,onPress}) => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const imageUrl = `${apiUrl}${image1}`; 
  const iconMapping = {
    'Hydration': require('../../../../assets/images/Hydration.png'),
    'Oilness': require('../../../../assets/images/Oilness.png'),
    'Elasticity': require('../../../../assets/images/Elasticity.png'),
    'Age': require('../../../../assets/images/Age.png'),
  }; 
  let parsedIcons = [];
  try {
    parsedIcons = JSON?.parse(icons[0]);
  } catch (error) {
    console.error('Failed to parse icons:', error);
  }

  return (
    <TouchableOpacity style={[styles.gridItem, { marginRight: 15 }]} onPress={onPress}>
        <View style={{flexDirection: 'row' }}>
          <Image source={{ uri: imageUrl }} style={styles.image} resizeMode='contain' />
          <Text style={styles.text} numberOfLines={1}>{text}</Text>
        </View>
        <View style={{ flexDirection:'row',marginVertical:5,width: 17,height: 17, }}>
        {parsedIcons && parsedIcons.map((icon) => (
          <Image
            source={iconMapping[icon]}
            style={styles.icon}
          />
        ))}
        </View>
        <Text style={styles.desc} numberOfLines={2}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    width:217,
    height: 112,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  image: {
    width: 30,
    height: 30,
    backgroundColor:"#F2F2F2",
    borderRadius:50,
    marginBottom: 5,
  },
  text: {
    ...Typography.Medium12_20,
    marginTop: 5,
    marginLeft:10,
    width:150,
  },
  icon: {
    width: 17,
    height: 17,
    marginRight: 5,
  },
  desc: {
    ...Typography.Light10_14,
    marginTop: 5,
    color:'#708090',
  },
});

export default ProductItem;
