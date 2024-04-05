import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { animate, motion as m } from "framer-motion";

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
      <View style={styles.contactContainer}>
        <Pressable style={styles.buttonContact} onPress={onPress}>
          <Text style={styles.contactText}>Email 📩</Text>
        </Pressable>
        <Pressable style={styles.buttonContact} onPress={onPress}>
          <Text style={styles.contactText}>LinkedIn 👨🏾‍💻</Text>
        </Pressable>
        <Pressable style={styles.buttonContact} onPress={onPress}>
          <Text style={styles.contactText}>Github 👾</Text>
        </Pressable>
        <Pressable style={styles.buttonContact} onPress={onPress}>
          <Text style={styles.contactText}>Spark ⚡️</Text>
        </Pressable>
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
    borderWidth: "3px",
    borderColor: "white",

    margin: 6,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    paddingLeft: "5%",
    paddingRight: "5%",
    margin: 25,
  },
  contactTitle: {
    color: "white",
    textAlign: "center",
    fontSize: "2.5vw",
    fontFamily: "lato-Regular",
    fontWeight: "400",
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
