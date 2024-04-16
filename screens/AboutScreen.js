import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Footer from "../components/Footer";
import { FlatList } from "react-native";
import juwan from "../assets/juwan.jpg";
import { FontAwesome5 } from "@expo/vector-icons";
import GitHubCalendar from "react-github-calendar";
import vivaticket from "../assets/vivaticket.png";
import cox from "../assets/cox.jpg";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import mongo from "../assets/mongo.png";
import js from "../assets/js.png";

const AboutDraft = () => {
  return (
    <View style={styles.homescreenContainer}>
      <View style={styles.totBoxContainer}>
        <View>
          {/* ROW 1 */}
          <View style={styles.newContainer}>
            <View>
              {" "}
              <View style={styles.boxContainerLeft}>
                <Image source={juwan} style={styles.aboutImage} />
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
            <View>
              <View style={styles.boxContainer2}>
                <Text style={styles.bioText}>About Me</Text>
                <View style={styles.workStatus}>
                  <View>
                    <FontAwesome5 name="check-circle" size={24} color="lime" />
                  </View>
                  <Text style={styles.bioText}>Open to work</Text>
                </View>
                <Text style={styles.bioText}>
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
          {/* ROW 2 */}
          <View style={styles.newContainer}>
            <View>
              <View style={styles.boxTitle}>
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
            <View>
              <View style={styles.boxContainer3}>
                <View>
                  <View style={styles.rolesInnerContainer}>
                    <View>
                      <Text style={styles.bioText}>Latest Roles</Text>
                      {/* first section */}
                      <View style={styles.rolesContainer}>
                        <Image source={vivaticket} style={styles.roleIcon} />
                        <View>
                          <Text style={styles.bioText}>
                            IT Support Specialist
                          </Text>
                          <Text style={styles.bioText}>Vivaticket</Text>
                        </View>
                      </View>
                      {/* first section */}
                      <View style={styles.rolesContainer}>
                        <Image source={cox} style={styles.roleIcon} />
                        <View>
                          <Text style={styles.bioText}>
                            Software Engineer Intern
                          </Text>
                          <Text style={styles.bioText}>Vivaticket</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.bioText}>Skills & Technologies</Text>
                      <View>
                        <View>
                          <View style={styles.rolesContainer}>
                            {/* first section */}
                            <View>
                              <Image source={react} style={styles.skillIcon} />

                              <Text style={styles.bioText}>React Native</Text>
                            </View>
                            <View>
                              <Image source={js} style={styles.skillIcon} />

                              <Text style={styles.bioText}>Javascript</Text>
                            </View>
                            {/* second section */}
                          </View>
                          <View style={styles.rolesContainer}>
                            <View>
                              <Image source={node} style={styles.skillIcon} />

                              <Text style={styles.bioText}>NodeJS</Text>
                            </View>
                            <View>
                              <Image source={mongo} style={styles.skillIcon} />

                              <Text style={styles.bioText}>MongoDB</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Footer currentPage={"About"} />
    </View>
  );
};

export default AboutDraft;

const styles = StyleSheet.create({
  homescreenContainer: {
    backgroundColor: "#152238",
    flex: 1,
  },
  boxTitle: {
    width: wp("40%"),
    height: "200px",
    backgroundColor: "yellow",
    borderRadius: 10,
    margin: 10,
    // backgroundColor: "rgba(227,229,255,255)",
  },
  boxContainerLeft: {
    width: wp("20%"),
    height: "300px",
    backgroundColor: "#004D6A",
    // backgroundColor: "#004E6D",

    borderRadius: 10,
    margin: 10,
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
  },
  boxContainer2: {
    width: wp("60%"),
    height: "300px",
    backgroundColor: "#3A3D5E",
    borderRadius: 10,
    margin: 10,
    padding: 20,
  },
  boxContainer3: {
    width: wp("40%"),
    height: "200px",
    backgroundColor: "#575073",
    borderRadius: 10,
    margin: 10,

    padding: 20,
  },
  totBoxContainer: {
    flexDirection: "row",
    padding: 20,
    height: hp("80%"), // 70% of height device screen
    width: wp("100%"),
    alignItems: "center",
    justifyContent: "center",
  },

  aboutImage: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white",
    padding: 10,
  },
  workStatus: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 10,
  },
  resumeBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
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
  rolesContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  roleIcon: {
    width: "50px",
    height: "50px",
    borderRadius: 10,
  },
  skillIcon: {
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white",
    marginHorizontal: "15px",
  },
  ghContainer: {
    width: "100%",
    height: "25px",
    flex: 1,
    alignItems: "center", // Center the GitHubCalendar horizontally
    justifyContent: "center",
  },
  aboutText: {
    padding: 5,
    color: "white",
  },
  bioText: {
    padding: 5,
    color: "white",
  },
  newContainer: {
    flexDirection: "row",
  },
  rolesInnerContainer: {
    flexDirection: "row",
  },
});

// https://grubersjoe.github.io/react-github-calendar/
// https://github.com/grubersjoe/react-activity-calendar
