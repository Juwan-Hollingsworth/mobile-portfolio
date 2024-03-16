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

const HomeScreen = () => {
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
        <Text style={styles.homeScreenTitle}>Juwan Hollingsworth</Text>
        <View style={styles.homescreenImageContainer}>
          <Image style={styles.homeScreenImage} source={avatar} />
        </View>

        <Text style={styles.homeScreenSubtitle}>Full Stack Developer</Text>
        <Text style={styles.homeScreenLocationtitle}>Atlanta, GA 📍</Text>
      </View>
      <SocialMediaBtns />
    </ScrollView>
  );
};

export default HomeScreen;

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
    fontSize: 64,
    textAlign: "center",
  },
  homescreenImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeScreenImage: {
    width: 400,
    height: 400,
  },
  homeScreenSubtitle: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: 32,
    textAlign: "center",
  },
  homeScreenLocationtitle: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
});
