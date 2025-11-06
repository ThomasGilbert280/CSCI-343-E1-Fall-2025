import { StyleSheet, Text, View } from "react-native";
import { ARTICLES } from "../data/news-data";
import { Image } from "react-native";
import Colors from "../constants/Colors";
import { useContext, useLayoutEffect, useState } from "react";
import BookmarkButton from "../components/BookmarkButton";
import { FavoritesContext } from "../store/favorites-context";

export default function NewsDetailScreen(props) {
  const favoriteListingsCtx = useContext(FavoritesContext);
  const newsId = props.route.params.newsId;
  const selectedArticle = ARTICLES.find((article) => article.id === newsId);

  const articleIsFavorite = favoriteListingsCtx.ids.includes(newsId);

  function changeFavStatusHandler() {
    if (articleIsFavorite) {
      favoriteListingsCtx.removeFavorite(newsId);
    } else {
      favoriteListingsCtx.addFavorite(newsId);
    }
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => (
        <BookmarkButton
          isFavorite={articleIsFavorite}
          onPress={changeFavStatusHandler}
        />
      ),
    });
  }, [props.navigation, changeFavStatusHandler, articleIsFavorite]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedArticle.imageUrl }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.headline}>{selectedArticle.headline}</Text>
        <Text style={styles.info}>
          Date: {selectedArticle.date} | Author: {selectedArticle.author} |
          Agency: {selectedArticle.agency}
        </Text>
        <Text style={styles.description}>{selectedArticle.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
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
    borderRadius: 7,
    backgroundColor: Colors.primary800,
  },
  headline: {
    fontSize: 25,
    fontFamily: "PFBoldItalic",
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    fontSize: 20,
    fontFamily: "Playfair",
    color: Colors.primary300,
    paddingBottom: 8,
  },
  info: {
    fontSize: 16,
    fontFamily: "Playfair",
    color: Colors.primary300o5,
    paddingBottom: 4,
  },
});
