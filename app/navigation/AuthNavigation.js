import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AppScreen from "../screens/AppScreen";
import ClassChatScreen from "../screens/ClassChatScreen";

const Stack = createStackNavigator();

//TODO: REMEMBER TO DELETE THE HOME AND CLASS CHAT SCREENS FROM STACK

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Home"
      component={AppScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ClassChat"
      component={ClassChatScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
