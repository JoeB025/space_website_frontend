import { insertComments } from "../../../utils"
import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../../Users/singleUser/SingleUser"
import "./PostUserComments.css"

export default function PostUserComments(props) {

  const { articleComments, setArticleComments } = props
  const [ userComments, setUserComments ] = useState("")
  const [ body, setBody ] = useState("")
  const { article_id } = useParams()
  const { user } = useContext(UserContext)

  useEffect(() => {
    setUserComments(articleComments);
  }, [articleComments]);

  const addNewComment = (event) => {
    event.preventDefault();
    setArticleComments((currComments) => {
      const commentObj = {
        body: body,
        author: user.username,
        votes: "0",
        created_at: ""
      };
      return [commentObj, ...currComments];
    });

    insertComments(article_id, body, user.username)
      .then((response) => {
        const newComment = response.data.comment;
        setUserComments([newComment, ...userComments]);
        setBody("")
      })
      .catch((err) => {
        console.log(err)
      });
  };

  
  return (
    <>

<div className="post-comments-container">
<p className="add-comments-title">Add Comments</p>
<div className="form-container">
  <form className="submit-comment-form" type="submit">
    <label htmlFor="body">
      <input 
      type="text"
      id="body"
      value={body}
      placeholder="Enter comment"
      onChange={(event) => {
        setBody(event.target.value);
      }}
      />
    </label>
  </form>
</div>
<div className="button-container">
            <button className="submit-comment-button" onClick={addNewComment}>
              SUBMIT
            </button>
          </div>


</div>
    
    </>
  )
}