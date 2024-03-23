import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Modal = ({
  title,
  description,
  skills,
  projectLink,
  projectPic,
  ghRepo,
  onClose,
}) => {
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.modalText}>{title}</Text>
      <Text style={styles.modalText}>{description}</Text>
      <Text style={styles.modalText}>{skills}</Text>
      <Text style={styles.modalText}>{projectLink}</Text>
      <Text style={styles.modalText}>{projectPic}</Text>
      <Text style={styles.modalText}>{ghRepo}</Text>
      <button onClick={onClose}>Close</button>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    height: 250,
    width: 250,
  },
  modalText: {
    fontFamily: "lato-Regular",
    fontWeight: "400",
    fontStyle: "Regular",
    color: "white",
    fontSize: "2.5vw",
    textAlign: "center",
  },
});
