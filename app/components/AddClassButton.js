import AppLoading from "expo-app-loading";
import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function AddClassButton({ style }) {
  return (
    <View style={[styles.container, style]}>
      <MaterialIcons name="add" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    borderRadius: 15,
    backgroundColor: colors.grey,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddClassButton;
