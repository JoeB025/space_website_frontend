import "./Topics.css"; 
import { getTopics } from "../../utils"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function TopicsData() {
  const [topicList, setTopicList] = useState([])

  useEffect(() => {
    getTopics().then((response) => {
      setTopicList(response.data.topics)
      console.log(response.data.topics)
    })
  }, [])



return (
  <>
  <h1>Welcome to the Topics Page</h1>
  <p>Need filtering to only display articles with the chosen topics.</p>
  
  
  <div className="topics-bottom-links">
      <Link to="/" className="topics-back-home">
            Home
          </Link> 
          </div>
  
  </>
)


}