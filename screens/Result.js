import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Result = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/online-test-concept-illustration_114360-5456.jpg?w=740&t=st=1688432283~exp=1688432883~hmac=9e491e45249050896c75577524793460c8935955473a9891fb133470a5cf3487",
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "blue",
    marginBottom: 35,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
  },
});

export default Result;
