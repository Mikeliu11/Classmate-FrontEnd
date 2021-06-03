import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Rancho_400Regular } from "@expo-google-fonts/rancho";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./app/screens/LoginScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AppScreen from "./app/screens/AppScreen";
import UserBubble from "./app/components/UserBubble";
import ClassCard from "./app/components/ClassCard";
import AppNavigator from "./app/navigation/AppNavigator";
import AddClassButton from "./app/components/AddClassButton";
import ChatBox from "./app/components/ChatBox";
import UserMessage from "./app/components/UserMessage";
import ClassChatScreen from "./app/screens/ClassChatScreen";
import HomeNavigator from "./app/navigation/HomeNavigator";
import AuthNavigator from "./app/navigation/AuthNavigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    Rancho_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <RegisterScreen></RegisterScreen>;
}
