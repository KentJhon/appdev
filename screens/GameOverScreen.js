import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const GameOverScreen = ({ route }) => {
  const navigation = useNavigation();
  const { score } = route.params || { score: 0 };

  const handleRestart = () => {
    // Navigate back to BattleScreen with same PDF or data
    navigation.navigate("Battle", { restart: true }); // Pass any necessary data again
  };

  const handleQuit = () => {
    navigation.navigate("Home");
  };

  return (
    <ImageBackground
      source={require("../assets/bg2.jpg")} // Change image if you want
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Game Over</Text>
        <Text style={styles.score}>Your Score: {score}</Text>

        <TouchableOpacity style={styles.button} onPress={handleRestart}>
          <Text style={styles.buttonText}>Restart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.quitButton]}
          onPress={handleQuit}
        >
          <Text style={styles.buttonText}>Quit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  title: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 30,
  },
  score: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#00796B",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
    marginBottom: 20,
  },
  quitButton: {
    backgroundColor: "#C62828",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
