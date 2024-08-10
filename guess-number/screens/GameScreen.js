import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return rndNum;
}

let minBoundry = 1,
  maxBoundry = 100;

function GameScreen({ userNumber }) {
  const initalGuess = generateRandomBetween(minBoundry, maxBoundry, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction == "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know this is wrong...", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
    }
    const rndNum = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
    setCurrentGuess(rndNum);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>higher or lower</Text>
        <View>
          <PrimaryButton
            onPressExt={() => {
              nextGuessHandler("higher");
            }}
          >
            +
          </PrimaryButton>
          <PrimaryButton
            onPressExt={() => {
              nextGuessHandler("lower");
            }}
          >
            -
          </PrimaryButton>
        </View>
      </View>
      {/* <View>Log rounds</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
