import React from 'react';
import { View, Text,  TouchableOpacity, Image, ScrollView, ImageBackgroundBase, ImageBackground } from 'react-native';
import { ProgressBar, Provider as PaperProvider } from 'react-native-paper';
import {  getColorCode } from '../../../utils/ProgressBarColor';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { Colors } from '../../../constants/Colors';
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
        return {
          icon: require('../../../assets/images/HydrationIcon.png'),
          background: require('../../../assets/images/HydrationDetail.png'),
        };
      case 'oilness':
        return {
          icon: require('../../../assets/images/OilLevelIcon.png'),
          background: require('../../../assets/images/OilnessDetail.png'),
        };
      case 'elasticity':
        return {
          icon: require('../../../assets/images/ElasticityIcon.png'),
          background: require('../../../assets/images/ElasticityDetail.png'),
        };
      default:
        return {
          icon: require('../../../assets/images/HydrationIcon.png'),
          background: require('../../../assets/images/HydrationDetail.png'),
        };
    }
  };
  const data=getImageSource(route?.params?.params?.item?.parameter);
  return (
    <PaperProvider >
      <ScrollView style={styles.container1} showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', alignContent: 'center', marginTop: 18 }}>
          <TouchableOpacity onPress={handleNavigation} style={styles.backButton}>
            <Icon name="arrow-back" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={styles.backButtonText}>Back</Text>
        </View>
        <ImageBackground source={data?.background} resizeMode='stretch' borderRadius={5} style={styles.analysisContainer}>
          <View style={styles.header}>
            {!value2?.item?.image1 ? <Image source={data?.icon} style={styles.icon} />
              : <Image source={value2?.item?.image1} style={styles.icon} />}
            <Text style={styles.headerText}>{value2?.item?.text||value2?.title}</Text>
            <Text style={[styles.percentageText, { color: Colors.light.green }]}>{value2?.item?.progress || progress}%</Text>
          </View>
          <ProgressBar progress={progressvalueInPercentage || progressvalueInPercentage1} fillStyle={{ borderRadius: 20 }} color={getColorCode(value2?.item?.level)} style={styles.progressBar} />
          <Text style={styles.description} numberOfLines={4}>
            {value2?.item?.Desciption || value2?.item?.description}
          </Text>
        </ImageBackground>
        <Text style={styles.sectionTitle}>{"Your"} {value2?.item?.Header || value2?.title}</Text>
        <Text style={styles.overviewText2}>
          {value2?.item?.Deatil||value2?.item?.detail}
        </Text>
      </ScrollView>
    </PaperProvider>
  );
};
export default SkinDetail;
