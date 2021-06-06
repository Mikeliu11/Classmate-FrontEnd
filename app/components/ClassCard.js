import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import AppText from "./AppText";

function ClassCard({ className, containerColor, textColor, onPress }) {
  return (
    <>
      <View style={styles.container}>
        <AppText style={styles.classTitle}>{className}</AppText>
        <TouchableOpacity
          onPress={onPress}
          style={{ width: "100%" }}
          activeOpacity={0.8}
        >
          <View
            style={[styles.subContainer, { backgroundColor: containerColor }]}
          >
            <Image
              style={styles.image}
              source={require("../assets/user4.jpg")}
            />
            <AppText style={{ color: textColor }}>User: </AppText>
            <AppText
              style={styles.inLineText}
              style={{ color: textColor }}
              numberOfLines={1}
            >
              Last user message
            </AppText>
          </View>
        </TouchableOpacity>
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
    // backgroundColor: "purple",
    alignItems: "center",
    borderRadius: 10,
    height: 55,
    width: "100%",
  },
  classTitle: {
    marginLeft: 12,
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
