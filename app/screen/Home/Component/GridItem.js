import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { getColorValue } from "@/utils/ProgressBarColor";
const GridItem = ({ image1, text, id, progress, year, onPress, bgImg }) => {
  const tintColor = getColorValue(progress);
  const WrapperComponent = text === "Skin Age" ? View : TouchableOpacity;
  return (
    <View
      style={[
        id == 4 ? styles.gridItem3 : styles.gridItem1,
        {
          marginLeft: id == 2 || id == 4 ? 25 : 0,
          marginBottom: 20,
        },
      ]}
    >
      <View
        style={[
          id == 4
            ? styles.gridItem2
            : Platform.OS == "ios"
            ? styles.gridItemIos
            : styles.gridItem,
        ]}
      >
        <ImageBackground
          source={bgImg}
          imageStyle={
            Platform.OS == "ios"
              ? styles.imagePositionIos
              : styles.imagePosition
          }
        >
          <WrapperComponent onPress={onPress}>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Image source={image1} style={styles.image} />
                <Text style={styles.text}>{text}</Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                {progress ? (
                  <AnimatedCircularProgress
                    size={40}
                    width={3}
                    fill={progress}
                    tintColor={tintColor}
                    rotation={0}
                    lineCap="round"
                    style={{
                      backgroundColor: "#FFFFFF",
                      transform: [{ scaleX: -1 }],
                    }}
                    backgroundColor="#d4dcdc"
                  >
                    {(fill) => (
                      <Text
                        style={[
                          styles.progressText,
                          {
                            color: tintColor,
                          },
                        ]}
                      >
                        {`${Math.round(fill)}%`}
                      </Text>
                    )}
                  </AnimatedCircularProgress>
                ) : (
                  <AnimatedCircularProgress
                    size={40}
                    width={3}
                    rotation={0}
                    fill={year}
                    lineCap="round"
                    style={{
                      backgroundColor: "#FFFFFF",
                      transform: [{ scaleX: -1 }],
                    }}
                    tintColor="#008080"
                    backgroundColor="#d4dcdc"
                  >
                    {(fill) => (
                      <Text
                        style={[
                          styles.Year,
                          {
                            color: Colors.light.green,
                            transform: [{ scaleX: -1 }],
                            backgroundColor: "#fff",
                          },
                        ]}
                      >
                        {`${fill} y.O.`}
                      </Text>
                    )}
                  </AnimatedCircularProgress>
                )}
              </View>
            </View>
          </WrapperComponent>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePositionIos: {
    position: "absolute",
    left: "43%", // 控制背景图的水平位置
    right: "auto",
    top: 10,
    width: 100, // 背景图的宽度，可调整
    height: 60, // 背景图的高度，可调整
  },
  imagePosition: {
    position: "absolute",
    left: "40%", // 控制背景图的水平位置
    right: "auto",
    top: 10,
    width: 100, // 背景图的宽度，可调整
    height: 60, // 背景图的高度，可调整
  },
  gridItemIos: {
    height: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 3.96,
    elevation: 5,
    justifyContent: "center",
  },
  gridItem1: {
    width: "45%",
    height: 84,
  },
  gridItem: {
    overflow: "hidden",
    height: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 50 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 10,
    justifyContent: "center",
  },
  buttonShadowIos: {
    backgroundColor: "rgba(187, 186, 187, 0.3)",
    paddingBottom: 4,
    paddingRight: 3,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 2,
  },
  gridItem2: {
    height: "100%",
    overflow: "hidden",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  gridItem3: {
    width: "45%",
    height: 84,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "cover",
    marginBottom: 5,
  },
  text: {
    ...Typography.Medium16_20,
    marginTop: 5,
    color: Colors.light.green,
  },
  progressText: {
    transform: [{ scaleX: -1 }],
    ...Typography.Medium10_20,
  },
  Year: {
    ...Typography.SemiBold8_20,
  },
});

export default GridItem;
