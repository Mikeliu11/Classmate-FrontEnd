import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";

import AppText from "./AppText";

function UserMessage({ message, username, image }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.nameText}>{username}</AppText>
      <View style={styles.imageLineContainer}>
        <View style={styles.subContainer}>
          <Text numberOfLines={30} style={styles.text}>
            {message}
          </Text>
        </View>
        <Image style={styles.image} source={image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "purple",
  },
  imageLineContainer: {
    flexDirection: "row",
    backgroundColor: "yellow",
    alignItems: "flex-end",
  },
  nameText: {
    left: "77%",
    fontSize: 14,
    // backgroundColor: "yellow",
    // fontFamily: "Roboto",
  },
  subContainer: {
    // flexDirection: "row",
    alignItems: "flex-end",
    // backgroundColor: "pink",
    textAlign: "center",
    flex: 1,
  },
  image: {
    height: 30,
    width: 30,
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
    marginLeft: "5%",
    overflow: "hidden",
    // left: 30,
  },
});

export default UserMessage;
