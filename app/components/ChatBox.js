import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import UserMessage from "./UserMessage";

function ChatBox({ data, style }) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      inverted
      data={data}
      keyExtractor={(data) => data.username.toString()}
      renderItem={({ item }) => (
        <UserMessage
          message={item.message}
          username={item.username}
          image={item.image}
        />
      )}
      style={[styles.container, style]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "blue",
    width: "100%",
  },
});

export default ChatBox;
