import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react"; 
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat"; 
import * as SplashScreen from "expo-splash-screen";

import theme from "../styles/theme";

interface AppProviderProps {
  children: ReactNode;
}

SplashScreen.preventAutoHideAsync();

export function AppProvider({ children }: AppProviderProps) {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!isReady) {
    return null; 
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>; 
}