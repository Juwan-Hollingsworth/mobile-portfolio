import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
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
      <View>
        <Text style={styles.contactScreenSubtitle}>Let's Connect 📶</Text>{" "}
      </View>
      <View style={styles.allLinksContainer}>
        <View style={styles.linkContainer}>
          <TouchableOpacity>
            <Text style={styles.contactScreenText}>Email 📩</Text>{" "}
          </TouchableOpacity>
        </View>
        <View style={styles.linkContainer}>
          <TouchableOpacity>
            <Text style={styles.contactScreenText}>LinkedIn 👨🏾‍💻</Text>{" "}
          </TouchableOpacity>
        </View>
        <View style={styles.linkContainer}>
          <TouchableOpacity>
            <Text style={styles.contactScreenText}>Github 👾</Text>{" "}
          </TouchableOpacity>
        </View>
        <View style={styles.linkContainer}>
          <TouchableOpacity>
            <Text style={styles.contactScreenText}>Spark ⚡️</Text>{" "}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.homeScreenBtnContainer}>
        <View>
          <View style={{ padding: 5 }}>
            <TouchableOpacity
              style={styles.contactBtnContainer}
              onClick={() => {}}
            >
              <AntDesign name="upcircleo" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.contactScreenTextSm}>Back to the top</Text>
        </View>
      </View>
    </m.ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  allLinksContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  linkContainer: {
    height: 30,
    width: "25%",
    marginHorizontal: 10,
    backgroundColor: "transparent",

    border: "1px solid #fff",
    borderRadius: "5px",
    transition: "background-color 0.3s, color 0.3s",
  },
  contactBtnContainer: {
    border: "2px solid white", // Border with white color
    backgroundColor: "red",
  },
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
