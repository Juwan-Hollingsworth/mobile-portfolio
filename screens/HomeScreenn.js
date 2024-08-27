import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
  useWindowDimensions, //get the dimensions for the viewport 

} from "react-native";
import React from "react";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import ProjectData from "../components/Modal/ProjectData";

const { width, height } = Dimensions.get('window');
const isLargeScreen = width > 768; //large screen arg




const AboutScreen = () => {
 

  return (
    
    <ScrollView style={styles.scrollViewContent}>

   

    
    <View>
    <View style={styles.portfolioHeadingContainer}>
    <Text style={styles.portfolioHeading}>Portfolio</Text>
    <Text style={styles.portfolioSubtitle}>A collection of professional and personal projects I have worked on over the span of my career. This list is ever growing and can be followed more in depth on Github but I try to add the most signficant ones here.</Text>
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
   
      <View style={[styles.galleryRow, isLargeScreen ? styles.galleryRowLg : styles.galleryRowsm]}>
     
      <FlatList
          
          contentContainerStyle={[styles.galleryRow, isLargeScreen ? styles.galleryRowLg : styles.galleryRowsm]}
          data={ProjectData.slice(0, 3)}
          renderItem={({ item }) => (
            <ProjectCard
              key={item.id}
              image={{ uri: item.projectPic }}
              title={item.title}
              skills={item.skills}
              description={item.description}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
    
    
    
      
      </View>
      <View>B</View>
      <View>C</View>
     



<View style={styles.galleryFooter}></View>
      
    </View> //end
    <Footer currentPage={"About"} />
    </ScrollView>
    
    
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: "#152238",
  },
 

  portfolioHeadingContainer: {  
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  portfolioHeading: {
    fontSize: width * 0.04,
    flexWrap: 'wrap',
    color: 'white'

  },
  portfolioSubtitle: {
    fontSize: width * 0.01, 
    color: 'white',
    width: '70%',
    textAlign:"center",
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

  galleryRow:{
 
    flexDirection: 'row',
    flexWrap: 'wrap',
     alignItems: "center",
     justifyContent:'center',
  },
  galleryCard:{
    flexDirection:'column',
    flexWrap: 'wrap',
    width: '30%', 
    padding: '10px',
    color: 'yellow',
   

  },
  galleryContentBorder:{
    backgroundColor: 'white',
    height: width * 0.2,
    borderRadius: 10,
    overflow:"hidden",
    padding: 25,

  },
  galleryContent:{
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', 
    width: '100%',

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
  galleryCardLg: {
    flexDirection:'column',
    flexWrap: 'wrap',
    width: '30%', 
    padding: '10px',
    color: 'yellow',
  

  },
  galleryCardsm: {
    flexDirection:'row',

  },
  galleryFooter:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }
});
