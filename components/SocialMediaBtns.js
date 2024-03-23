import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const SocialMediaBtns = () => {
  return (
    <View style={styles.smBtnsContainer}>
      <View style={styles.smBtn}>
        <AntDesign name="linkedin-square" size={24} color="white" />
      </View>
      <View style={styles.smBtn}>
        <AntDesign name="github" size={24} color="white" />
      </View>
      <View style={styles.smBtn}>
        <AntDesign name="youtube" size={24} color="white" />
      </View>
    </View>
  );
};

export default SocialMediaBtns;

const styles = StyleSheet.create({
  smBtnsContainer: {
    flexDirection: "row",
  },
  smBtn: {
    padding: 10,
  },
});
