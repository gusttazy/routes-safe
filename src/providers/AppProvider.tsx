import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react"; 
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  NunitoSans_800ExtraBold,
} from "@expo-google-fonts/nunito-sans"; 
import * as SplashScreen from "expo-splash-screen";

import theme from "../styles/theme";

interface AppProviderProps {
  children: ReactNode;
}

SplashScreen.preventAutoHideAsync();

export function AppProvider({ children }: AppProviderProps) {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold,
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
