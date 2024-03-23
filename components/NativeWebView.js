import React from "react";
import { Platform } from "react-native";
import { WebView } from "react-native-webview";

// Define a functional component NativeWebView which accepts props
const NativeWebView = (props) => {
  // Check the platform the app is running on
  if (Platform.OS === "web") {
    // If running on web, rendering an iframe with the target URL and styles
    return <iframe src={props.target} style={styles} />;
  }
  return <WebView source={{ uri: props.target }} />;
};

export { NativeWebView }; // exporting as a named export

const styles = {
  height: 500,
  width: 700,
};
