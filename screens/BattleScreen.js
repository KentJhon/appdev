import { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BattleScreen() {
  const navigation = useNavigation();

  const [userHP, setUserHP] = useState(10);
  const [enemyHP, setEnemyHP] = useState(10);
  const [score, setScore] = useState(0);
  const [potions, setPotions] = useState(0);

  const currentQuestion = {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  };

  const handleAnswer = (option) => {
    if (option === currentQuestion.answer) {
      const newEnemyHP = enemyHP - 1;
      setEnemyHP(newEnemyHP);
      if (newEnemyHP === 0) {
        setScore(score + 1);
        setPotions(potions + 1);
        setEnemyHP(10); // new enemy appears
      }
    } else {
      const newUserHP = userHP - 1;
      setUserHP(newUserHP);
      if (newUserHP === 0) {
        navigation.navigate("/gameover?score=" + score);
      }
    }
  };

  const usePotion = () => {
    if (potions > 0 && userHP < 10) {
      setUserHP(Math.min(10, userHP + 2));
      setPotions(potions - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {score}</Text>

      {/* Enemy */}
      <View style={styles.characterContainer}>
        <Image
          source={require("../assets/enemy1.png")}
          style={styles.character}
        />
        <Text>Enemy HP: {enemyHP}/10</Text>
      </View>

      {/* User */}
      <View style={styles.characterContainer}>
        <Image
          source={require("../assets/character1.png")}
          style={styles.character}
        />
        <Text>Your HP: {userHP}/10</Text>
      </View>

      {/* Question */}
      <Text style={styles.question}>{currentQuestion.question}</Text>
      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionButton}
          onPress={() => handleAnswer(option)}
        >
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}

      {/* Potion + Exit */}
      <View style={styles.controls}>
        <Button
          title="Use Potion"
          onPress={usePotion}
          disabled={potions === 0 || userHP >= 10}
        />
        <Button
          title="Exit"
          onPress={() => navigation.navigate("Gameover?score=" + score)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: "center" },
  characterContainer: { alignItems: "center", marginVertical: 10 },
  character: { width: 100, height: 100 },
  question: { fontSize: 18, marginVertical: 20, textAlign: "center" },
  optionButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: "center",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  score: { fontSize: 16, textAlign: "center", marginBottom: 10 },
});
