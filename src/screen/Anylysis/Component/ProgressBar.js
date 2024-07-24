import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper'; 
import { Colors } from '../../../../constants/Colors';
import Typography from '../../../../constants/Typography';
import { getColor } from '../../../../utils/ProgressBarColor'
const ProgressComponent = ({ data, onPress,onPressOilness,onPressElastcity }) => {
  const value = data?.hydration / 100
  const value1 = data?.oilness / 100
  const value2 = data?.elastcity / 100
  const tintColor2 = getColor(value2);
  const tintColor1 = getColor(value1);
  const tintColor = getColor(value);

  return (
    <>
      <TouchableOpacity style={styles.progressContainer} onPress={onPress}>
        <View style={styles.textContainer}>
          <Text style={styles.progressLabel}>Hydration</Text>
          <Text style={[styles.progressValue, { color: tintColor }]}>{data?.hydration}%</Text>
        </View>
        <ProgressBar
          progress={value}
          color={tintColor}
          fillStyle={{ borderRadius: 20 }}
          style={styles.progress}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.progressContainer} onPress={onPressOilness}>
        <View style={styles.textContainer}>
          <Text style={styles.progressLabel}>Oilness</Text>
          <Text style={[styles.progressValue, { color: tintColor1 }]}>{data?.oilness}%</Text>
        </View>
        <ProgressBar
          progress={value1}
          color={tintColor1}
          fillStyle={{ borderRadius: 20 }}
          style={styles.progress}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.progressContainer} onPress={onPressElastcity}>
        <View style={styles.textContainer}>
          <Text style={styles.progressLabel}>Elastcity</Text>
          <Text style={[styles.progressValue, { color: tintColor2 }]}>{data?.elastcity}%</Text>
        </View>
        <ProgressBar
          progress={value2}
          color={tintColor2}
          fillStyle={{ borderRadius: 20 }}
          style={styles.progress}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    marginTop: 10,
    height: 66,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: Colors.light.background,
    marginBottom: 5,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  progressLabel: {
    ...Typography.Medium12_20,
    color: '#000',
  },
  progressValue: {
    ...Typography.Medium12_20,
    color: '#000',
  },
  progress: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#d4dcdc"
  },
});

export default ProgressComponent;
