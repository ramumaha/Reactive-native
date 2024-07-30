import { TextInput, Button, View, StyleSheet, Modal } from "react-native";
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
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChange={goalInputHandler}
          value={enteredGoalState}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler}></Button>
          </View>
          <View styles={styles.button}>
            <Button title="Cancel" onPress={props.onCancel}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 8,
    padding: 16,
  },
  inputContainer: {
    justifyContent: "scenter",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBlockColor: "#cccccc",
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30px",
    marginHorizontal: 8,
  },
});
