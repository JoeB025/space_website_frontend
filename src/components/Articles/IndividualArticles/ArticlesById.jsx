import { getArticlesById } from "../../../utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ArticlesById.css";
import { Link } from "react-router-dom";

export default function ArticlesById() {
  const { article_id } = useParams();
  const [articleById, setArticleById] = useState({});

  useEffect(() => {
    getArticlesById(article_id).then((response) => {
      setArticleById(response.data.article);
      console.log(response.data.article);
    });
  }, [article_id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };

  return (
    <>
      <div className="single-article-container">
        <div>
          <p className="single-article-topic">Topic: {articleById.topic}</p>
          <h1 className="single-article-title">{articleById.title}</h1>
        </div>
        <p className="single-article-author">
          By{" "}
          <span className="single-article-author-name">
            {articleById.author}
          </span>
        </p>

        <div className="single-article-img-container">
          <img
            src={articleById.article_img_url}
            className="single-article-img"
            alt={articleById.title}
          />
        </div>
        <p className="single-article-body">{articleById.body}</p>
        <p className="single-article-created">
          Published: {formatDate(articleById.created_at)}
        </p>

        <div className="votes-comment-count-container">
          <p className="single-article-votes">Votes: {articleById.votes}</p>
          <p className="single-article-comment-count">
            Comment Count: {articleById.comment_count}
          </p>
        </div>

        <div className="single-article-bottom-links">
          <Link to="/" className="single-articles-back-home">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
