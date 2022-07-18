import React from 'react';
import {ActivityIndicator} from 'react-native'

import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen';

import { Routes } from './src/routes'

import { AuthProvider, useAuth } from './src/hooks/auth'

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  const {isLoading} = useAuth()

  if (!fontsLoaded || isLoading) {
    return <ActivityIndicator color={'#FFF'}/>;
  }
  SplashScreen.hideAsync();
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

