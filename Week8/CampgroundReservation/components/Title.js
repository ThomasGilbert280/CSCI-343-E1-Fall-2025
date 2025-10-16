import { Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../constants/Colors";

export default function Title(props) {
  const [width, height] = useWindowDimensions();
  return (
    <Text style={[styles.title, { fontSize: width * 0.13 }]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: Colors.primary600,
    textShadowColor: Colors.primary700,
    textShadowRadius: 20,
    textAlign: "center",
    fontFamily: "Papernotes",
  },
});
