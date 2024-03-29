import "./AstronomyData.css"; 
import { getAstronomyData } from "../../utils"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function AstronomyData() {
  const [AstronomyList, setAstronomyList] = useState([])

  useEffect(() => {
    getAstronomyData().then((response) => {
      setAstronomyList(response.data.astronomy)
      console.log(response.data.astronomy)
    })
  }, [])



return (
  <>
  <h1>Welcome to the Astronomy Page</h1>
  
  
  <div className="astronomy-bottom-links">
      <Link to="/" className="astronomy-back-home">
            Home
          </Link> 
          </div>
  
  </>
)


}