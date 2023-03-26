import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  useEffect(() => {
    async function init() {
      // Prevent splash screen from autohiding
      await SplashScreen.preventAutoHideAsync();
    }
    init();
  }, []);

  return (
    <>
      <WebView
        source={{ uri: 'https://pokefi.herokuapp.com/' }}
        sharedCookiesEnabled={true}
        thirdPartyCookiesEnabled={true}
        onLoad={() => SplashScreen.hideAsync()}
      />
      <StatusBar translucent={false} backgroundColor='#555456' style='light' />
    </>
  );
}
