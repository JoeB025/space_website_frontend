import { getArticlesById } from "../../../utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ArticlesById.css";

export default function ArticlesById() {
  const { article_id } = useParams();
  const [articleById, setArticleById] = useState({});

  useEffect(() => {
    getArticlesById(article_id).then((response) => {
      setArticleById(response.data.article);
      setLoading(false);
    });
  }, [article_id]);




  return (
    <>
      <h1 className="title">{articleById.title}</h1>

      <p className="test-text">In individual articles page</p>
        

        
    </>
  );
}


