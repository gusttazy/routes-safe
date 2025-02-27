import React from "react";
import Routes from "./src/routes";
import { AppProvider } from "./src/providers/AppProvider";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <AppProvider>
      <StatusBar />
      <Routes />
    </AppProvider>
  );
};