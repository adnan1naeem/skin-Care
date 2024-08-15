import { Colors } from '../../../../constants/Colors';
import Typography from '../../../../constants/Typography';
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { getColorCode } from '../../../../utils/ProgressBarColor';
const backgroundImages = {
  1: require('./../../../../assets/images/Hydrationbg.png'),
  2: require('./../../../../assets/images/Oilnessbg.png'),
  3: require('./../../../../assets/images/Elasticitybg.png'),
  default: require('./../../../../assets/images/SkinAgebg.png'),
};
const GridItem = ({ image1, text, id, progress, year, onPress, level }) => {
  const tintColor = getColorCode(level);
  const backgroundImage = backgroundImages[id] || backgroundImages.default;
  const WrapperComponent = text === 'Skin Age' ? View : TouchableOpacity;
  return (
    <WrapperComponent style={[id == 4 ? styles.gridItem2 : styles.gridItem, { marginLeft: id == 2 || id == 4 ? 16 : 0 }]} onPress={onPress}>
      <ImageBackground source={backgroundImage} borderRadius={10} style={styles.Bg} resizeMode="stretch">
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
            <Image source={image1} style={styles.image} />
            <Text style={styles.text}>{text}</Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            {text !== 'Skin Age' ? (
              <AnimatedCircularProgress
                size={40}
                width={3}
                fill={progress}
                tintColor={tintColor}
                rotation={0}
                lineCap="round"
                style={{ transform: [{ scaleX: -1 }] }}
                backgroundColor="#d4dcdc">
                {
                  (fill) => (
                    <Text style={[styles.progressText, { color: tintColor }]}>
                      {`${Math.round(fill)}%`}
                    </Text>
                  )
                }
              </AnimatedCircularProgress>
            ) :
              (<AnimatedCircularProgress
                size={40}
                width={3}
                rotation={0}
                fill={year}
                lineCap="round"
                style={{ transform: [{ scaleX: -1 }] }}
                tintColor="#008080"
                backgroundColor="#d4dcdc">
                {
                  (fill) => (
                    <Text style={[styles.Year, { color: "#008080" }]}>
                      {`${fill} Y.O.`}
                    </Text>
                  )
                }
              </AnimatedCircularProgress>)}
          </View>
        </View>
      </ImageBackground>
    </WrapperComponent>
  );
};

const styles = StyleSheet.create({

  gridItem: {
    width: "45%",
    height: 82,
    marginBottom: 16,
    shadowColor: '#000',
    borderRadius:10,
    backgroundColor: 'transparent',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gridItem2: {
    width: "45%",
    height: 82,
    borderRadius:10,
    marginBottom: 20,
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  Bg: {
    flex:1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    marginBottom: 5,
  },
  text: {
    color:Colors.light.green,
    ...Typography.Medium12_20,
    marginTop: 5
  },
  progressText: {
    transform: [{ scaleX: -1 }],
    ...Typography.Medium10_20,
  },
  Year: {
    transform: [{ scaleX: -1 }],
    ...Typography.SemiBold8_20
  }
});

export default GridItem;
