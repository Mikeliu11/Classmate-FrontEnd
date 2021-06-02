import React from "react";
import { View, StyleSheet, Image } from "react-native";
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

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(2).label("Username"),
  email: Yup.string().required().email("Invalid Email").label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  const handleSubmit = () => {};

  return (
    <Screen>
      <View style={styles.container}>
        <AppText style={styles.title}>Classmate</AppText>
        <Line style={styles.line} />
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
});

export default RegisterScreen;
