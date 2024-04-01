import "./Galaxies.css"; 
import "./Links.css"
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

  <div className="galaxies-container">


<ul className="galaxies-data-container">
  {galaxyList.map((galaxy) => {
    return (
      <li key={galaxy.galaxy_id}>

        <div className="galaxy-containers">
   
            <h2 className="galaxy-title">{galaxy.galaxy_name}</h2>
            <p>Constellation{galaxy.constellation}</p>
            <p>Distance from earth: {galaxy.distance_from_earth}</p>
            <p>Size: {galaxy.size}</p>
            <p>Type: {galaxy.type}</p>
            <p>General Info: {galaxy.general_info}</p>
            <p>Number of stars: {galaxy.number_of_stars}</p>
            <p>{galaxy.visible_galactic_center}</p>
            <p>Observation History: {galaxy.observation_history}</p>
            <p>Timeline: {galaxy.timeline}</p>
            <img
                      src={galaxy.img_url}
                      className="galaxy-image"
                      alt={galaxy.galaxy_name}
                    />
            
            </div>
    
      </li>
    )
  })}
</ul>
  
  
  <div className="galaxies-bottom-links">
      <Link to="/" className="galaxies-back-home">
            Home
          </Link> 
          </div>
    </div>
  </>
)


}