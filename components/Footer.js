import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window"); // Get the screen dimensions

const Footer = () => {
  const navigation = useNavigation();

  const goToAbout = () => {
    navigation.navigate("About");
  };

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity onPress={goToAbout} style={styles.footerBtnContainer}>
        <AntDesign name="downcircleo" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#152238",
    // backgroundColor: "red",
  },
  footerBtnContainer: {
    padding: 15,
  },
});
