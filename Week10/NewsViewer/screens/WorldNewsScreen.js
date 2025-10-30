import List from "../components/List/List";
import {ARTICLES} from "../data/news-data";

export default function WorldNewsScreen() {
    const type = "World";
    const displayedArticles = ARTICLES.filter(
        (article) => article.type === type
    );

  return (
    <List articles={displayedArticles} />
  );
}

