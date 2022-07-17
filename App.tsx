import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'
import {AppRoutes} from './src/routes/app.routes'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native'

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
      <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
    </ThemeProvider>
  );
}

