import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const AttachPDFScreen = () => {
  const navigation = useNavigation();

  const handleAttachPDF = () => {
    navigation.navigate("Loading");
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require("../assets/bg2.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Attach Your PDF</Text>

        <TouchableOpacity style={styles.button} onPress={handleAttachPDF}>
          <Text style={styles.buttonText}>Attach PDF</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={handleBack}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default AttachPDFScreen;

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
    backgroundColor: "rgba(0,0,0,0.3)", // optional dark overlay
  },
  title: {
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#00796B",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "#004D40",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
