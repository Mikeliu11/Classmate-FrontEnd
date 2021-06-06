import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import UserMessage from "./UserMessage";

function ChatBox({ data, style, user_id }) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      inverted
      data={data}
      keyExtractor={(data) => data.message_id.toString()}
      renderItem={({ item }) => (
        <UserMessage
          message={item.message}
          username={item.name}
          user_id={user_id}
          sender_id={item.sender_id}
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
