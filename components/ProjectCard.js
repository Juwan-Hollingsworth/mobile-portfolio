import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";

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
          onPress={() => setModalVisible(false)} // Close modal on container click
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
    width: 250,
    height: 250,
    backgroundColor: "#f0f0f0",
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
  },
  projCardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
  modal: {
    width: "70%",
    height: "60%",
    backgroundColor: "white",
    borderRadius: 10,
  },
});
