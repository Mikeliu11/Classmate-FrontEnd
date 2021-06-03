import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";

import AppText from "./AppText";

function UserMessage({ message, username, image }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.nameText}>{username}</AppText>
      <View style={styles.imageLineContainer}>
        <Image style={styles.image} source={image} />
        <View style={styles.subContainer}>
          <Text numberOfLines={30} style={styles.text}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 20,
    // backgroundColor: "purple",
  },
  imageLineContainer: {
    flexDirection: "row",
    // backgroundColor: "purple",
    alignItems: "flex-end",
  },
  nameText: {
    left: "14%",
    fontSize: 10,
    // fontFamily: "Roboto",
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "pink",
    flex: 1,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 35,
    marginHorizontal: 5,
  },
  text: {
    // fontFamily: "Roboto",
    fontSize: 16,
    backgroundColor: colors.secondary,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: "5%",
    overflow: "hidden",
  },
});

export default UserMessage;
