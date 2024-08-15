import { Colors } from "@/constants/Colors";
import Typography from "@/constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  desc: {
    color: "#708090",
    fontWeight: "400",
    ...Typography.Light10_14,
    marginTop: 8,
  },
  image: {
    width: 30,
    height: 30,
  },
  text: {
    fontWeight: "500",
    ...Typography.SemiBold12_14,
    marginLeft: 10,
    lineHeight: 20,
  },
  flex: {
    backgroundColor: "red",
    height: "100%",
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
  buttonShadow: {
    backgroundColor: "rgba(187, 186, 187, 0.25)",
    paddingBottom: 2,
    paddingRight: 2,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  gridItem: {
    zIndex: 99,
    flex: 1,
    flexDirection: "row",
    alignItems: "center", // 水平居中对齐所有子视图
    justifyContent: "space-between",
    width: 227,
    height: 83,
    marginBottom: 20,
    marginRight: 22,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 15,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 10,
  },
  gridItemIOS: {
    zIndex: 99,
    flex: 1,
    flexDirection: "row",
    alignItems: "center", // 水平居中对齐所有子视图
    justifyContent: "space-between",
    width: 227,
    height: 83,
    marginBottom: 20,
    marginRight: 22,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 15,
  },
  RoutineBgIos: {
    width: 150,
    height: 140,
    position: "absolute",
    bottom: "2%",
    right: "18%",
    transform: [
      {
        scale: 1.1,
      },
    ],
  },
  RoutineBg: {
    width: 150,
    height: 140,
    position: "absolute",
    bottom: "2%",
    right: "12%",
    transform: [
      {
        scale: 1.1,
      },
    ],
  },
  markedmainTitle: {
    color: Colors.light.green,
    ...Typography.SemiBold18_20,
  },
  MainTitle: {
    color: Colors.light.green,
    ...Typography.SemiBold16_20,
    fontWeight: "600",
  },

  subTitle: {
    color: "#708090",
    ...Typography.Light10_14,
    fontWeight: "300",
  },
  markedSubTitle: {
    color: "#708090",
    ...Typography.Medium10_14,
    fontWeight: "400",
  },
  buttontext: {
    ...Typography.Medium10_15,
    fontWeight: "600",
    color: Colors.light.background,
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  button: {
    backgroundColor: Colors.light.green,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 14,
    position: "relative",
  },
  main_container: {
    flex: 1,
    backgroundColor: "#E6E6FA",
  },
  HomeText: {
    ...Typography.SemiBold20_30,
    color: "#191970",
  },
  Hello: {
    ...Typography.Light20_30,
    color: "#191970",
  },
  HomeHeading: {
    ...Typography.SemiBold16_20,
    color: "#000000",
    marginTop: 10,
  },
  View_analysis: {
    ...Typography.Medium12_20,
    color: Colors.light.green,
    fontWeight: "400",
  },
  HeaderContainer: {
    height: 44,
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 10,
  },
  Heading_Container: {
    justifyContent: "center",
    alignSelf: "center",
    flex: 1,
    flexDirection: "row",
    marginRight: 30,
  },
  HeadingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    height: 50,
    marginTop: 26,
    paddingHorizontal: 16,
  },
});
