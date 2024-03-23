import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProjectScreen from "./screens/ProjectScreen";
import BlankScreen from "./screens/BlankScreen";
import ResumeScreen from "./screens/ResumeScreen";
import ContactScreen from "./screens/ContactScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Navbar /> */}
      {/* <HomeScreen /> */}
      {/* <AboutScreen /> */}
      {/* <ProjectScreen /> */}
      {/* <BlankScreen /> */}
      {/* <ResumeScreen /> */}

      <ContactScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
