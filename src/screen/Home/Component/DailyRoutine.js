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
    <View style={horizontal?{ paddingVertical: 16, marginBottom: 20 }:{paddingHorizontal: 16, marginBottom: 20}}>
      <FlatList
        data={routines}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 ,paddingLeft:horizontal?16:0}}
      />
    </View>
  );
};


export default DailyResetButtons;
