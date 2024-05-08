import "./Articles.css";
import "./Links.css";
import "./DropDown.css";
import "./SortButtons.css";
import { getArticles, getTopics } from "../../utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LikeCount from "../LikeButton/Likes";
import NewArticle from "./PostArticles/PostNewArticle";

export default function Articles() {
  const [articleName, setArticleName] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topicName, setTopicName] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    getArticles().then((response) => {
      setArticleName(response.data.article);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    getTopics().then((response) => {
      setTopicName(response.data.topics);
      setLoading(false);
    });
  }, []);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const handleShowAll = () => {
    setSelectedTopic(null);
  };

  const sortArticles = (sortByField) => {
    if (sortBy === sortByField) {
      setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    } else {
      setSortOrder("desc");
      setSortBy(sortByField);
    }
  };

  if (loading)
    return (
      <>
        <div className="loader-container">
          <p className="loading-text">Loading</p>
          <div className="loader"></div>
        </div>
      </>
    );

  let filteredArticles = articleName;
  if (selectedTopic) {
    filteredArticles = articleName.filter(
      (article) => article.topic === selectedTopic
    );
  }

  if (sortBy && sortOrder) {
    filteredArticles.sort((a, b) => {
      if (sortBy === "created_at") {
        return sortOrder === "asc"
          ? new Date(a.created_at) - new Date(b.created_at)
          : new Date(b.created_at) - new Date(a.created_at);
      } else if (sortBy === "votes") {
        return sortOrder === "asc" ? a.votes - b.votes : b.votes - a.votes;
      } else if (sortBy === "number_of_comments") {
        const commentCountA = a.number_of_comments || 0;
        const commentCountB = b.number_of_comments || 0;
        return sortOrder === "asc"
          ? commentCountA - commentCountB
          : commentCountB - commentCountA;
      }
      return 0;
    });
  }

  return (
    <div className="container">
      <section>
        <h1 className="article-page-title">Articles</h1>
        <div className="article-sort-buttons">
          <p className="sort-by-text">Sort By:</p>
          <button
            onClick={() => sortArticles("created_at")}
            className="date-sort-button"
          >
            Date {sortBy === "created_at" && (sortOrder === "asc" ? "↓" : "↑")}
          </button>
          <button
            onClick={() => sortArticles("votes")}
            className="likes-sort-button"
          >
            Likes {sortBy === "votes" && (sortOrder === "asc" ? "↓" : "↑")}
          </button>
          <button
            onClick={() => sortArticles("number_of_comments")}
            className="comments-sort-button"
          >
            Comments {sortBy === "number_of_comments" &&
              (sortOrder === "asc" ? "↓" : "↑")}
          </button>
        </div>
        <div className="article-content-container">
          <div className="art-dropdown">
            <p className="art-dropdown-button">Select Your Topic ⌵</p>
            <div className="art-dropdown-content">
              <ul className="drop-down-topic-list">
                <h2 className="topic-container-drop-down">
                  <p>
                    <button onClick={handleShowAll} className="topic-button">
                      Show All
                    </button>
                  </p>
                </h2>
                {topicName.map((topic) => (
                  <h2 key={topic.slug} className="topic-container-drop-down">
                    <p key={topic.id}>
                      <button
                        onClick={() => handleTopicClick(topic.slug)}
                        className="topic-button"
                      >
                        {topic.slug}
                      </button>
                    </p>
                  </h2>
                ))}
              </ul>
            </div>
          </div>
          <ul className="article-list">
            {filteredArticles.map((article) => (
              <h2 key={article.title} className="article-container">
                <li className="main-container">
                  <div className="article-image-container">
                    <img
                      src={article.article_img_url}
                      className="article-image"
                      alt={article.title}
                    />
                  </div>
                  <div className="article-title-container">
                    <Link
                      to={`/articles/${article.article_id}`}
                      className="article-title"
                    >
                      {article.title}
                    </Link>
                  </div>

                  <div className="topic-author-container">
                    <div className="author-container">
                      <p className="article-author-desc">
                        Author:{" "}
                        <p className="article-author-name">{article.author}</p>
                      </p>
                    </div>

                    <div className="topic-container">
                      <p className="article-topic-desc">
                        Topic:{" "}
                        <p className="article-topic-name">{article.topic}</p>
                      </p>
                    </div>
                  </div>
                  <div className="article-votes-comments">
                    <p className="article-votes">
                      <LikeCount article={article} />
                    </p>
                    <p>
                      <span className="speech-bubble-icon">💬</span>
                      {article.number_of_comments}
                    </p>
                  </div>
                </li>
              </h2>
            ))}
          </ul>
        </div>
      </section>

      <div>
        <NewArticle/>
      </div>

      <div className="all-article-bottom-links">
        <Link to="/" className="articles-back-home">
          Home
        </Link>
      </div>
    </div>
  );
}





