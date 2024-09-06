import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  Modal,
} from "react-native";

// Define screen css
const { width, height } = Dimensions.get('window');
const isLargeScreen = width > 768; //large screen arg
const smallScreenContainerSize = Math.min(width * 0.8)
const smallScreenPadding = 10;

const ProjectCard = ({ image, title, skills, tag, description }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity
      style={styles.projCardContainer}
      onPress={() => setModalVisible(true)}
    >
      <Image source={image} style={styles.projCardImage} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modal}>
            <Image source={image} style={styles.modalImage} />
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{title}</Text>
              <Text style={styles.modalSkills}>{skills}</Text>
              <Text style={styles.modalDescription}>{description}</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  );
};

export default ProjectCard;

const styles = StyleSheet.create({
  projCardContainer: {
    width: isLargeScreen ? 250 : smallScreenContainerSize,
    height: isLargeScreen ? 250 : smallScreenContainerSize,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
   
    margin: 10,
    borderWidth: 6,  
    borderColor: "white", 
  },
  projCardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    overflow: "hidden",
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    width: "70%",
    height: "60%",
    backgroundColor: "white",
    borderRadius: 10,
  },
  modalImage: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
    borderRadius: 10,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalSkills: {
    fontStyle: "italic",
    marginBottom: 10,
  },
  modalDescription: {
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
  },
  closeButtonText: {
    color: "white",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
});