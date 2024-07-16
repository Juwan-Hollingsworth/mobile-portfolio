import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,

} from "react-native";
import React from "react";

import HeaderBtns from "../components/HeaderBtns";

import PrevNextBtn from "../components/PrevNextBtn";


const AboutScreen = () => {
  return (
    <View style={styles.mainContainer}>
    <View style={styles.headingContainer}>
    <Text style={styles.heading}>Portfolio</Text>
    </View>
   
      {/* button gallery */}
      <View style={styles.btnContainer} id="btnContainter">
        <TouchableOpacity style={styles.btn}>Show All</TouchableOpacity>
        <TouchableOpacity style={styles.btn}>Javascript</TouchableOpacity>
        <TouchableOpacity style={styles.btn}>C++</TouchableOpacity>
        <TouchableOpacity style={styles.btn}>Python</TouchableOpacity>
        <TouchableOpacity style={styles.btn}>MERN</TouchableOpacity>
        <TouchableOpacity style={styles.btn}>Web3</TouchableOpacity>
        <TouchableOpacity style={styles.btn}>AWS</TouchableOpacity>
      </View>
      {/* portfolio gallery grid */}
      <View style={styles.row}>
      

      </View>
      <View>A</View>
      <View>B</View>
      <View>C</View>
     





    </View> //end
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
 
  mainContainer: {
    backgroundColor: "red",
    // backgroundColor: "#152238",
    flex: 1,
  },
  headingContainer: {  
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 36,
    flexWrap: 'wrap',

  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 8,
  },
  btn: {
    padding: 12,
  },
  row:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
 
});
