import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import HomeNavigator from "./HomeNavigator";

//import expoPushTokens from "../api/expoPushTokens";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  // useEffect(() => {
  //   registerForPushNotifications();
  // }, []);

  // const registerForPushNotifications = async () => {
  //   try {
  //     const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //     if (!permission.granted) return;

  //     const token = await Notifications.getExpoPushTokenAsync();
  //     expoPushTokens.register(token.data);
  //   } catch (error) {
  //     console.log("Error getting a push token", error);
  //   }
  // };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={() => ({
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
