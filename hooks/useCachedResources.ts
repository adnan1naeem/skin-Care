import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { loadFonts } from "../utils/resources";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  const loadAssets = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();

      await loadFonts();
    } catch (e) {
      // We might want to provide this error information to an error reporting service
      // console.warn(e);
    } finally {
      setLoadingComplete(true);
      await SplashScreen.hideAsync();
    }
  }
  React.useEffect(() => {
    loadAssets();
  }, []);

  return isLoadingComplete;
}
