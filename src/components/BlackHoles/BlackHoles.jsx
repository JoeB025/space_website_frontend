import "./BlackHoles.css"; 
import { getBlackHoles } from "../../utils"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function BlackHoles() {
  const [blackHolesList, setBlackHolesList] = useState([])

  useEffect(() => {
    getBlackHoles().then((response) => {
      setBlackHolesList(response.data.blackHoles)
      console.log(response.data.blackHoles)
    })
  }, [])



return (
  <>
  <h1>Welcome to the Black Holes Page</h1>



  <div className="black-holes-bottom-links">
      <Link to="/" className="black-holes-back-home">
            Home
          </Link> 
          </div>


  </>
)


}