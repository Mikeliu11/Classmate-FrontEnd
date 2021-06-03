import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import * as Yup from "yup";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import CircleButton from "../components/forms/CircleButton";
import Line from "../components/Line";
import Screen from "../components/Screen";
import { ErrorMessage, AppForm, AppFormField } from "../components/forms";
import colors from "../config/colors";
import HomeNavigator from "../navigation/HomeNavigator";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(2).max(12).label("Username"),
  email: Yup.string().required().email("Invalid Email").label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen({ navigation }) {
  const handleSubmit = () => {
    navigation.navigate("Home");
  };

  return (
    <Screen>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <AppText style={styles.title}>Classmate</AppText>
          <Line style={styles.line} />
          <AppText style={styles.subtitle}>registration</AppText>

          <AppForm
            initialValues={{ username: "", email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <ErrorMessage
              error="Invalid email and/or password."
              visible={false}
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="user"
              name="username"
              placeholder=" Username"
              textContentType="username"
              containerStyle={styles.inputContainer}
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="UWaterloo Email"
              textContentType="emailAddress"
              containerStyle={styles.inputContainer}
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
              containerStyle={styles.inputContainer}
            />
            <View style={styles.buttonContainer}>
              <CircleButton
                title="continue"
                style={styles.button}
                textStyle={styles.buttonText}
              />
            </View>
          </AppForm>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Welcome")}
          >
            <View style={styles.backButton}>
              <Ionicons name="chevron-back-sharp" size={38} color="black" />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    flex: 1,
  },
  logo: {
    height: 100,
    width: 120,
    marginTop: 40,
  },
  title: {
    fontSize: 35,
    marginTop: 5,
  },
  line: { marginTop: 10 },
  subtitle: {
    fontSize: 25,
    marginTop: 10,
  },
  backButton: {
    alignSelf: "flex-start",
    bottom: 20,
    left: 20,
    position: "absolute",
  },
  button: {
    marginBottom: 20,
    backgroundColor: colors.primary,
  },
  buttonText: {
    fontSize: 30,
    color: colors.tertiary,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  inputContainer: {
    backgroundColor: colors.tertiary,
  },
});

export default RegisterScreen;
