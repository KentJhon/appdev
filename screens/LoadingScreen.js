import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timeout = setTimeout(() => {
      navigation.navigate("Battle");
    }, 3000);

    return () => clearTimeout(timeout); // cleanup
  }, []);

  return (
    <ImageBackground
      source={require("../assets/bg3.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading Questions...</Text>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    </ImageBackground>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  loadingText: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
});
