import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window"); // Get the screen dimensions

//take in the current page as a prop
const Footer = ({ currentPage }) => {
  const navigation = useNavigation();
  //define pages
  const pages = ["Home", "About", "Projects", "Resume", "Contact"];

  const goToNextPage = () => {
    //get the currentIndex of the page
    const currentIndex = pages.indexOf(currentPage);
    //given the pages current index increment the value by 1
    const nextPage = pages[currentIndex + 1];
    //if there is a next page...navigation to it
    if (nextPage) {
      navigation.navigate(nextPage);
    }
  };
  // const goToAbout = () => {
  //   navigation.navigate("About");
  // };

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        onPress={goToNextPage}
        style={styles.footerBtnContainer}
      >
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

/**
 * Create a button compontent that takes page driection as props
 * Render these buttons in the footer
 * Or render footer component in every screen
 * Pass the next & prev page to btns
 */
