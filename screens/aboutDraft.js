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

const AboutDraft = () => {
  return (
    <View style={styles.homescreenContainer}>
      <View style={styles.totBoxContainer}>
        <View>
          <TouchableOpacity>
            <View style={styles.boxContainerLeft}>
              <Image source={juwan} style={styles.aboutImage} />
              <Text>Juwan Hollingsworth</Text>
              <Text>Jhollingsworth5@student.clayton.edu</Text>
              <TouchableOpacity>
                <View style={styles.resumeBtn}>
                  <Text style={styles.resumeText}>Download Resume</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.boxTitle}>
              <Text> Github</Text>
              <View style={styles.ghContainer}>
                <GitHubCalendar
                  username="Juwan-Hollingsworth"
                  hideMonthLabels
                  colorScheme="dark"
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <View style={styles.boxContainer2}>
            <Text>About Me</Text>
            <View style={styles.workStatus}>
              <View>
                <FontAwesome5 name="check-circle" size={24} color="black" />
              </View>
              <Text>Open to work</Text>
            </View>
            <Text>
              Hi there, I'm Juwan, a software engineer and college graduate with
              a bachelor's in Computer Science. I'm passionate about creating
              things that live on the web, and I've had some pretty cool
              experiences along the way. My journey began back in high school
              when I ran an online sneaker business and discovered first hand
              how digital implementation can transform a business. From there, I
              taught myself Dreamweaver and continued to build my coding skills.
              While studying biology and computer science at Clayton State
              University I've been fortunate enough to work with some big names
              in Atlanta such as COX Automotive, MailChimp, and Spark Social.
              These days, my primary focus is on creating digital experiences
              and products that are accessible and inclusive for a wide range of
              clients.
            </Text>
          </View>
          <View style={styles.boxContainer3}>
            <Text>Latest Roles</Text>
            <View>
              {/* first section */}
              <View style={styles.rolesContainer}>
                <Image source={juwan} style={styles.roleIcon} />
                <View>
                  <Text>IT Support Specialist</Text>
                  <Text>Vivaticket</Text>
                </View>
              </View>
              {/* first section */}
              <View style={styles.rolesContainer}>
                <Image source={juwan} style={styles.roleIcon} />
                <View>
                  <Text>IT Support Specialist</Text>
                  <Text>Vivaticket</Text>
                </View>
              </View>
              {/* main apps */}
              <View>
                <Text>Skills & Technologies</Text>
                <View>
                  {/* first section */}
                  <View style={styles.rolesContainer}>
                    <View>
                      <Image source={juwan} style={styles.skillIcon} />

                      <Text>Javascript</Text>
                    </View>
                    <View>
                      <Image source={juwan} style={styles.skillIcon} />

                      <Text>Javascript</Text>
                    </View>
                    <View>
                      <Image source={juwan} style={styles.skillIcon} />

                      <Text>Javascript</Text>
                    </View>
                    <View>
                      <Image source={juwan} style={styles.skillIcon} />

                      <Text>Javascript</Text>
                    </View>
                    <View>
                      <Image source={juwan} style={styles.skillIcon} />

                      <Text>Javascript</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <Footer />
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
    // backgroundColor: "purple",
    borderRadius: 10,
    margin: 10,
    backgroundColor: "rgba(227,229,255,255)",
  },
  boxContainerLeft: {
    width: wp("40%"),
    height: "300px",
    backgroundColor: "#004E6D",
    borderRadius: 10,
    margin: 10,
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
  },
  boxContainer2: {
    width: wp("40%"),
    height: "250px",
    backgroundColor: "#3A3D5E",
    borderRadius: 10,
    margin: 10,
  },
  boxContainer3: {
    width: wp("40%"),
    height: "250px",
    backgroundColor: "yellow",
    borderRadius: 10,
    margin: 10,
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
    paddingHorizontal: 2,
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
    marginBottom: 10,
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
  },
});

// https://grubersjoe.github.io/react-github-calendar/
// https://github.com/grubersjoe/react-activity-calendar
