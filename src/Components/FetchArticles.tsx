import { useEffect, useState } from "react";
import { ArticleInterface, Data } from "../Interfaces/Article";
import Article from "./Article";

const FetchArticles = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>([]);

  const fetchArt = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/?title_contains=thales+alenia+space&title")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("problema nella chiamata API");
        }
      })
      .then((arrayOfArticles: Data) => {
        console.log("DATI", arrayOfArticles);
        setArticles(arrayOfArticles.results);
      })
      .catch((e) => console.log("ERRORE", e));
  };

  useEffect(() => {
    fetchArt();
  }, []);

  return (
    <div>
      {articles.map((a) => (
        <Article articleDetails={a} key={a.id} />
      ))}
    </div>
  );
};

export default FetchArticles;
