import "./Articles.css";
import { getArticles } from "../../utils";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Articles() {

  const [articleName, setArticleName] = useState([])

useEffect(() => {
  getArticles().then((response) => {
    setArticleName(response.data.article)
    console.log(response.data.article)
  });
}, []);


return (
  <>
  <div className="container">
    <section>
      <p className="article-page-title">Welcome to the Articles Page!</p>

      <ul className="article-list">
        {articleName.map((article) => {
          return (
            <h1 key={article.title} className="article-container">
            <li>
              <div className="main-container">
              <div className="'info-container">
              <h2 className="article-title">{article.title}</h2>
              <p className="article-author">Author: {article.author}</p>
              <p className="article-topic">Topic: {article.topic}</p>
              <p className="article-votes">Votes: {article.votes}</p>
              <p className="article-comment-count">Comment Count:{article.number_of_comments}</p>
              <p className="article-date">Created: {article.created_at}</p>
              </div>
              <div className="article-image-container">
                    <img
                      src={article.article_img_url}
                      className="article-image"
                      alt={article.title}
                    />
                  </div>
                  </div>
                  <Link
                    to={`/articles/${article.article_id}`}
                    className="articleLink"
                  >
                    Link to article page
                  </Link>
            </li>
            </h1>
          )
        })}
      </ul>
    </section>

    <div className="all-article-bottom-links">
      <Link to="/" className="articles-back-home">
            Home
          </Link> 
          </div>


  </div>
     
  </>
)

}

