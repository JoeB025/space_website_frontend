import "./Stars.css"; 
import { getStars } from "../../utils"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function StarData() {
  const [starsList, setStarsList] = useState([])

  useEffect(() => {
    getStars().then((response) => {
      setStarsList(response.data.star)
      console.log(response.data)
    })
  }, [])



return (
  <>
  <h1>Welcome to the Stars Page</h1>
  
  
  <div className="stars-bottom-links">
      <Link to="/" className="stars-back-home">
            Home
          </Link> 
          </div>
  
  </>
)


}