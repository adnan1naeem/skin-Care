import "react-native-gesture-handler";
import React from "react";
import { registerRootComponent } from "expo";
import * as Updates from 'expo-updates';
import MainNavigator from "./Navigation/MainNavigator";
import useCachedResources from "@/hooks/useCachedResources";
export default function Index() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  }
  async function checkForUpdates() {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync(); // Might (probably will) reload the app
      }
    } catch (e) {
      // handle or log error
      console.log(e);
    }
  }
  checkForUpdates();
  return (
    <MainNavigator />
  );
}

registerRootComponent(Index);
