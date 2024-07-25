import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DailyButton from './DailyButton';

const DailyResetButtons = ({ routines }) => {
  const [buttonStates, setButtonStates] = useState(
    Array(routines.length).fill(false)
  );

  useEffect(() => {
    const loadButtonStates = async () => {
      try {
        const now = new Date();
        const newStates = await Promise.all(
          routines.map(async (routine, index) => {
            const savedState = await AsyncStorage.getItem(routine.text);
            const lastClickedDate = await AsyncStorage.getItem(
              `${routine.text}LastClickedDate`
            );

            if (savedState !== null && lastClickedDate !== null) {
              const lastClicked = new Date(JSON.parse(lastClickedDate));
              if (
                now.getDate() !== lastClicked.getDate() ||
                now.getMonth() !== lastClicked.getMonth() ||
                now.getFullYear() !== lastClicked.getFullYear()
              ) {
                // It's a new day, reset the button state
                await AsyncStorage.setItem(routine.text, JSON.stringify(false));
                return false;
              } else {
                return JSON.parse(savedState);
              }
            }
            return false;
          })
        );
        setButtonStates(newStates);
      } catch (error) {
        console.error('Failed to load button states', error);
      }
    };

    loadButtonStates();
  }, []);

  useEffect(() => {
    const saveButtonStates = async () => {
      try {
        const now = new Date();
        await Promise.all(
          buttonStates.map((state, index) => {
            AsyncStorage.setItem(routines[index].text, JSON.stringify(state));
            if (state) {
              AsyncStorage.setItem(
                `${routines[index].text}LastClickedDate`,
                JSON.stringify(now)
              );
            }
          })
        );
      } catch (error) {
        console.error('Failed to save button states', error);
      }
    };

    saveButtonStates();
  }, [buttonStates]);

  const handleButtonClick = (index) => {
    const newStates = [...buttonStates];
    newStates[index] = true;
    setButtonStates(newStates);
  };

  return (
    <View style={{ paddingHorizontal: 16,marginBottom:20 }}>
      {routines.map((routine, index) => (
        <DailyButton
          key={routine.id}
          image1={routine.image1}
          description={routine.description}
          text={routine.text}
          ButtonText={routine.buttonText}
          AnalyzeButton={routine.DailyRoutineTask}
          OnPress={() => handleButtonClick(index)}
          disabled={buttonStates[index]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DailyResetButtons;
