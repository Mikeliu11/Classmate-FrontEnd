import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function Line({ children, style, ...otherProps }) {
  return <View {...otherProps} style={[styles.container, style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 3,
    width: "95%",
    borderRadius: 100,
  },
});

export default Line;
