import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const PrevNextBtn = () => {
  return (
    <ScrollView horizontal>
      <View style={{ padding: 5 }}>
        <AntDesign name="downcircleo" size={24} color="white" />
      </View>
      <View style={{ padding: 5 }}>
        <AntDesign name="upcircleo" size={24} color="white" />
      </View>
    </ScrollView>
  );
};

export default PrevNextBtn;

const styles = StyleSheet.create({
  aboutScreenBtnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
