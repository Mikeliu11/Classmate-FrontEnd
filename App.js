import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Rancho_400Regular } from "@expo-google-fonts/rancho";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    Rancho_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <RegisterScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
