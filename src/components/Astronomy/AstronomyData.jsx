import "./AstronomyData.css"; 
import { getAstronomyData } from "../../utils"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./Links.css"

export default function AstronomyData() {
  const [astronomyList, setAstronomyList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAstronomyData().then((response) => {
      setAstronomyList(response.data.astronomy)
      setLoading(false)
      console.log(response.data.astronomy)
    })
  }, [])

  if (loading)
  return (
    <>
      <div className="loader-container">
        <p className="loading-text">Loading</p>
        <div className="loader"></div>
      </div>
    </>
  );

return (
  <>
  <div className="cel-ent-container">
  <h1 className="cel-ent-title">Celestial Entities</h1>
  <p className="cel-ent-intro">Welcome to our celestial exploration hub, where the wonders of the cosmos await! Embark on a captivating journey through the vast reaches of space as we delve into the mesmerizing realms of celestial entities. From the majestic planets of our solar system to the distant galaxies scattered across the cosmic expanse, join us as we unravel the mysteries of stars, asteroids, supernovae, and more. Whether you're an avid stargazer or a curious enthusiast, prepare to be inspired by the beauty and complexity of the universe that surrounds us. Let's embark on an astronomical adventure together!</p>
  

  

  <ul className="cel-ent-main-container">
          <h1>
            {astronomyList.map((data) => {
              return (
                <li key={data.topic} className="cel-ent-list-cont">
          <div className="cel-ent-data-container">
            <h2 className="cel-ent-topic">{data.topic}</h2>

               <div className="cel-ent-img-container">
                      <img
                        src={data.img_url}
                        className="cel-ent-image"
                        alt={data.topic}
                      />
                    </div>

  
            </div>                    
            <p className="cel-ent-desc">{data.description}</p>

         
            
          
                </li>
              );
            })}
          </h1>
        </ul>





  <div className="astronomy-bottom-links">
      <Link to="/" className="astronomy-back-home">
            Home
          </Link> 
          </div>
  </div>
  </>
)


}