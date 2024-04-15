import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Comments.css";
import "./Loading.css";
import { UserContext } from "../Users/singleUser/SingleUser";
import { deleteComments } from "../../utils";

export default function ArticleComments(props) {
  const { articleComments, setArticleComments } = props;
  const { article_id } = useParams();
  const [userComments, setUserComments] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    setUserComments(articleComments);
    console.log(articleComments); 
  }, [articleComments]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert hours to 12-hour format
    return `${day}/${month}/${year} - ${hours}:${minutes} ${ampm}`;
  };

  if (loading)
    return (
      <>
        <div className="loader-container">
          <p className="loading-comments">Loading comments</p>
          <div className="loader"></div>
        </div>
      </>
    );

  if (articleComments.length === 0) {
    return (
      <p className="no-comments-notice">
        No comments have been posted on this article.
      </p>
    );
  }

  return (
    <>
      <div className="comments-section-container">
        <h1 className="comments-title">Comments</h1>
        <ul className="comment-list">
          {articleComments.map((comments) => {
            return (
              <h2 key={comments.comment_id}>
                <li className="comments-container">
                  <p className="user-comments-username">
                    User: {comments.author}
                  </p>

                  <div className="comment-body-votes-container">
                    <p className="comment-text">{comments.body}</p>
                    <p className="comment-data-votes">
                      Votes: {comments.votes}
                    </p>
                  </div>

                  <p className="comment-data-posted">
                    Posted: {formatDate(comments.created_at)}
                  </p>

                  <div className="delete-button-container">
                    {user.username === comments.author && (
                      <button
                        className="delete-button"
                        onClick={() =>
                          comments.author === user.username
                            ? deleteComments(comments.comment_id)
                            : null
                        }
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </li>
              </h2>
            );
          })}
        </ul>
      </div>
    </>
  );
}
