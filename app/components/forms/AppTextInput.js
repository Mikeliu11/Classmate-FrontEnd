import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import colors from "../../config/colors";

function AppTextInput({ containerStyle, icon, width = "90%", ...otherProps }) {
  if (icon == "user") {
    return (
      <View style={[styles.container, { width }, containerStyle]}>
        <FontAwesome
          name={icon}
          size={22}
          color={colors.medium}
          style={styles.icon}
        />
        <TextInput
          placeholderTextColor={colors.medium}
          style={{ flex: 1 }}
          {...otherProps}
        />
      </View>
    );
  }
  return (
    <View style={[styles.container, { width }, containerStyle]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={{ flex: 1 }}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    margin: 10,
  },
});

export default AppTextInput;
