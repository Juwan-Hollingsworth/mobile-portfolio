import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { animate, motion as m } from "framer-motion";
import juwanc from "../assets/contactImg.JPG";
import Footer from "../components/Footer";

const AboutScreen = () => {
  const Contact = "Contact";

  const onPress = () => {};

  return (
    <m.ScrollView
      style={styles.homescreenContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      {/* header area + btns  */}
      <View>
        <Text style={styles.contactTitle}>Let's Connect 📶</Text>
      </View>
      <View>
        <View>
          {" "}
          <Image source={juwanc} style={styles.aboutImage} />
        </View>
        <View style={styles.contactContainer}>
          <Pressable
            style={[styles.buttonContact, styles.buttonMargin]}
            onPress={onPress}
          >
            <Text style={styles.contactText}>Email 📩</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonContact, styles.buttonMargin]}
            onPress={onPress}
          >
            <Text style={styles.contactText}>LinkedIn 👨🏾‍💻</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonContact, styles.buttonMargin]}
            onPress={onPress}
          >
            <Text style={styles.contactText}>Github 👾</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonContact, styles.buttonMargin]}
            onPress={onPress}
          >
            <Text style={styles.contactText}>Spark ⚡️</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Footer />
      </View>

      {/* homescreen content  */}
    </m.ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  homescreenContainer: {
    backgroundColor: "#152238",
    flex: 1,
  },
  contactContainer: {
    flex: 3,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonContact: {
    backgroundColor: "transparent",
    borderWidth: 3,
    borderColor: "white",
    marginHorizontal: 20, // Adjusted margin for equal spacing
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30, // Adjusted paddingHorizontal for spacing
  },
  buttonMargin: {
    marginBottom: 40, // Spacing between buttons
  },
  contactTitle: {
    color: "white",
    textAlign: "center",
    fontSize: "2.5vw",
    fontFamily: "lato-Regular",
    fontWeight: "400",
    marginBottom: 40,
  },

  contactText: {
    color: "white",
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: "2.5vw",

    // paddingLeft: 50,
    // paddingRight: 50,
  },
  aboutImage: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white",
  },
});

// // <View>
// <Text style={styles.contactScreenSubtitle}>Let's Connect 📶</Text>{" "}
// </View>
// <View style={styles.allLinksContainer}>
//   <View style={styles.linkContainer}>
//     <TouchableOpacity>
//       <Text style={styles.contactScreenText}>Email 📩</Text>{" "}
//     </TouchableOpacity>
//   </View>
//   <View style={styles.linkContainer}>
//     <TouchableOpacity>
//       <Text style={styles.contactScreenText}>LinkedIn 👨🏾‍💻</Text>{" "}
//     </TouchableOpacity>
//   </View>
//   <View style={styles.linkContainer}>
//     <TouchableOpacity>
//       <Text style={styles.contactScreenText}>Github 👾</Text>{" "}
//     </TouchableOpacity>
//   </View>
//   <View style={styles.linkContainer}>
//     <TouchableOpacity>
//       <Text style={styles.contactScreenText}>Spark ⚡️</Text>{" "}
//     </TouchableOpacity>
//   </View>
// </View>

// <View style={styles.homeScreenBtnContainer}>
//   <View>
//     <Footer currentPage={Contact} />
//     <Text style={styles.contactScreenTextSm}>Back to the top</Text>
//   </View>
// // </View>
