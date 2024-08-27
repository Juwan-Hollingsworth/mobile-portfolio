import { StyleSheet, Text, View, Image,Dimensions, ScrollView } from "react-native";
import React from "react";
import Footer from "../components/Footer";

const { width, height } = Dimensions.get('window');
const isLargeScreen = width > 768; //large screen arg

const AboutDraft = () => {
  return (
    <View>
    <ScrollView style={styles.homescreenContainer}>
    <View style={isLargeScreen ? styles.galleryRowLg : styles.galleryRowsm}>
  <View style={styles.aboutCard} >
  </View>
  <View style={styles.aboutCard} >
  </View>
  <View style={styles.aboutCard} >
  </View>
  <View style={styles.aboutCard} >
  </View>

    </View>
    <View style={isLargeScreen ? styles.galleryRowLg : styles.galleryRowsm}>
  <View style={styles.aboutCard} >
  </View>
  <View style={styles.aboutCard} >
  </View>
  <View style={styles.aboutCard} >
  </View>
  <View style={styles.aboutCard} >
  </View>

    </View>
      
     
    </ScrollView>
    <Footer currentPage={"About"} />
    </View>
  );
};

export default AboutDraft;

const styles = StyleSheet.create({
  homescreenContainer: {
    backgroundColor: "green",
    // backgroundColor: "#152238",
    flex: 1,
  },
  //Responsive styles
  galleryRowLg: {
    flexDirection: 'row',
    flexWrap: 'wrap',
     alignItems: "center",
     justifyContent:'center',
    
  },
  galleryRowsm: {
    flexDirection: 'column',

  },
  aboutCard:{
    width: width * 0.22,
    height: width * 0.22,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
   
    margin: 2,
    borderWidth: 6,  
    borderColor: "white", 
  }

});

// https://grubersjoe.github.io/react-github-calendar/
// https://github.com/grubersjoe/react-activity-calendar
