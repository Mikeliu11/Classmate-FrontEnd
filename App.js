import React, { useState } from "react";
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
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  let [fontsLoaded] = useFonts({
    Rancho_400Regular,
  });

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady || !fontsLoaded)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer>
        {user ? <HomeNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
