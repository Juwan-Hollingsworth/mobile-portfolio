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
import juwanc from "../assets/juwan2.jpg";
import Footer from "../components/Footer";

const AboutScreen = () => {
  const Contact = "Contact";

  const onPress = () => {};

  return (
    <View style={styles.homescreenContainer}>
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
      <View style={styles.zz}>
        <View>
          <View>
            {" "}
            <Image source={juwanc} style={styles.aboutImage} />
          </View>
        </View>
        <View>
          <View style={styles.contactBtns}>
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
      </View>

    
     
      <Footer currentPage={Contact} />
      {/* homescreen content  */}
    </m.ScrollView>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  homescreenContainer: {
    backgroundColor: "#152238",
    flex: 1,
  },
  contactBtns: {
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
    width: 300,
    height: 500,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white",
  },
  contactContainer: {
    flexDirection: "row",
  },
  zz: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
