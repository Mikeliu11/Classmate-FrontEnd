import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AppScreen from "../screens/AppScreen";
import ClassChatScreen from "../screens/ClassChatScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator mode="card">
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

export default HomeNavigator;
