import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProjectScreen from "./screens/ProjectScreen";
import AboutDraft from "./screens/AboutScreen";
import BlankScreen from "./screens/BlankScreen";
import draft from "./screens/ContactScreen";
import ResumeScreen from "./screens/ResumeScreen";
import ContactScreen from "./screens/ContactScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./components/Header";
import Footer from "./components/Footer";
const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <NavigationContainer initialRouteName="Draft">
        <Stack.Navigator>
          <Stack.Screen
            name="Contact"
            component={ContactScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Projects"
            component={ProjectScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Resume"
            component={ResumeScreen}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="Contact"
            component={ContactScreen}
            options={{ headerShown: false }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
