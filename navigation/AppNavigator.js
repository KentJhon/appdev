import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import AttachPDFScreen from "../screens/AttachPDFScreen"; // we will create this next!
import LoadingScreen from "../screens/LoadingScreen";
import BattleScreen from "../screens/BattleScreen";
import GameOverScreen from "../screens/GameOverScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Hide default headers for a cleaner look
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AttachPDF" component={AttachPDFScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Battle" component={BattleScreen} />
        <Stack.Screen name="Gameover" component={GameOverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
