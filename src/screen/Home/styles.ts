import { Colors } from "../../../constants/Colors";
import Typography from "../../../constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main_container:{
    flex:1,
    backgroundColor: '#E6E5FB',

  },
  HomeText:{
      ...Typography.SemiBold20_30,
      color:'#2F4F4F',
  },
  Hello:{
    ...Typography.Light20_30,
      color:'#2F4F4F',
  },
  HomeHeading:{
    ...Typography.SemiBold16_20,
    color:'#000000',
},
  View_analysis:{
    ...Typography.Regular12_20,
    color:'#000000',
},
HeaderContainer:{ height: 44, flexDirection: 'row', paddingHorizontal: 16,marginTop:10 },
Heading_Container:{ justifyContent: 'center', alignSelf: 'center', flex: 1, flexDirection: 'row', marginRight: 30 },
  HeadingContainer:{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal:16 }
});
