import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Title from "../components/Title";

const Home = () => {
  return (
    <View>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://iconscout.com/illustration/quiz-show-3864158",
          }}
          style={styles.banner}
        />
      </View>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Home;
