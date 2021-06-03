import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import AppText from "./AppText";

function UserBubble({ username, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <AppText>{username}</AppText>
      </View>
    </TouchableOpacity>
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
    height: 65,
    width: 65,
    borderRadius: 35,
  },
});

export default UserBubble;
