import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const fonts = {
  ...Ionicons.font,
  'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
  'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
};

export const useFonts = () => {
  const [loaded] = Font.useFonts(fonts);

  return loaded;
}

export const loadFonts = async () => {
  await Font.loadAsync(fonts);
};