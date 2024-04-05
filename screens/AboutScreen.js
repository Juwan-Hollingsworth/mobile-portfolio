import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { Dimensions } from "react-native";

import juwan from "../assets/juwan.jpg";
import HeaderBtns from "../components/HeaderBtns";

import { useNavigation } from "@react-navigation/native";

import Footer from "../components/Footer";

const AboutScreen = () => {
  const About = "About";
  return (
    <View
      style={styles.aboutContainer}
      contentContainerStyle={styles.containerCenter}
    >
      <View>
        <View>
          <View style={styles.aboutImageContainer}>
            <Image source={juwan} style={styles.aboutImage} />
          </View>
          <View style={styles.aboutTextContainer}>
            <Text style={styles.aboutText}>
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
        <View>
          <Footer currentPage={About} />
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  aboutContainer: {
    backgroundColor: "#152238",
    flex: 6,
  },

  aboutImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  aboutImage: {
    width: "400px",
    height: "400px", // Adjust size based on percentage of container width
    // Maintain aspect ratio
    borderRadius: 10,
    marginTop: 10, // Adjust top margin as needed
    marginBottom: 10,
  },
  containerCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  aboutText: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: "1.5vw",
    textAlign: "center",
    width: "60%",
  },

  aboutTextContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

// https://www.youtube.com/watch?v=uZF5DiMshFY&t=153s
