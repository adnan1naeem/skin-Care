import React from 'react';
import { View, StyleSheet } from 'react-native';
import DailyButton from './DailyButton';

const DailyResetButtons = ({ routines,OnPress }) => {


  return (
    <View style={{ paddingHorizontal: 16,marginBottom:20 }}>
      {routines?.map((routine, index) => (
        <DailyButton
          key={routine?.id}
          image1={routine?.image1}
          description={routine?.description}
          text={routine?.text}
          ButtonText={routine?.buttonText}
          AnalyzeButton={routine?.DailyRoutineTask}
          OnPress={() => OnPress(routine)}
          disabled={routine?.DailyRoutineTask}
        />
      ))}
    </View>
  );
};


export default DailyResetButtons;
