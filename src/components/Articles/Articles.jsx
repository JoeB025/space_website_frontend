import "./Articles.css";
import "./Links.css";
import "./DropDown.css";
import { getArticles, getTopics } from "../../utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Articles() {
  const [articleName, setArticleName] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topicName, setTopicName] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

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

  if (loading) return <p className="loading-all-articles">Articles loading...</p>;

  let filteredArticles = articleName;
  if (selectedTopic) {
    filteredArticles = articleName.filter((article) => article.topic === selectedTopic);
  }

  return (
    <div className="container">
      <section>
        <h1 className="article-page-title">Articles</h1>
        <div className="article-content-container">
          <div className="art-dropdown">
            <p className="art-dropdown-button">Select Your Topic:</p>
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
                      <button onClick={() => handleTopicClick(topic.slug)} className="topic-button">
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
            ))}
          </ul>
        </div>
      </section>
      <div className="all-article-bottom-links">
        <Link to="/" className="articles-back-home">
          Home
        </Link>
      </div>
    </div>
  );
}

