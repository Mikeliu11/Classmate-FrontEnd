import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";

import AppText from "./AppText";

const pic1 = require("../assets/1.jpg");

const profilePics = [
  require("../assets/1.jpg"),
  require("../assets/2.jpg"),
  require("../assets/3.jpg"),
  require("../assets/4.jpg"),
  require("../assets/5.jpg"),
  require("../assets/6.jpg"),
  require("../assets/7.jpg"),
  require("../assets/8.jpg"),
  require("../assets/9.jpg"),
  require("../assets/10.jpg"),
];

function UserMessage({ message, username, image, user_id, sender_id }) {
  const lastDigit = (n) => {
    // return the last digit
    return Math.floor(n % 10);
  };
  console.log(lastDigit(sender_id) + 1);
  if (user_id == sender_id)
    return (
      <View style={styles2.container}>
        <AppText style={styles2.nameText}>{username}</AppText>
        <View style={styles2.imageLineContainer}>
          <View style={styles2.subContainer}>
            <Text numberOfLines={30} style={styles2.text}>
              {message}
            </Text>
          </View>
          <Image
            style={styles2.image}
            source={profilePics[lastDigit(sender_id) + 1]}
          />
        </View>
      </View>
    );
  return (
    <View style={styles.container}>
      <AppText style={styles.nameText}>{username}</AppText>
      <View style={styles.imageLineContainer}>
        <Image
          style={styles.image}
          source={profilePics[lastDigit(sender_id) + 1]}
        />
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
    left: "12%",
    fontSize: 14,
    // backgroundColor: "yellow",
    // fontFamily: "Roboto",
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "pink",
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
    backgroundColor: colors.tertiary,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: "5%",
    overflow: "hidden",
  },
});

const styles2 = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 20,
    // backgroundColor: "purple",
  },
  imageLineContainer: {
    flexDirection: "row",
    // backgroundColor: "yellow",
    alignItems: "flex-end",
  },
  nameText: {
    left: "83%",
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
