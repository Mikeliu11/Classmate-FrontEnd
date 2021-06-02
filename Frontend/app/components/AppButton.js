import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function AppButton({ title, onPress, style, textStyle }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <AppText style={textStyle}>{title}</AppText>
    </TouchableOpacity>
  );
}

export default AppButton;
