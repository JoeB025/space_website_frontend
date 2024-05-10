import { postArticle, getTopics, getArticles } from "../../../utils";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../Users/singleUser/SingleUser";
import "./PostNewArticle.css";
import { useNavigate } from "react-router-dom";

export default function NewArticle() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [topic, setTopic] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [topics, setTopics] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getTopics()
      .then((response) => {
        setTopics(response.data.topics);
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  }, []);

  useEffect(() => {
    getArticles()
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !body || !topic || !imageURL) {
      setErrorMessage("Please fill all required fields");
      return;
    }

    const newArticleData = {
      title: title,
      body: body,
      author: user.username,
      topic: topic,
      article_img_url: imageURL,
      created_at: new Date().toISOString(),
      votes: 0,
      number_of_comments: "0",
    };

    postArticle(newArticleData)
      .then((res) => {
        console.log("Response from server:", res);
        setSuccess(true);
        setArticles([...articles, res.data.article]);
        navigate("/articles");
      })
      .catch((err) => {
        console.error("Error submitting article:", err);
        setErrorMessage(
          "Your article submission was unsuccessful. Please ensure that all fields are filled out and that a user has been selected. You may choose a user from the users page."
        );
      });
  };

  return (
    <div className="new-article-container">
      
      {errorMessage && <p className="error">{errorMessage}</p>}
      {success && <p className="success">Article submitted successfully!</p>}
      <form onSubmit={handleSubmit} className="post-article-form">

        <h1 className="post-article-heading">Post Article</h1>
          <label>
            <p className="post-article-content-heading">Title:</p>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="data-input-container" 
              required
            />
          </label>
          <label>
            <p className="post-article-content-heading">Image URL:</p>
            <input
              type="text"
              value={imageURL}
              onChange={(event) => setImageURL(event.target.value)}
              className="data-input-container" 
            />
          </label>
          <label>
            <p className="post-article-content-heading">Topic:</p>
            <select
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              className="data-input-container-topic" 
              required
            >
              <option value="">Select Topic</option>
              {topics.map((topic) => (
                <option key={topic.slug} className="data-input-container"  value={topic.slug}>
                  {topic.slug}
                </option>
              ))}
            </select>
          </label>
          <label>
            <p className="post-article-content-heading">Author:</p>
            <input 
            type="text" 
            value={user.username}
            className="data-input-container-author" 
            disabled />
          </label>

          <label>
            <p className="post-article-content-heading">Article content:</p>
            <textarea
              value={body}
              onChange={(event) => setBody(event.target.value)}
              className="body-input-container"
              required
            />
          </label>
          <div className="article-submit-button-container">
        <button type="submit" className="article-submit-button">Submit</button>
      </div>
      </form>
    </div>
  );
}
