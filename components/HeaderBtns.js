import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const HeaderBtns = (props) => {
  const { onPress, title = null, color = "#e9c822" } = props;
  return (
    //create pressable button
    <Pressable style={styles.headerButton} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default HeaderBtns;

const styles = StyleSheet.create({
  headerButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "#e9c822",
    width: 125, //add wxh
    height: 40,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
