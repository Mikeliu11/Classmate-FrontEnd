import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import AppText from "./AppText";

function ClassCard({
  className,
  classCapacity,
  lastMessage,
  lastMessageUsername,
  lastMessageUserImage,
  containerColor,
  textColor,
  onPress,
}) {
  return (
    <>
      <View style={styles.container}>
        <AppText style={styles.classTitle}>{className}</AppText>
        <TouchableWithoutFeedback onPress={onPress}>
          <View
            style={[styles.subContainer, { backgroundColor: containerColor }]}
          >
            <Image style={styles.image} source={lastMessageUserImage} />
            <AppText textColor={textColor}>{lastMessageUsername}: </AppText>
            <AppText
              style={styles.inLineText}
              textColor={textColor}
              numberOfLines={1}
            >
              {lastMessage}
            </AppText>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    width: "100%",
    height: 80,
  },
  subContainer: {
    flexDirection: "row",
    backgroundColor: "purple",
    alignItems: "center",
    borderRadius: 20,
    height: 55,
    width: "100%",
  },
  classTitle: {
    marginLeft: 10,
    fontSize: 22,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 35,
    marginLeft: 10,
    marginRight: 10,
  },
  inLineText: {
    width: "60%",
  },
});

export default ClassCard;
