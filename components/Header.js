import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import HeaderBtns from "../components/HeaderBtns";

const Header = () => {
  return (
    <View style={styles.homescreenContainer}>
      {/* header area + btns  */}
      <View style={styles.headerArea}>
        <HeaderBtns
          title="Github"
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
    padding: 15,
  },
  homescreenContainer: {
    backgroundColor: "#152238",
    // backgroundColor: "red",
  },
});
