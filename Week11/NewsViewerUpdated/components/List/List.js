import { View, StyleSheet, FlatList } from "react-native";
import NewsItem from "./NewsItem";

export default function List(props) {
    function renderNewsItem(itemData) {
        const newsItemProps = {
            id: itemData.item.id,
            headline: itemData.item.headline,
            date: itemData.item.date,
            author: itemData.item.author,
            agency: itemData.item.agency,
            description: itemData.item.description,
            imageUrl: itemData.item.imageUrl,
            listIndex: itemData.index,
        };
        return <NewsItem {...newsItemProps} />;
    }

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={props.articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNewsItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 12,
    backgroundColor: "black",
  },
});
