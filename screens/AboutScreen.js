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
import juwan from "../assets/juwan.jpg";
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

      <View style={styles.homeScreenBtnContainer}>
        <View>
          <View>
            <Image source={juwan} style={styles.aboutScreenImage} />
          </View>
          <View>
            <Text style={styles.aboutScreenText}>
              Hi there, I'm Juwan, a software engineer and college graduate with
              a bachelor's in Computer Science. I'm passionate about creating
              things that live on the web, and I've had some pretty cool
              experiences along the way. My journey began back in high school
              when I ran an online sneaker business and discovered first hand
              how digital implementation can transform a business. From there, I
              taught myself Dreamweaver and continued to build my coding skills.
              While studying biology and computer science at Clayton State
              University I've been fortunate enough to work with some big names
              in Atlanta such as COX Automotive, MailChimp, and Spark Social.
              These days, my primary focus is on creating digital experiences
              and products that are accessible and inclusive for a wide range of
              clients.
            </Text>
          </View>
        </View>
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
  aboutImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  aboutScreenImage: {
    width: "80%",
    height: "80%", // Adjust size based on percentage of container width
    aspectRatio: 1, // Maintain aspect ratio
    resizeMode: "contain",
    marginTop: 10, // Adjust top margin as needed
    border: "rounded",
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
  aboutScreenText: {
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
