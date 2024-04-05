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
    <View style={styles.headerArea}>
      <View style={styles.resumeContainer}>
        <View style={styles.webViewContainer}>
          {" "}
          <NativeWebView target="https://cheatingpanda.s3.amazonaws.com/juwan_swe329.pdf" />
        </View>

        <View>
          <Footer currentPage={Resume} />
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default ResumeScreen;

const styles = StyleSheet.create({
  headerArea: {
    backgroundColor: "red",
    height: hp("10%"),
    paddingBottom: 10,
  },
  resumeContainer: {
    backgroundColor: "#152238",
    // backgroundColor: "blue",
    height: hp("90%"),
    alignItems: "center",
    justifyContent: "center",
  },

  viewStyle: {
    height: "50px",
  },
  webViewContainer: {
    flex: 1,
    height: hp("100%"),
    backgroundColor: "red",
    width: "80%", // Adjust as needed
  },
});
