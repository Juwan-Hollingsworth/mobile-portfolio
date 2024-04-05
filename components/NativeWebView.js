import React from "react";
import { Platform } from "react-native";
import { WebView } from "react-native-webview";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// Define a functional component NativeWebView which accepts props
const NativeWebView = (props) => {
  // Check the platform the app is running on
  if (Platform.OS === "web") {
    // If running on web, render an iframe w/ the target URL and styles
    return <iframe src={props.target} style={styles} />;
  }
  // If running on other platforms, render a WebView component w/ the target URL
  return <WebView source={{ uri: props.target }} />;
};

export { NativeWebView }; // export as a named export

const styles = {
  height: hp(100),
};
