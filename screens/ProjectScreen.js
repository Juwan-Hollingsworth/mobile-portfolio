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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FlatList } from "react-native-web";
import { Dimensions } from "react-native";

const ProjectScreen = () => {
  const { width } = Dimensions.get("window");

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
    <View style={styles.headerArea}>
      <View style={styles.projectContainer}>
        <View style={styles.projectTitle}>
          <Text style={styles.projectTitleText}>
            {" "}
            Projects I've worked on 👾
          </Text>
          <Text style={styles.projectSubTitleText}>
            {" "}
            A collection of impactful projects that I have worked on throughout
            my software engineering journey. From innovative web applications to
            robust software solutions, this portfolio showcases my expertise and
            the value I bring to the table.
          </Text>
        </View>
        <View style={styles.galleryContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.projectGrid}
            data={ProjectData.slice(0, 5)}
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

        <View>
          <Footer currentPage={Projects} />
        </View>
      </View>
    </View>
  );
};

export default ProjectScreen;

const styles = StyleSheet.create({
  headerArea: {
    // backgroundColor: "red",
    height: hp("10%"),
  },
  projectContainer: {
    backgroundColor: "#152238",
    // backgroundColor: "red",
    height: hp("100%"),
    alignItems: "center",
  },
  projectTitle: {
    backgroundColor: "#152238",
  },
  projectTitleText: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: "2.5vw",
    textAlign: "center",
  },
  projectSubTitleText: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: "25px",
    textAlign: "center",
    width: wp(80),
  },
  galleryContainer: {
    height: hp("65%"),
    width: wp("100%"),
    backgroundColor: "#152238",
    alignItems: "center",
    justifyContent: "center",
  },
  projectGrid: {
    alignItems: "center",
    justifyContent: "center",
  },
});
