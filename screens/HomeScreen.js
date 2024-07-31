import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,

} from "react-native";
import React from "react";
import Footer from "../components/Footer";

import HeaderBtns from "../components/HeaderBtns";

import PrevNextBtn from "../components/PrevNextBtn";


const AboutScreen = () => {
  return (
    <View style={styles.mainContainer}>
    <View style={styles.portfolioHeadingContainer}>
    <Text style={styles.portfolioHeading}>Portfolio</Text>
    </View>
   
      {/* button gallery */}
      <View style={styles.btnContainer} id="btnContainter">
        <TouchableOpacity style={styles.portfolioBtn}>Show All</TouchableOpacity>
        <TouchableOpacity style={styles.portfolioBtn}>Javascript</TouchableOpacity>
        <TouchableOpacity style={styles.portfolioBtn}>C++</TouchableOpacity>
        <TouchableOpacity style={styles.portfolioBtn}>Python</TouchableOpacity>
        <TouchableOpacity style={styles.portfolioBtn}>MERN</TouchableOpacity>
        <TouchableOpacity style={styles.portfolioBtn}>Web3</TouchableOpacity>
        <TouchableOpacity style={styles.portfolioBtn}>AWS</TouchableOpacity>
      </View>
      {/* portfolio gallery grid */}
      <View style={styles.row}>
      

      </View>
      <View style={styles.galleryRow}>
      <View  style={styles.galleryCol}>
        <View style={styles.galleryContent}>1</View>
      </View>
      <View  style={styles.galleryCol}>
        <View style={styles.galleryContent}>2</View>
      </View>
      <View  style={styles.galleryCol}>
        <View style={styles.galleryContent}>3</View>
      </View>
    
    
      
      </View>
      <View>B</View>
      <View>C</View>
     




      <Footer currentPage={"About"} />
    </View> //end
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
 
  mainContainer: {
    // backgroundColor: "red",
    backgroundColor: "#152238",
    flex: 1,
  },
  portfolioHeadingContainer: {  
    justifyContent: 'center',
    alignItems: 'center',
  },
  portfolioHeading: {
    fontSize: 36,
    flexWrap: 'wrap',
    color: 'white'

  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 8,
  },
  portfolioBtn: {
    padding: 12,
    color: 'white',
  },
  row:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  galleryRow:{
 
    flexDirection: 'row',
    flexWrap: 'wrap',
     alignItems: "center",
     justifyContent:'center',
  },
  galleryCol:{
    flexDirection:'column',
    flexWrap: 'wrap',
    width: '30%', 
    padding: '10px',
    color: 'yellow',
   

  },
  galleryContent:{
    backgroundColor: 'white',
    height: '500px',
    borderRadius: 10,

  }
});
