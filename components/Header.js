import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import HeaderBtns from "../components/HeaderBtns";

const Header = () => {
  return (
    <View>
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
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  homescreenContainer: {
    // backgroundColor: "#152238",
    backgroundColor: "red",
    flexDirection: "row", // Horizontal layout

    paddingHorizontal: 20, // Add padding horizontally
    paddingTop: 40, // Adjust top padding to accommodate status bar
    height: 80, // Set header height
    width: "100%", // Take up full width of the screen
  },
});
