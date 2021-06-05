import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableWithoutFeedback,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import * as Yup from "yup";
import { Ionicons } from "@expo/vector-icons";

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
import AddClassButton from "../components/AddClassButton";
import courseApi from "../api/course";
import useApi from "../hooks/useApi";
import useAuth from "../auth/useAuth";
import SendMessageButton from "../components/SendMessageButton";
import WelcomeScreen from "./WelcomeScreen";

const fakeUsers = [
  { userid: 1, username: "James", image: require("../assets/user1.jpg") },
  { userid: 2, username: "Harry", image: require("../assets/user2.jpg") },
  { userid: 3, username: "Albert", image: require("../assets/user3.jpg") },
  { userid: 4, username: "Joe", image: require("../assets/user4.jpg") },
  { userid: 5, username: "Rebecca", image: require("../assets/user5.jpg") },
  { userid: 6, username: "Mike", image: require("../assets/user6.jpg") },
];

function AppScreen({ navigation }) {
  const getCoursesApi = useApi(courseApi.getCourses);
  const joinCourse = useApi(courseApi.joinCourse);

  const { user, logout } = useAuth();

  useEffect(() => {
    getCoursesApi.request();
  }, []);

  const handleSubmit = async (text, { resetForm }) => {
    Keyboard.dismiss();
    resetForm();
    if (text == "") return;
    await joinCourse.request(text.message);
    await getCoursesApi.request();
  };

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
        <ActivityIndicator
          animating={getCoursesApi.loading}
          size="large"
          color="grey"
          style={{ top: 200, position: "absolute" }}
        />

        <FlatList
          data={getCoursesApi.data}
          keyExtractor={(course) => course.courseName.toString()}
          renderItem={({ item }) => (
            <ClassCard
              className={item.courseName}
              containerColor={colors.grey}
              textColor={item.black}
              onPress={() => navigation.navigate("ClassChat", item)}
            />
          )}
          style={styles.classList}
        />
        {joinCourse.error && (
          <AppText style={{ color: "red" }}>
            {" "}
            Class does not exist or you already have joined
          </AppText>
        )}
        <View style={styles.bottomContainer}>
          <AppForm initialValues={{ message: "" }} onSubmit={handleSubmit}>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="message"
              placeholder="Join an existing class"
              containerStyle={styles.inputContainer}
            />
            <AddClassButton style={styles.addButton} />
          </AppForm>
        </View>

        <TouchableWithoutFeedback
          onPress={() => {
            logout();
          }}
        >
          <Ionicons
            name="exit"
            size={35}
            color={"grey"}
            style={{ position: "absolute", right: 22, top: 10 }}
          />
        </TouchableWithoutFeedback>
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
    paddingTop: 20,
  },
  addButton: {},
  bottomContainer: {
    flexDirection: "row",
    // backgroundColor: "yellow",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 300,
  },
  inputContainer: {
    width: "60%",
    marginTop: 10,
    marginRight: 10,
  },
});

export default AppScreen;
