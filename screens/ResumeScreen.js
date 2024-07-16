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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import cheerio from "react-native-cheerio/lib/cheerio";

const ResumeScreen = () => {
  const Resume = "Resume";
  return (
    <View style={styles.container}>
    <View style={styles.contentContainer}>
      <View style={styles.webViewContainer}>
      <NativeWebView target="https://cheatingpanda.s3.amazonaws.com/juwan_swe329.pdf" 


      />
      </View>
    </View>
    <Footer currentPage={Resume} />
  </View>
  );
};

export default ResumeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#152238",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  webViewContainer: {
    width: wp("80%"),
    height: hp("70%"),
  },
  nativeWebView: {
    flex: 1,
  },
});