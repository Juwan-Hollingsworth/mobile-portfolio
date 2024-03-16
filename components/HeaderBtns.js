import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const HeaderBtns = (props) => {
  const { onPress, title = null, color = "#e9c822" } = props;
  return (
    //create pressable button
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default HeaderBtns;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#e9c822",
    width: 125, //add wxh
    height: 40,
    paddingHorizontal: 16, // Add horizontal padding
    paddingVertical: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
