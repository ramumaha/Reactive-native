import {
  TextInput,
  Button,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChange={goalInputHandler}
          value={enteredGoalState}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={addGoalHandler}
              color="#5e0acc"
            ></Button>
          </View>
          <View styles={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onCancel}
              color="#f31282"
            ></Button>
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
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    marginRight: 8,
    borderRadius: 6,
    padding: 16,
  },
  inputContainer: {
    justifyContent: "scenter",
    alignItems: "center",
    padding: 16,
    flex: 1,
    backgroundColor: "#311b6b",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "35px",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
