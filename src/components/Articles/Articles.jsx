import "./Articles.css";
import "./Links.css";
import "./DropDown.css";
import { getArticles } from "../../utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Articles() {
  const [articleName, setArticleName] = useState([]);

  useEffect(() => {
    getArticles().then((response) => {
      setArticleName(response.data.article);
      console.log(response.data.article);
    });
  }, []);

  return (
    <>
      <div className="container">
        <section>
          <h1 className="article-page-title">Articles</h1>

          <div className="article-content-container">
            <div className="art-dropdown">
              <button className="art-dropdown-button">
                <i>Select Your Topic:</i>
              </button>
              <div className="art-dropdown-content">
                <Link to="planets">filter all topics...</Link>
                <Link to="/planets/1">Topic 1</Link>
                <Link to="/planets/2">Topic 2</Link>
                <Link to="/planets/3">Topic 3</Link>
              </div>
            </div>

            <ul className="article-list">
              {articleName.map((article) => {
                return (
                  <h2 key={article.title} className="article-container">
                    <li>
                      <div className="main-container">
                        <div className="article-image-container">
                          <img
                            src={article.article_img_url}
                            className="article-image"
                            alt={article.title}
                          />
                        </div>
                        <div className="'info-container">
                          <Link
                            to={`/articles/${article.article_id}`}
                            className="article-title"
                          >
                            {article.title}
                          </Link>
                        </div>
                      </div>

                      <div className="topic-author-container">
                        <div className="author-container">
                          <p className="article-author-desc">
                            Author:{" "}
                            <span className="article-author-name">
                              {article.author}
                            </span>
                          </p>
                        </div>
                        <div className="topic-container">
                          <p className="article-topic-desc">
                            Topic:{" "}
                            <span className="article-topic-name">
                              {article.topic}
                            </span>
                          </p>
                        </div>
                      </div>
                      <p className="article-votes">💙 {article.votes}</p>
                    </li>
                  </h2>
                );
              })}
            </ul>
          </div>
        </section>

        <div className="all-article-bottom-links">
          <Link to="/" className="articles-back-home">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
