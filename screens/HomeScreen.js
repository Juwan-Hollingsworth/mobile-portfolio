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
import HeaderBtns from "../components/HeaderBtns";
import NextPageBtn from "../components/NextPageBtn";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

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

const cstyles = getViewPortClass(width, height);
console.log(cstyles);

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToAbout = () => {
    navigation.navigate("About");
  };

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
      <View style={[cstyles.contentContainer, { padding: width * 0.05 }]}>
        <Text style={styles.homeScreenTitle}>Juwan Hollingsworth</Text>
        <View style={styles.homescreenImageContainer}>
          <Image style={styles.homeScreenImage} source={avatar} />
        </View>

        <Text style={styles.homeScreenSubtitle}>Full Stack Developer</Text>
        <Text style={styles.homeScreenLocationtitle}>Atlanta, GA 📍</Text>
      </View>
      <View style={styles.homeScreenBtnContainer}>
        <SocialMediaBtns />
      </View>
      <View style={styles.homeScreenBtnContainer}>
        <TouchableOpacity onPress={goToAbout}>
          <AntDesign name="downcircleo" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: width * 0.04, // Adjust size based on viewport
    textAlign: "center",
    marginBottom: height * 0.02, // Adjust spacing based on viewport
  },
  homescreenImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height * 0.02, // Adjust spacing based on viewport
  },
  homeScreenImage: {
    width: width * 0.4,
    height: width * 0.4, // Adjust size based on percentage of container width
    resizeMode: "contain",
  },
  homeScreenSubtitle: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: width * 0.04,
    textAlign: "center",
    marginBottom: height * 0.02,
  },
  homeScreenLocationtitle: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: width * 0.035,
    textAlign: "center",
    marginBottom: height * 0.02,
  },
  homeScreenBtnContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height * 0.02,
  },
});
const lgScreen = StyleSheet.create({
  homeScreenImage: {
    width: width * 0.8,
    height: width * 0.8, // Adjust size based on percentage of container width
    resizeMode: "contain",
  },
});
