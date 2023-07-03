import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Quiz from "./screens/Quiz";
import Result from "./screens/Result";
import MyStack from "./navigator/index";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
