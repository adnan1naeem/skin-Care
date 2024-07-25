
// Settings.setAppID("1004342497528759");
// Settings.initializeSDK();
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);
import React from 'react';
import { registerRootComponent } from 'expo';
import { RecoilRoot } from 'recoil';
import App from './App';
import { StatusBar } from 'expo-status-bar';

const Root = () => (
  <RecoilRoot>
     <StatusBar backgroundColor="#f5fafa" barStyle="dark-content" />
    <App />
  </RecoilRoot>
);

registerRootComponent(Root);


