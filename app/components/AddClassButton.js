import AppLoading from "expo-app-loading";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { useFormikContext } from "formik";

function AddClassButton({ style }) {
  const { handleSubmit } = useFormikContext();
  return (
    <TouchableOpacity onPress={handleSubmit} activeOpacity={0.6}>
      <View style={[styles.container, style]}>
        <MaterialIcons name="add" size={20} color="black" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 15,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddClassButton;
