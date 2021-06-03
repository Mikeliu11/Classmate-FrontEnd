import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import AppText from "../components/AppText";
import CircleButtonFormless from "../components/CircleButtonFormless";
import CircleButton from "../components/forms/CircleButton";
import Line from "../components/Line";
import Screen from "../components/Screen";

function WelcomeScreen({ navigation }) {
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <AppText style={styles.title}>Classmate</AppText>
        <Line style={styles.line} />
        <AppText style={styles.subtitle}>
          The app that connect students together
        </AppText>
        <CircleButtonFormless
          title="sign in"
          style={styles.button}
          textStyle={styles.buttonText}
          handleSubmit={handleLogin}
        />
        <TouchableOpacity onPress={handleRegister} activeOpacity={0.8}>
          <AppText style={styles.registerText}>
            register with my uwaterloo email
          </AppText>
        </TouchableOpacity>
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
  logo: {
    height: 150,
    width: 190,
    marginTop: 60,
  },
  title: {
    fontSize: 35,
    marginTop: 15,
  },
  line: { marginTop: 20 },
  subtitle: {
    fontSize: 20,
    marginTop: 30,
  },
  button: {
    marginTop: 150,
  },
  buttonText: {
    fontSize: 30,
  },
  registerText: {
    textDecorationLine: "underline",
    marginTop: 40,
  },
});

export default WelcomeScreen;
