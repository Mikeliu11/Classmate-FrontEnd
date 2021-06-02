import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppButton from "./AppButton";
import colors from "../config/colors";

function CircleButtonFormless({
  handleSubmit,
  title,
  style,
  textStyle,
  ...otherProps
}) {
  return (
    <AppButton
      title={title}
      style={[styles.container, style]}
      textStyle={textStyle}
      onPress={handleSubmit}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: 140,
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 70,
  },
});

export default CircleButtonFormless;
