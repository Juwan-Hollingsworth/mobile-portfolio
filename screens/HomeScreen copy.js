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
  Dimensions,
} from "react-native";
import React from "react";
import SocialMediaBtns from "../components/SocialMediaBtns";
import avatar from "../assets/avatar.png";

import NextPageBtn from "../components/NextPageBtn";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useMediaQuery } from "react-responsive";
import Footer from "../components/Footer";
import { animate, motion as m } from "framer-motion";

const { width, height } = Dimensions.get("window"); // Get the screen dimensions

console.log("w", width);
console.log("h", height);

const getViewPortClass = (w, h) => {
  if (w >= 1400 && h >= 500) {
    return "lgScreen";
  } else {
    return "styles";
  }
};

const Home = "Home";
const cstyles = getViewPortClass(width, height);
console.log(cstyles);

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToAbout = () => {
    navigation.navigate("About");
  };

  return (
    <m.ScrollView
      style={styles.homescreenContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      {/* header area + btns  */}

      {/* homescreen content  */}
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.homeScreenTitle}>Juwan Hollingsworth</Text>
        </View>

        <View style={styles.homescreenImageContainer}>
          <Image style={styles.homeScreenImage} source={avatar} />
        </View>
        <View style={styles.lowerTitles}>
          <Text style={styles.homeScreenSubtitle}>Full Stack Developer</Text>
          <Text style={styles.homeScreenLocationtitle}>Atlanta, GA 📍</Text>
        </View>
      </View>
      <View style={styles.homeScreenBtnContainer}>
        <SocialMediaBtns />
   
      </View>
      <Footer currentPage={Home} />
    </m.ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   
  },
  lowerTitles: {
    marginTop: -10,
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
    fontSize: "5vw", // Adjust size based on viewport
    textAlign: "center",
  },
  homescreenImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: height * 0.02, // Adjust spacing based on viewport
  },
  homeScreenImage: {
    width: "50vh",
    height: "50vh",
    // Adjust size based on percentage of container width
    resizeMode: "contain",
  },
  homeScreenSubtitle: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: "3vw",
    textAlign: "center",
    // marginBottom: height * 0.02,
  },
  homeScreenLocationtitle: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: "3vw",
    textAlign: "center",
    // marginBottom: height * 0.02,
  },
  homeScreenBtnContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
// https://www.youtube.com/watch?time_continue=55&v=FdrEjwymzdY&embeds_referring_euri=https%3A%2F%2Fwww.bing.com%2F&embeds_referring_origin=https%3A%2F%2Fwww.bing.com&source_ve_path=Mjg2NjY&feature=emb_logo
