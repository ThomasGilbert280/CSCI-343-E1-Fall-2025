import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export default function BookmarkButton(props) {
  if (props.pressed) {
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="bookmark" size={24} color={Colors.accent500} />
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="bookmark-outline" size={24} color={Colors.accent500} />
      </Pressable>
    );
  }
}
