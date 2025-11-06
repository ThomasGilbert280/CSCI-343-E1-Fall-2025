import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/favorites-context";
import { ARTICLES } from "../data/news-data";
import Article from "../models/article";
import List from "../components/List/List";
import Colors from "../constants/Colors";

export default function BookmarkScreen() {
  const favoriteListingsCtx = useContext(FavoritesContext);
  const favoriteArticles = ARTICLES.filter((NewsItem) => {
    return favoriteListingsCtx.ids.includes(NewsItem.id);
  });

  if (favoriteArticles.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No saved articles.</Text>
      </View>
    );
  } else {
    return <List articles={favoriteArticles} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary900,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent800,
  }
});
