import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, BackHandler, Platform } from 'react-native';
import { ProgressBar, Provider as PaperProvider } from 'react-native-paper';
import { Colors } from '../../../constants/Colors';
import Typography from '../../../constants/Typography';
import { getColor, getColorValue } from '../../../utils/ProgressBarColor';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
const SkinDetail = ({ navigation, route }) => {
  const value = route.params || route?.params;
  const tintColor = getColor(value?.progress);
  const tinitColorwithvalue = getColorValue(value?.item?.progress);
  const progressvalueInPercentage = value?.item?.progress / 100;
  const progressPercentage = value?.progress * 100;
  const colors = value?.item?.progress ? tinitColorwithvalue : tintColor;
  const handleNavigation = () => {
    if (value?.screen) {
      navigation.replace('Home');
    } else {
      navigation.goBack();
    }
  };
  
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true; // Returning true means we are handling the back press
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [])
  );

  return (
    <PaperProvider >
      <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'row', alignContent: 'center', marginTop: 18 }}>
                <TouchableOpacity onPress={ handleNavigation} style={styles.backButton}>
                    <Icon name="arrow-back" size={20} color="#000" />
                </TouchableOpacity>
                <Text style={styles.backButtonText}>Back</Text>
            </View>
        <View style={styles.analysisContainer}>
          <View style={styles.header}>
            <Image source={value?.item?.image1 || value?.image1} style={styles.icon} />
            <Text style={styles.headerText}>{value?.item?.text || value?.text}</Text>
            <Text style={[styles.percentageText, { color: colors }]}>{progressPercentage || value?.item?.progress}%</Text>
          </View>
          <ProgressBar progress={progressvalueInPercentage || value?.progress} fillStyle={{ borderRadius: 20 }} color={colors} style={styles.progressBar} />
          <Text style={styles.description}>
            {value?.item?.Desciption || value?.Desciption}
          </Text>
        </View>
        <Text style={styles.sectionTitle}>{value?.item?.Header || value?.Header}</Text>
        <Text style={styles.overviewText}>
          {value?.item?.Deatil || value?.Deatil}
        </Text>
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FAFA',
    padding: 18,
    paddingTop:Platform?.OS==="android"?10:'11%',
  },
  backButton: {
    alignItems: 'center',
    marginBottom: 16,
    height: 40,
    width: 40,
    justifyContent: 'center',
    borderRadius: 27,
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: '#E6E8FE',
  },
  backButtonText: {
    fontSize: 16,
    marginLeft: 8,
    height: 40,
    paddingTop: 2,
    alignSelf: 'center',
    ...Typography.SemiBold16_20,
  },
  analysisContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    height: 30,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  headerText: {
    flex: 1,
    ...Typography.Medium12_20,
  },
  percentageText: {
    paddingTop: 10,
    ...Typography.Medium22_20,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginBottom: 16,
    backgroundColor: '#d4dcdc',
  },
  description: {
    ...Typography.Light12_18,
    color: '#707070',
  },
  sectionTitle: {
    paddingHorizontal: 18,
    ...Typography.SemiBold16_20,
    marginBottom: 8,
  },
  overviewText: {
    paddingHorizontal: 18,
    ...Typography.Light12_18,
    color: '#707070',
  },
});

export default SkinDetail;
