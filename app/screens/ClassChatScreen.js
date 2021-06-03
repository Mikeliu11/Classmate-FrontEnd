import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import Line from "../components/Line";
import ChatBox from "../components/ChatBox";
import { AppForm, AppFormField } from "../components/forms";
import AppButton from "../components/AppButton";
import SendMessageButton from "../components/SendMessageButton";
import AppText from "../components/AppText";

const fakeMessages = [
  {
    username: "Charley",
    message:
      "Yep, look at this very long text and how well this chat bubble component handles this long sentence with no weird issues",
    image: require("../assets/user1.jpg"),
  },
  {
    username: "Hanna",
    message: "This is the best app ever right?",
    image: require("../assets/user2.jpg"),
  },
  {
    username: "Rebecca",
    message: "I love react native",
    image: require("../assets/user3.jpg"),
  },
];

function ClassChatScreen({ route, navigation }) {
  const data = route.params;
  const handleSubmit = () => {};

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.topContainer}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
            <Ionicons name="chevron-back-sharp" size={32} color="black" />
          </TouchableWithoutFeedback>
          <AppText style={styles.titleText}>math233</AppText>
        </View>
        <Line style={styles.line} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ChatBox data={fakeMessages} style={styles.chatContainer} />
        </TouchableWithoutFeedback>

        <View style={styles.bottomContainer}>
          <AppForm initialValues={{ message: "" }} onSubmit={handleSubmit}>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="message"
              placeholder="Message..."
              containerStyle={styles.inputContainer}
            />
            <SendMessageButton />
          </AppForm>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // backgroundColor: "green",
    flex: 1,
    paddingBottom: 5,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "yellow",
    width: "100%",
    paddingVertical: 10,
    paddingLeft: 10,
  },
  titleText: {
    fontSize: 25,
    marginLeft: 10,
  },
  line: {},
  chatContainer: {
    // backgroundColor: "pink",
  },
  bottomContainer: {
    flexDirection: "row",
    // backgroundColor: "yellow",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  inputContainer: {
    width: "60%",
    marginTop: 10,
  },
});

export default ClassChatScreen;
