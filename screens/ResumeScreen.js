import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Pressable,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { WebView } from "react-native-webview";
import { NativeWebView } from "../components/NativeWebView";

import HeaderBtns from "../components/HeaderBtns";

import PrevNextBtn from "../components/PrevNextBtn";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Footer from "../components/Footer";

const ResumeScreen = () => {
  // allow navigation to screens when clicked.
  const navigation = useNavigation();

  const goToProjects = () => {
    navigation.navigate("Projects");
  };

  const goToContact = () => {
    navigation.navigate("Contact");
  };

  const Resume = "Resume";
  return (
    <ScrollView style={styles.homescreenContainer}>
      {/* header area + btns  */}
      <View style={styles.headerArea}>
        <HeaderBtns
          title="Freelance"
          onPress={() => console.log("Button pressed")}
        />
        <HeaderBtns
          title="Resume"
          onPress={() => console.log("Button pressed")}
        />
      </View>
      {/* homescreen content  */}
      <View>
        <View style={styles.resumeContainer}>
          <NativeWebView target="https://en.m.wikipedia.org" />
        </View>

        {/* <MyInlineWeb /> */}
      </View>
      <View style={styles.homeScreenBtnContainer}></View>
      <View>
        <Footer currentPage={Resume} />
      </View>
      <View></View>
    </ScrollView>
  );
};

export default ResumeScreen;

const styles = StyleSheet.create({
  headerArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  homescreenContainer: {
    backgroundColor: "#152238",
    flex: 1,
  },
  homeScreenTitle: {
    fontFamily: "libre baskerville",
    fontWeight: "400",
    fontStyle: "italic",
    color: "white",
    fontSize: "6vw", //change size of title based on viewport
    textAlign: "center",
  },
  homescreenImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeScreenImage: {
    width: "80%",
    height: "80%", // Adjust size based on percentage of container width
    aspectRatio: 1, // Maintain aspect ratio
    resizeMode: "contain",
    marginTop: 10, // Adjust top margin as needed
    marginBottom: 10,
  },
  homeScreenSubtitle: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: "3vw",
    textAlign: "center",
  },
  homeScreenLocationtitle: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: "2.5vw",
    textAlign: "center",
  },
  homeScreenBtnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resumeContainer: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
