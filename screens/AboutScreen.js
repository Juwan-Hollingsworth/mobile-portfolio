import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import GitHubCalendar from "react-github-calendar";



//imports 
import React from "react";
import Footer from "../components/Footer";
import { animate, motion as m } from "framer-motion";
import { FontAwesome5 } from "@expo/vector-icons";
//assets
import juwan from "../assets/juwan.jpg";
import vivaticket from "../assets/vivaticket.png";
import cox from "../assets/cox.jpg";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import mongo from "../assets/mongo.png";
import js from "../assets/js.png";


// Define screen css
const { width, height } = Dimensions.get('window');
const isLargeScreen = width > 768; //large screen arg
const smallScreenContainerSize = Math.min(width * 0.8)
const smallScreenPadding = 10;


const HomeScreen = () => {

  return (
    <View style={styles.container}>
    <ScrollView
      style={styles.homescreenContainer}
      contentContainerStyle={styles.scrollViewContent}
    >
      {/* header area + btns  */}

      {/* homescreen content  */}
      <View style={styles.contentContainer}>
      <View style={isLargeScreen ? styles.galleryRowLg : styles.galleryRowsm}>

  <View style={styles.aboutCard_LeftTop} >
            <View>
            <View style={styles.imageContainer}>
      <Image source={juwan} style={styles.aboutImage} />
    </View>
              <Text style={styles.aboutText}>Juwan Hollingsworth</Text>
              <Text style={[styles.aboutText, { marginBottom: 5 }]}>
                Jhollingsworth5@student.clayton.edu
              </Text>
              <TouchableOpacity>
                <View style={styles.resumeBtn}>
                  <Text style={styles.resumeText}>Download Resume</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
  <View style={styles.aboutCard_RightTop} >
  <View style={styles.aboutCard_RightContainer}>
  <Text style={styles.aboutText}>About Me</Text>
                <View style={styles.workStatus}>
                  <View>
                    <FontAwesome5 name="check-circle" size={24} color="lime" />
                    
                  </View>
                  <Text style={styles.aboutText}>Open to work</Text>
                 
                </View>
                <Text style={styles.aboutText}>
                  I'm Juwan, a full-stack software engineer with a Bachelor's in
                  Computer Science. I'm passionate about creating innovative
                  digital experiences and products for the web. <br /> <br />
                  My journey began in high school when I ran an online business
                  and saw the power of digital transformation. This sparked my
                  interest in web development, and I taught myself Dreamweaver
                  and continued to build my coding skills.
                  <br /> <br /> During my studies at Clayton State University,
                  I've had the opportunity to work with renowned companies in
                  Atlanta, including COX Automotive, MailChimp, and Spark
                  Social. These experiences have honed my skills in creating
                  accessible and inclusive digital solutions.
                  <br /> <br /> Today, I leverage the latest technologies and
                  best practices to deliver high-quality, user-centric web
                  applications that drive business success.
                </Text>
              
  </View>
</View>
    </View>
    <View style={isLargeScreen ? styles.galleryRowLg : styles.galleryRowsm}>

  <View style={styles.aboutCard_LeftBottom} >
  <View style={styles.boxTitleLB}>
                <Text> Github</Text>
                <View style={styles.ghContainer}>
                  <GitHubCalendar
                    username="Juwan-Hollingsworth"
                    colorScheme="dark"
                    blockSize={6}
                    year={2023}
                  />
                </View>
              </View>
  
  </View>
  <View style={styles.aboutCard_RightBottom} >
  <View>
  <View style={styles.boxContainer3}>
                <View>
                  <View style={styles.rolesInnerContainer}>
                  <View >

                  </View>
                      {/* latest roles */}
                    <View>
                      <Text style={styles.aboutText}>Latest Roles</Text>
                      {/* first section */}
                      <View style={styles.rolesContainer}>
                   
                    <Image source={vivaticket} style={styles.roleIcon} />
                        <View>
                          <Text style={styles.aboutText}>
                            IT Support Specialist
                          </Text>
                          <Text style={styles.aboutText}>Vivaticket</Text>
                        </View>

               
                   
                     
                      
                        
                      </View>
                      {/* first section */}
                      <View style={styles.rolesContainer}>
                        <Image source={cox} style={styles.roleIcon} />
                        <View>
                          <Text style={styles.aboutText}>
                            Software Engineer Intern
                          </Text>
                          <Text style={styles.aboutText}>Vivaticket</Text>
                        </View>
                      </View>
                    </View>
                    {/* certifications */}
                    <View>
                      <Text style={styles.aboutText}>Certifications</Text>
                      {/* first section */}
                      <View style={styles.rolesContainer}>
                        <Image source={vivaticket} style={styles.roleIcon} />
                        <View>
                          <Text style={styles.aboutText}>
                            IT Support Specialist
                          </Text>
                          <Text style={styles.aboutText}>Vivaticket</Text>
                        </View>
                      </View>
                      {/* first section */}
                      <View style={styles.rolesContainer}>
                        <Image source={cox} style={styles.roleIcon} />
                        <View>
                          <Text style={styles.aboutText}>
                            Software Engineer Intern
                          </Text>
                          <Text style={styles.aboutText}>Vivaticket</Text>
                        </View>
                      </View>
                    </View>
                    {/* skills */}
                    <View>
                      <Text style={styles.aboutText}>Skills & Technologies</Text>
                      <View>
                        <View>
                          <View style={styles.rolesContainer}>
                            {/* first section */}
                            <View>
                              <Image source={react} style={styles.skillIcon} />

                              <Text style={styles.aboutText}>React Native</Text>
                            </View>
                            <View>
                              <Image source={js} style={styles.skillIcon} />

                              <Text style={styles.aboutText}>Javascript</Text>
                            </View>
                            {/* second section */}
                          </View>
                          <View style={styles.rolesContainer}>
                            <View>
                              <Image source={node} style={styles.skillIcon} />

                              <Text style={styles.aboutText}>NodeJS</Text>
                            </View>
                            <View>
                              <Image source={mongo} style={styles.skillIcon} />

                              <Text style={styles.aboutText}>MongoDB</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View> </View>

  </View>

    </View>
      </View>
   
      <Footer currentPage={"About"} />
    </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#152238",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "100px",
   
  },
  lowerTitles: {
    marginTop: -10,
  },
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
    fontSize: "5vw", // Adjust size based on viewport
    textAlign: "center",
  },
  homescreenImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: height * 0.02, // Adjust spacing based on viewport
  },
  homeScreenImage: {
    width: "50vh",
    height: "50vh",
    // Adjust size based on percentage of container width
    resizeMode: "contain",
  },
  homeScreenSubtitle: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: "3vw",
    textAlign: "center",
    // marginBottom: height * 0.02,
  },
  homeScreenLocationtitle: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: "3vw",
    textAlign: "center",
    // marginBottom: height * 0.02,
  },
  homeScreenBtnContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
  },

  //text 

  aboutText: {
    padding: 5,
    color: "white",
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

  //Card Styling -LT
  aboutCard_LeftTop: {
   width: isLargeScreen ? width * 0.30 : smallScreenContainerSize,
    height: isLargeScreen ? width * 0.22 : smallScreenContainerSize,
    backgroundColor: "rgb(87, 80, 115)",
    backgroundColor: "rgb(0, 77, 106)",
    borderRadius: 10,
    margin: isLargeScreen ? 2 : smallScreenPadding,
    borderWidth: 6,  
    borderColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  aboutImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white",
    marginBottom: 10,
  },
  aboutText: {
    padding: 5,
    color: "white",
    textAlign: 'center',
  },
  resumeBtnContainer: {
    alignSelf: 'center',
  },
  resumeBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  resumeText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },

 //Card Styling -RT
  aboutCard_RightTop:{
    width: isLargeScreen ? width * 0.60 : smallScreenContainerSize,
    height: isLargeScreen ? width * 0.22 : smallScreenContainerSize,
    // width: width * 0.60,
    // height: width * 0.22,
    backgroundColor: "#rgb(58, 61, 94)",
    borderRadius: 10,
   
   margin: isLargeScreen ? 2 : smallScreenPadding,
    borderWidth: 6,  
    borderColor: "white", 
  },

  aboutCard_RightContainer:{
    padding:"10px"
  },
  workStatus:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  

 //Card Styling -LB

  aboutCard_LeftBottom:{
    // width: width * 0.40,
    // height: width * 0.08,
    // backgroundColor: "#rgb(233, 200, 34)",
    // borderRadius: 10,
    // borderWidth: 6,  
    // borderColor: "white", 

    width: isLargeScreen ? width * 0.40 : smallScreenContainerSize,
    // height: isLargeScreen ? width * 0.16 : smallScreenContainerSize,
    margin: isLargeScreen ? 2 : smallScreenPadding,
    backgroundColor: "rgb(233, 200, 34)",
    borderRadius: 10,
    borderWidth: 6,  
    borderColor: "white",
    overflow: 'hidden',
  },

  ghContainer: {
    // width: '70%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxTitleLB: {
    // width: wp("70%"),
    height: "200px",
    borderRadius: 10,
    margin: 10,
    // backgroundColor: "rgba(227,229,255,255)",
  },
 //Card Styling -RB
   aboutCard_RightBottom: {
    width: isLargeScreen ? width * 0.50 : smallScreenContainerSize,
    // height: isLargeScreen ? width * 0.16 : smallScreenContainerSize,
    margin: isLargeScreen ? 2 : smallScreenPadding,
    backgroundColor: "rgb(87, 80, 115)",
    borderRadius: 10,
    margin: 2,
    borderWidth: 6,
    borderColor: "white",
    padding: 10,
  },
  boxContainer3: {
    flex: 1,
    padding: 10,
  },
  rolesInnerContainer: {
    flexDirection: isLargeScreen ? "row" : "col",
    justifyContent: "space-between",
    alignItems: !isLargeScreen ? "center" : ""
  },
  column: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  rolesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
 


  roleIcon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
   
  },
  roleTextContainer: {
    flex: 1,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  skillItem: {
    alignItems: "center",
    width: '45%',
    marginBottom: 10,
  },
  skillIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "white",
    marginBottom: 5,
  },
  aboutText: {
    color: "white",
    fontSize: 12,
    textAlign: 'center',
  },

});
// https://www.youtube.com/watch?time_continue=55&v=FdrEjwymzdY&embeds_referring_euri=https%3A%2F%2Fwww.bing.com%2F&embeds_referring_origin=https%3A%2F%2Fwww.bing.com&source_ve_path=Mjg2NjY&feature=emb_logo
