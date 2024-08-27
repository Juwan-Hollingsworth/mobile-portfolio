import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  FlatList,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import ProjectData from "../components/Modal/ProjectData";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

const { width, height } = Dimensions.get('window');
const isLargeScreen = width > 768; //large screen arg


const ProjectScreen = () => {
  const Projects = "Projects";

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.projectTitle}>
          <Text style={styles.projectTitleText}>
            Projects I've worked on 👾
          </Text>
          <Text style={styles.projectSubTitleText}>
            A collection of impactful projects that I have worked on throughout
            my software engineering journey. From innovative web applications to
            robust software solutions, this portfolio showcases my expertise and
            the value I bring to the table.
          </Text>
        </View>
        <FlatList
          horizontal={isLargeScreen}
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
      <Footer currentPage={Projects} />
    </View>
  );
};

export default ProjectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#152238",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start", 
    paddingTop: hp("5%"), 
  },
  projectTitle: {
    width: wp(80),
    marginBottom: hp("3%"), 
  },
  projectTitleText: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    color: "white",
    fontSize: wp("3%"),
    textAlign: "center",
    marginBottom: hp("1%"), 
  },
  projectSubTitleText: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    color: "white",
    fontSize: wp("2%"),
    textAlign: "center",
  },
  projectGrid: {
    alignItems: "center",
    justifyContent: "center",
  },
});