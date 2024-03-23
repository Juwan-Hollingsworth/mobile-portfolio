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
} from "react-native";
import React from "react";
import SocialMediaBtns from "../components/SocialMediaBtns";
import avatar from "../assets/avatar.png";
import HeaderBtns from "../components/HeaderBtns";
import NextPageBtn from "../components/NextPageBtn";
import PrevNextBtn from "../components/PrevNextBtn";

const AboutScreen = () => {
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
        <Text style={styles.homeScreenSubtitle}>Text Here</Text>
        <Text style={styles.homeScreenLocationtitle}>Atlanta, GA 📍</Text>
      </View>
      <View style={styles.homeScreenBtnContainer}></View>
      <View>
        <PrevNextBtn />
      </View>
      <View></View>
    </ScrollView>
  );
};

export default AboutScreen;

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
});
