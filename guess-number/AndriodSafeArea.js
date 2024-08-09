import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  AndriodSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
