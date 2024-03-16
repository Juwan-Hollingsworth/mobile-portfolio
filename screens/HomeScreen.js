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
        <Text style={{ color: "white" }}>Juwan Hollingsworth</Text>
        <Image style={{ width: 25, height: 25 }} source={avatar} />
        <Text style={{ color: "white" }}>Full Stack Developer</Text>
        <Text style={{ color: "white" }}>Atlanta, GA 📍</Text>
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
  },
});
