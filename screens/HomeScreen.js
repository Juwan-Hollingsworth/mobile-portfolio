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

const HomeScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "#152238", flex: 1 }}>
      <View>
        <Button
          style={{ color: "white" }}
          title="Button 1"
          onPress={() => {}}
        />
        <Button
          style={{ color: "white" }}
          title="Button 2"
          onPress={() => {}}
        />
        <Text style={{ color: "white" }}>Juwan Hollingsworth</Text>
        <Image style={{ width: 25, height: 25 }} source={avatar} />
        <Text style={{ color: "white" }}>Full Stack Developer</Text>
        <Text style={{ color: "white" }}>Atlanta, GA 📍</Text>
      </View>{" "}
      <SocialMediaBtns />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
