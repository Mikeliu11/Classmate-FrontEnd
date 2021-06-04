import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";
import colors from "../../config/colors";

function CircleButton({ title, style, textStyle, ...otherProps }) {
  const { handleSubmit } = useFormikContext();
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
    width: 180,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
});

export default CircleButton;
