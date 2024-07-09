import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileTabParamList } from '../types';
import SkinAnalysis from '../../screen/Anylysis/SkinAnalysis'
import SkinDetail from '../../screen/Anylysis/SkinDetail'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Typography from '../../../constants/Typography';
import { Colors } from '../../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
const AnalysisStack = createStackNavigator<ProfileTabParamList>();

const AnalysisNavigator = ({route}) => {
  const value = route.params||route?.params;
  const navigation=useNavigation();
  const handleNavigation=()=>{

    if(value?.params?.item){
        navigation.replace('Home', {
            screen: 'Home',
          });
    }
    else{
        navigation.replace("Analysis");
    }
}
  return (
    <AnalysisStack.Navigator initialRouteName="Analysis">
      <AnalysisStack.Screen
        name="Analysis"
        component={SkinAnalysis}
        options={{
          headerBackground: () => <View style={styles.headerBackground} />,
          headerTitleContainerStyle: styles.headerTitle,
          headerTitle: () => (
            <Text style={styles.title}>Skin Analysis</Text>
          ),
          headerLeft: () => null,
        }}
      />
       <AnalysisStack.Screen
        name="SkinTypeScreen"
        component={SkinDetail}
        options={{
            headerBackground: () => <View style={styles.headerBackground} />,
            headerTitleContainerStyle: styles.headerTitle,
            headerTitle: () => (
              <View style={{flexDirection:'row'}}>
               <TouchableOpacity onPress={handleNavigation} style={styles.backButton}>
                    <Icon name="arrow-back" size={20} color="#000" />
                </TouchableOpacity>
                <Text style={styles.backButtonText}>Back</Text>
               </View>
            ),
            headerLeft: () => null,
        }}
      />
      
    </AnalysisStack.Navigator>
  );
};

export default AnalysisNavigator;
const styles = StyleSheet.create({
  text:{
    ...Typography.SemiBold10_15,
    color:Colors.light.icon
  },
  markedtext:{
    ...Typography.SemiBold10_15,
    color:Colors.light.green
  },
  backButton: {
    alignItems: 'center',
    marginBottom: 16,
    height:40,
    width:40,
    justifyContent:'center',
    borderRadius:27,
    backgroundColor:Colors.light.background,
    borderWidth:1,
    borderColor:'#E6E8FE'
},
backButtonText: {
    fontSize: 16,
    marginLeft: 8,
    height:40,
    paddingTop:2,
    alignSelf:'center',
    ...Typography.SemiBold16_20,
},
    title: {
      ...Typography.SemiBold24_47,
       textAlign: 'center',
       color:Colors.light.green,
   },
   headerBackground: { flex: 1, backgroundColor: Colors.light.background,alignItems:'center' },
   headerTitle: {
     width: "100%",
     backgroundColor: Colors.light.background ,
   },
});
