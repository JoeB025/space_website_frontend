import { useState, useEffect } from "react";
import { updateCommentVotes } from "../../utils";
import './CommentVotes.css';

export default function CommentVotes({ comment }) {
  const [commentVotes, setCommentVotes] = useState(comment.votes);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    setVoted(localStorage.getItem(comment.comment_id) === 'true');
  }, [comment.comment_id]);

  function handleClick(event) {
    event.preventDefault();
    
    if (voted === false) {
      setCommentVotes((currentVotes) => currentVotes + 1);
      updateCommentVotes(comment.comment_id);
      localStorage.setItem(comment.comment_id, true);
      setVoted(true);
    } else {
      setCommentVotes((currentVotes) => currentVotes - 1);
      updateCommentVotes(comment.comment_id);
      localStorage.setItem(comment.comment_id, false);
      setVoted(false);
    }
  }

  return (
    <button className="comment-like-button" onClick={handleClick}>
      <span className="heart">&#10084;</span> 
      <span className="count">{commentVotes}</span>
    </button>
  );
}






