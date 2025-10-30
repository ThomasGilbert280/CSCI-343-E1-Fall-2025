import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Colors from "../../constants/Colors";


export default function NewsItem(props) {
  const navigation = useNavigation();

  function selectedNewsHandler() {
    navigation.navigate("NewsDetail", {
      newsId: props.id,
      newsTitle: props.title,
    });
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: Colors.primary900 },
      ]}
    >
      <Pressable onPress={selectedNewsHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headline}>{props.headline}</Text>
          <Text style={styles.description} numberOfLines={3}>
            {props.description}
          </Text>
          <Text style={styles.info}>
            Date: {props.date} | Author: {props.author} | Agency: {props.agency}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  imageContainer: {
    width: "100%",
    height: 300,
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  headline: {
    fontSize: 17,
    fontFamily: "PFBoldItalic",
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    fontFamily: "Playfair",
    color: Colors.primary300,
    paddingBottom: 8,
  },
  info: {
    fontSize: 12,
    fontFamily: "Playfair",
    color: Colors.primary30005,
    paddingBottom: 4,
  },
});
