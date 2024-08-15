import { Colors } from "../../../constants/Colors";
import Typography from "../../../constants/Typography";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#E6E5FB',

  },
  HomeText: {
    ...Typography.SemiBold20_30,
    color: '#2F4F4F',
  },
  Hello: {
    ...Typography.Light20_30,
    color: '#2F4F4F',
  },
  HomeHeading: {
    ...Typography.SemiBold16_20,
    color: Colors.light.green,
  },
  View_analysis: {
    ...Typography.Regular12_20,
    color: Colors.light.green,
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
    backgroundColor: "rgba(187, 186, 187, 0.3)",
    paddingBottom: 4,
    paddingRight: 3,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  buttontext: {
    ...Typography.SemiBold10_15,
    fontWeight: "600",
    color: Colors.light.background,
    paddingHorizontal: 4,
  },
  button: {
    backgroundColor: Colors.light.green,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 14,
    position: "relative",
  },
  markedmainTitle: {
    paddingTop:10,
    color: Colors.light.green,
    ...Typography.SemiBold16_20,
  },
  MainTitle: {
    color: Colors.light.green,
    ...Typography.Medium16_20,
  },

  subTitle: {
    color: "#708090",
    ...Typography.Light10_14,
    fontWeight: "300",
  },
  markedSubTitle: {
    color: "#708090",
    ...Typography.SemiBold10_15,
  },
  MainBanner: {
    height: 174,
    width:'100%',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  HeaderContainer: { height: 44, flexDirection: 'row', paddingHorizontal: 16, marginTop: 10 },
  Heading_Container: { justifyContent: 'center', alignSelf: 'center', flex: 1, flexDirection: 'row', marginRight: 30 },
  HeadingContainer: { justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 16 }
});
