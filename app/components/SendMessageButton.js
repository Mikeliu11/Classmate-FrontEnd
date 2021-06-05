import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useFormikContext } from "formik";

import colors from "../config/colors";

function SendMessageButton(props) {
  const { handleSubmit } = useFormikContext();
  return (
    <TouchableOpacity onPress={handleSubmit} activeOpacity={0.6}>
      <View style={styles.container}>
        <Feather name="send" size={30} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
});

export default SendMessageButton;
