import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Quiz from "./screens/Quiz";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <Quiz />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
