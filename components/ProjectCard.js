import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

// Function to truncate the description
const truncateDescription = (str, maxLength) => {
  if (typeof str === "string" && str.length > maxLength) {
    return str.substring(0, maxLength - 3) + "...";
  } else {
    return str;
  }
};

const ProjectCard = ({ image, title, tag, description }) => {
  return (
    <View style={styles.projCardContainer}>
      {/* <Image source={image} style={styles.projCardImage} /> */}
      <View style={styles.projCardImage}></View>
      <Text style={styles.projCardTitle}>{title}</Text>
      <Text style={styles.projCardDescription}>{tag}</Text>
      <Text style={styles.projCardDescription}>
        {truncateDescription(description, 250)}
      </Text>
      <button>Button</button>
    </View>
  );
};

export default ProjectCard;

const styles = StyleSheet.create({
  projCardContainer: {
    width: 250,
    height: 250,
  },
  projCardTitle: {
    color: "white",
  },
  projCardDescription: {
    color: "white",
  },
  projCardImage: {
    width: "100%",
    height: 50,
    backgroundColor: "red",
  },
});
