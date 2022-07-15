import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home } from './src/pages/Home';
import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen';
import { Register } from './src/pages/Register';


export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();
  return (
    <ThemeProvider theme={theme}>
      {/* <Home /> */}
      <Register/>
    </ThemeProvider>
  );
}

