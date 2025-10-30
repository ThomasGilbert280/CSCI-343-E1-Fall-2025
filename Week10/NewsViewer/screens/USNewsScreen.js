import List from "../components/List/List";
import {ARTICLES} from "../data/news-data";

export default function USNewsScreen() {
    const type = "US";
    const displayedArticles = ARTICLES.filter(
        (article) => article.type === type
    );

  return (
    <List articles={displayedArticles} />
  );
}