import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/bg.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Quizmon Battle</Text>

        <TouchableOpacity
          style={styles.playButton}
          onPress={() => navigation.navigate("AttachPDF")}
        >
          <Text style={styles.playButtonText}>Play</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // Make sure the image covers the whole screen
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.3)", // Optional: to add a dark overlay over the image
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#FFFFFF",
  },
  playButton: {
    backgroundColor: "#00796B",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  playButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
