import { Colors } from "../../../constants/Colors";
import Typography from "../../../constants/Typography";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer:{ flex: 1, paddingHorizontal: 16 ,paddingTop:Platform?.OS==="ios"?"15%":10},
  wrapper: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.light.background
  },
  buttonsWrapper: {
    height: 50,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  SeparatorLine:{borderWidth:0.6,height:1,width:'47%',borderColor:'#D3D3D3'},
  containerScreen: {
    backgroundColor: Colors.light.background,
    flex: 1,
  },
  heading:{
    ...Typography.Medium14_18,
    color:Colors.light.HeadingText,
    marginBottom:5,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.light.background
  },
  scroll: {
    flexGrow: 1,
    marginTop:30,
  },
  keyboardView: {
    flex: 1,
  },
  newaccount: {
    fontFamily: 'Poppins-Regular',
    color: '#707070',
    fontSize: 14,
    lineHeight: 19.6
  },
  input: {
    paddingTop: 10,
  },
  separatorOrText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    lineHeight: 14,
    paddingHorizontal: 5,
    color: '#D3D3D3'
  },
  separatorOr: {
    position: "absolute",
    top: 25,
    alignItems: "center",
    width: "100%",
  },
  separatorLine: {
    borderTopWidth: 1,
    borderColor: "#D3D3D3",
    width: "100%",
  },
  separator: {
    paddingTop: 30,
    paddingBottom: 20,
    flexDirection:'row',alignItems:'center'
  },
  button: {
    marginTop: 17,
  },
  subTitleText: {
    fontFamily: "gilroy-semibold",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 25,
  },
  subTitle: {
    paddingTop: 6,
  },
  titleText: {
    fontFamily: "gilroy-extrabold",
    fontSize: 28,
    fontWeight: "800",
    lineHeight: 30,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  topBar: {
    flexDirection: "row",
    paddingTop: 7,
    paddingBottom: 13,
  },
  topSection: {
    flex: 1,
  },
  container_view: {
    backgroundColor: "#F2F1EF",
    paddingHorizontal: 18,
    flex: 1,
  },
  Datecontainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  Dateinput: {
    marginRight:15,
    height:52,
    width:"25%",
    borderRadius: 10,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    textAlign: 'center',
  },
  DateInputYear: {
    height:52,
    width:"39%",
    marginRight:15,
    borderRadius: 10,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    textAlign: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: '#D3D3D3',
    borderWidth: 0.5,
    borderRadius: 8,
    marginTop:10,
    width:'98%',
    paddingLeft: 15,
    marginBottom:20,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 15.6
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  getStartedButton: {
    paddingVertical: 10,
    width: "100%",
    height: 78,
  },
  forgotPasswordText: {
    textDecorationLine: "underline",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
    fontFamily: "gilroy-medium",
  },
  Forget:{
    color:'#666874',
    fontSize:10,
    lineHeight:15,
    fontFamily:'Poppins-Regular',
    marginLeft:3
  },
  forgotPassword: {
    paddingTop: 10,
  },
  inputField: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(37,56,55,0.32)",
    paddingHorizontal: 16,
  },
});
