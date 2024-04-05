import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HeaderBtns from "../components/HeaderBtns";
import PrevNextBtn from "../components/PrevNextBtn";
import { useState } from "react";
import ProjectData from "../components/Modal/ProjectData";
import Modal from "../components/Modal/Modal";
import ProjectCard from "../components/ProjectCard";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Footer from "../components/Footer";

const ProjectScreen = () => {
  const navigation = useNavigation();

  const goToAbout = () => {
    navigation.navigate("About");
  };

  const goToResume = () => {
    navigation.navigate("Resume");
  };

  const Projects = "Projects";
  //portfolio logic
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <ScrollView style={styles.homescreenContainer}>
      {/* homescreen content  */}
      <View style={styles.projectScreenBtnContainer}>
        <View>
          <View></View>
          <View>
            <Text style={styles.projectScreenText}>
              Projects I've worked on 👾
            </Text>
            <Text style={styles.projectScreenText}>
              A collection of impactful projects that I have worked on
              throughout my software engineering journey. From innovative web
              applications to robust software solutions, this portfolio
              showcases my expertise and the value I bring to the table.
            </Text>

            {/* Row 1 */}

            <View style={styles.projectGrid}>
              {ProjectData.slice(0, 3).map((project) => (
                <ProjectCard
                  key={project.id}
                  image={{ uri: project.projectPic }}
                  title={project.title}
                  skills={project.skills}
                  description={project.description}
                />
              ))}
            </View>
            <View style={styles.projectGrid}>
              {ProjectData.slice(3, 6).map((project) => (
                <ProjectCard
                  key={project.id}
                  image={{ uri: project.projectPic }}
                  title={project.title}
                  skills={project.skills}
                  description={project.description}
                />
              ))}
            </View>
            {/* <View style={styles.projectGrid}>
              {ProjectData.slice(6, 9).map((project) => (
                <ProjectCard
                  key={project.id}
                  image={{ uri: project.projectPic }}
                  title={project.title}
                  skills={project.skills}
                  description={project.description}
                />
              ))}
            </View> */}

            {/* Project 1 Button */}
            {/* <button
              style={styles.projectViewBtn}
              onClick={() =>
                handleOpenModal(ProjectData.find((p) => p.id === 1))
              }
            >
              View Project Details
            </button> */}
            {/* Open Modal  */}
            {selectedProject && (
              <Modal
                title={selectedProject.title}
                description={selectedProject.description}
                skills={selectedProject.skills}
                projectLink={selectedProject.projectLink}
                githubRepo={selectedProject.ghRepo}
                projectPic={selectedProject.projectPic}
                onClose={handleCloseModal}
              />
            )}
          </View>
        </View>
        <Footer currentPage={Projects} />
      </View>
    </ScrollView>
  );
};

export default ProjectScreen;

const styles = StyleSheet.create({
  homeScreenBtnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: "6vw", //change size of title based on viewport
    textAlign: "center",
  },
  aboutImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  aboutScreenImage: {
    width: "80%",
    height: "80%", // Adjust size based on percentage of container width
    aspectRatio: 1, // Maintain aspect ratio
    resizeMode: "contain",
    marginTop: 10, // Adjust top margin as needed
    border: "rounded",
  },
  homeScreenSubtitle: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: "3vw",
    textAlign: "center",
  },
  homeScreenLocationtitle: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: "2.5vw",
    textAlign: "center",
  },
  projectScreenText: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: "2.5vw",
    textAlign: "center",
  },
  projectScreenBtnContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  projectContainer: {
    width: 250,
    height: 250,
    backgroundColor: "red",
    // margin: 5,
  },
  projectViewBtn: {
    width: 100,
  },
  projectGrid: {
    width: "100%",
    flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "center",
  },
});
