import { Colors } from "../../../constants/Colors";
import Typography from "../../../constants/Typography";
import { StyleSheet } from "react-native";

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
  MainBanner: {
    height: 174,
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
