import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ textFont, textColor, children, style, ...otherProps }) {
  return (
    <Text {...otherProps} style={[styles.text, style, { color: textColor }]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Rancho_400Regular",
    fontSize: 20,
  },
});

export default AppText;
