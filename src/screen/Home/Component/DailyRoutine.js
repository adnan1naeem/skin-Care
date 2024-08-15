import React from 'react';
import { View, FlatList } from 'react-native';
import DailyButton from './DailyButton';

const DailyResetButtons = ({ routines, OnPress, horizontal }) => {

  const renderItem = ({ item }) => (
    <DailyButton
      image1={item.image1}
      description={item.description}
      text={item.text}
      horizontal={horizontal}
      ButtonText={item.buttonText}
      AnalyzeButton={item.DailyRoutineTask}
      OnPress={() => OnPress(item)}
      disabled={item?.DailyRoutineTask}
    />
  );
  return (
    <View style={horizontal?{ marginBottom: 20 }:{marginTop:13, marginBottom: 20}}>
      <FlatList
        data={routines}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 ,paddingLeft:16,paddingRight:horizontal?0:16,marginVertical:horizontal&&16}}
      />
    </View>
  );
};


export default DailyResetButtons;
