import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import AppText from "./AppText";

function UserBubble({ username, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <AppText>{username}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
});

export default UserBubble;
