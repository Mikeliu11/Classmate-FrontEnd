import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import * as Yup from "yup";

import AppText from "../components/AppText";
import Line from "../components/Line";
import Screen from "../components/Screen";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  CircleButton,
} from "../components/forms";
import colors from "../config/colors";
import UserBubble from "../components/UserBubble";
import ClassCard from "../components/ClassCard";

const fakeUsers = [
  { userid: 1, username: "James", image: require("../assets/user1.jpg") },
  { userid: 2, username: "Harry", image: require("../assets/user2.jpg") },
  { userid: 3, username: "Albert", image: require("../assets/user3.jpg") },
  { userid: 4, username: "Joe", image: require("../assets/user4.jpg") },
  { userid: 5, username: "Rebecca", image: require("../assets/user5.jpg") },
  { userid: 6, username: "Mike", image: require("../assets/user6.jpg") },
];

const fakeClasses = [
  {
    classid: 1,
    className: "math136",
    classCapacity: 122,
    lastMessage: "I can't wait to see what that's about.",
    lastMessageUsername: "Harry",
    lastMessageUserImage: require("../assets/user2.jpg"),
    containerColor: colors.primary,
    textColor: colors.white,
  },
  {
    classid: 2,
    className: "econ101",
    classCapacity: 80,
    lastMessage: "Tomorrow's weather is going to be great",
    lastMessageUsername: "Joe",
    lastMessageUserImage: require("../assets/user4.jpg"),
    containerColor: colors.primary,
    textColor: colors.white,
  },
  {
    classid: 3,
    className: "cs230",
    classCapacity: 45,
    lastMessage: "They opened up a new Tims down the street, amazing!",
    lastMessageUsername: "Harry",
    lastMessageUserImage: require("../assets/user2.jpg"),
    containerColor: colors.secondary,
    textColor: colors.black,
  },
  {
    classid: 4,
    className: "co250",
    classCapacity: 26,
    lastMessage: "Cool stuff huh.",
    lastMessageUsername: "Rebecca",
    lastMessageUserImage: require("../assets/user5.jpg"),
    containerColor: colors.primary,
    textColor: colors.white,
  },
];

function AppScreen(props) {
  const handleSubmit = () => {};

  return (
    <Screen>
      <View style={styles.container}>
        <AppText style={styles.title}>Classmate</AppText>
        <View style={styles.friendsList}>
          <FlatList
            data={fakeUsers}
            keyExtractor={(fakeUsers) => fakeUsers.userid.toString()}
            renderItem={({ item }) => (
              <UserBubble
                username={item.username}
                image={item.image}
                onPress={null}
              />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Line style={styles.line} />
        <FlatList
          data={fakeClasses}
          keyExtractor={(fakeClasses) => fakeClasses.classid.toString()}
          renderItem={({ item }) => (
            <ClassCard
              className={item.className}
              classCapacity={item.classCapacity}
              lastMessage={item.lastMessage}
              lastMessageUserImage={item.lastMessageUserImage}
              lastMessageUsername={item.lastMessageUsername}
              containerColor={item.containerColor}
              textColor={item.textColor}
            />
          )}
          style={styles.classList}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 32,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  line: { marginTop: 10 },
  subtitle: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 50,
  },
  friendsList: {
    backgroundColor: "white",
    height: 100,
    marginTop: 30,
  },
  classList: {
    width: "95%",
    // backgroundColor: "yellow",
    paddingTop: 30,
  },
});

export default AppScreen;
