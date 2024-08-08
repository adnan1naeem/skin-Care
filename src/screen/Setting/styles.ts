import { Colors } from "../../../constants/Colors";
import Typography from "../../../constants/Typography";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer:{ flex: 1, paddingHorizontal: 16 ,paddingTop:Platform?.OS==="ios"?"15%":60,backgroundColor:Colors.light.background},
  wrapper: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.light.background
  },
  InvalidText: { color: 'red',marginTop:5,paddingLeft:5 },
  buttonsWrapper: {
    height: 50,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  linkText: {
    ...Typography.Light10_14,
    color: '#666874',
    textDecorationLine: 'underline', // Underline text
  },
  data:{
    ...Typography.Light12_15,
    color:'#708090'
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
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width:"47%",
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.light.green,
    marginTop: 10,
},
closeButtonText: {
    color: Colors.light.green,
    ...Typography.SemiBold14_21,
    textAlign: 'center',
},
AnalyzeButon: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width:"47%",
    backgroundColor: Colors.light.green,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},
AnalyzeButtonText: {
    color: Colors.light.background,
    textAlign: 'center',
    ...Typography.SemiBold14_21

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
    color: Colors.light?.greyTextColor,
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
    marginTop: 25,
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
    backgroundColor:Colors.light.white
  },
  DateInputYear: {
    height:52,
    width:"39%",
    marginRight:15,
    borderRadius: 10,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor:Colors.light.white
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
    backgroundColor:Colors.light.white
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
  dropdownContainerFocus: {
    zIndex: 10,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  placeholderStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 15.6
  },
  selectedTextStyle: {
    fontSize: 16,
    textTransform:'capitalize'
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
