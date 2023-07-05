import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Result = ({ navigation, route }) => {
  const { score } = route.params;
  const resultBanner =
    score > 40
      ? "https://img.freepik.com/free-vector/men-holding-up-winning-trophy-hand-drawn-sketch-vector-illustration_460848-14484.jpg?w=740&t=st=1688518698~exp=1688519298~hmac=0ca9909b69c5f011f7c56d24b45e018b209fef67e71632ea526795c29df323da"
      : "https://img.freepik.com/free-vector/oh-no-concept-illustration_114360-8780.jpg?w=740&t=st=1688518728~exp=1688519328~hmac=19fb56e454b3229864fe9404dfe7227d5c0bbc776742a3fba385e4e8d6539de2";
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Result</Text>
        <Text style={styles.scoreText}>Your final score is {score}</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: resultBanner,
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
    marginTop: 20,
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
    marginTop: 50,
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
  scoreText: {
    fontSize: 24,
    alignSelf: "center",
  },
});

export default Result;
