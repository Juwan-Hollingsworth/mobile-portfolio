import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const Footer = ({ currentPage }) => {
  const navigation = useNavigation();
  const pages = ["Home", "About", "Projects", "Resume", "Contact"];
  const currentIndex = pages.indexOf(currentPage)
  const isFirstPage = currentIndex === 0
  const isLastPage = currentIndex === pages.length -1

  const goToNextPage = () => {
    const nextPage = pages[currentIndex + 1];
    if (nextPage) {
      navigation.navigate(nextPage);
    }
  };

  const goToPreviousPage = () => {
    const previousPage = pages[currentIndex - 1];
    if (previousPage) {
      navigation.navigate(previousPage);
    }
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.iconContainer}>
        {!isFirstPage && (
          <TouchableOpacity onPress={goToPreviousPage} style={styles.footerBtnContainer}>
            <AntDesign name="leftcircleo" size={24} color="white" />
          </TouchableOpacity>
        )}
        {!isLastPage && (
          <TouchableOpacity onPress={goToNextPage} style={styles.footerBtnContainer}>
            <AntDesign name="rightcircleo" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
    paddingVertical: 10,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerBtnContainer: {
    padding: 15,
  },
});