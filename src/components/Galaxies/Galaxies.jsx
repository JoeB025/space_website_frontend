import "./Galaxies.css"; 
import { getGalaxies } from "../../utils"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function GalaxyData() {
  const [galaxyList, setGalaxyList] = useState([])

  useEffect(() => {
    getGalaxies().then((response) => {
      setGalaxyList(response.data.galaxy)
      console.log(response.data)
    })
  }, [])



return (
  <>
  <h1>Welcome to the Galaxies Page</h1>
  
  
  <div className="galaxies-bottom-links">
      <Link to="/" className="galaxies-back-home">
            Home
          </Link> 
          </div>
  
  </>
)


}