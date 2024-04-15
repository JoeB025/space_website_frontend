import { useState } from "react";
import { updateVotes } from "../../utils";
import './Likes.css'


export default function LikeCount({article}) {
  const [votes, setVotes] = useState(article.votes) 


  function handleClick(event) {
    event.preventDefault();
    setVotes((currentVotes) => currentVotes + 1)
    updateVotes(article.article_id)
  }


  
  return (
      <button className='likes-button' onClick={handleClick}>
        <span className="heart">&#10084;</span> 
        <span className="count">{votes}</span>
      </button>
  );
}


