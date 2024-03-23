import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import React from "react";
import { animate, motion as m } from "framer-motion";

import HeaderBtns from "../components/HeaderBtns";

import { AntDesign } from "@expo/vector-icons";

const AboutScreen = () => {
  return (
    <m.ScrollView
      style={styles.homescreenContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
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
      <View style={styles.contactContainer}>
        <Text style={styles.contactScreenSubtitle}>Let's Connect 📶</Text>
        {/* <Button>
          <Text style={styles.contactScreenText}>Email 📩</Text>
        </Button> */}

        <Text style={styles.contactScreenText}>Email 📩</Text>
        <Text style={styles.contactScreenText}>LinkedIn 👨🏾‍💻</Text>
        <Text style={styles.contactScreenText}>Github 👾</Text>
        <Text style={styles.contactScreenText}>Spark ⚡️</Text>
      </View>
      <View style={styles.homeScreenBtnContainer}>
        <View>
          <View style={{ padding: 5 }}>
            <AntDesign name="upcircleo" size={24} color="white" />
          </View>
          <Text style={styles.contactScreenTextSm}>Back to the top</Text>
        </View>
      </View>

      <View></View>
    </m.ScrollView>
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
  contactScreenSubtitle: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: "3vw",
    textAlign: "center",
  },
  contactScreenText: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: "2.5vw",
    textAlign: "center",
  },
  contactScreenTextSm: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: "1.5vw",
    textAlign: "center",
  },

  homeScreenBtnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contactBtnContainer: {
    border: "2px rounded",
    width: "25%",
  },
});
