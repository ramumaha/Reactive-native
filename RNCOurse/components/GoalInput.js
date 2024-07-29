import { TextInput, Button, View, StyleSheet } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalState, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    // console.log(enteredText["nativeEvent"]["text"]);
    setEnteredGoalText(enteredText["nativeEvent"]["text"]);
  }

  function addGoalHandler() {
    // props.addGoalHandler(enteredGoalState);
    props.onAdd(enteredGoalState);
    setEnteredGoalText("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goal"
        style={styles.textInput}
        onChange={goalInputHandler}
        value={enteredGoalState}
      ></TextInput>
      <Button title="Add goal" onPress={addGoalHandler}></Button>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBlockColor: "#cccccc",
    flex: 1,
  },
});
