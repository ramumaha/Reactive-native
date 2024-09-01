import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionProperty, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionProperty: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});

export default InstructionText;
