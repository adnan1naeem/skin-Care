import React from 'react';
import { View, Text,  TouchableOpacity, Image, ScrollView } from 'react-native';
import { ProgressBar, Provider as PaperProvider } from 'react-native-paper';
import {  getColorCode } from '../../../utils/ProgressBarColor';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
const SkinDetail = ({ navigation, route }) => {
  const value = route.params || route?.params;
  const value2 = value?.params;
  const progress = value2?.values
  const progressvalueInPercentage = value2?.item?.progress / 100;
  const progressvalueInPercentage1 = progress / 100


  const handleNavigation = () => {
    navigation.goBack();
  };
  const getImageSource = (title) => {
    switch (title) {
      case 'hydration':
        return require('../../../assets/images/HydrationIcon.png');
      case 'oilness':
        return require('../../../assets/images/OilLevelIcon.png');
      case 'elasticity':
        return require('../../../assets/images/ElasticityIcon.png');
      default:
        return require('../../../assets/images/HydrationIcon.png');
    }
  };

  return (
    <PaperProvider >
      <ScrollView style={styles.container1} showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', alignContent: 'center', marginTop: 18 }}>
          <TouchableOpacity onPress={handleNavigation} style={styles.backButton}>
            <Icon name="arrow-back" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={styles.backButtonText}>Back</Text>
        </View>
        <View style={styles.analysisContainer}>
          <View style={styles.header}>
            {!value2?.item?.image1 ? <Image source={getImageSource(route?.params?.params?.item?.parameter)} style={styles.icon} />
              : <Image source={value2?.item?.image1} style={styles.icon} />}
            <Text style={styles.headerText}>{value2?.item?.text||value2?.title}</Text>
            <Text style={[styles.percentageText, { color: getColorCode(value2?.item?.level) }]}>{value2?.item?.progress || progress}%</Text>
          </View>
          <ProgressBar progress={progressvalueInPercentage || progressvalueInPercentage1} fillStyle={{ borderRadius: 20 }} color={getColorCode(value2?.item?.level)} style={styles.progressBar} />
          <Text style={styles.description}>
            {value2?.item?.Desciption || value2?.item?.description}
          </Text>
        </View>
        <Text style={styles.sectionTitle}>{"Your"} {value2?.item?.Header || value2?.title}</Text>
        <Text style={styles.overviewText2}>
          {value2?.item?.Deatil||value2?.item?.detail}
        </Text>
      </ScrollView>
    </PaperProvider>
  );
};
export default SkinDetail;
