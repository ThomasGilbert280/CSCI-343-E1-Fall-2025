import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function NavButton(props) {
  return (
    <Pressable
      android_ripple={{ color: Colors.primary700 }}
      onPress={props.onPress || props.onNext}
      style={({ pressed }) => pressed && styles.presseditem}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: 350,
    margin: 10,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: Colors.primary700,
    marginBottom: 30,
  },
  presseditem: {
    opacity: 0.5,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 8,
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Note",
  },
});
