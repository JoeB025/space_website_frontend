import { getPlanetsById } from "../../../utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PlanetsById.css";
import { Link } from "react-router-dom";

export default function PlanetsById() {
  const { planets_id } = useParams();
  const [planetsById, setPlanetsById] = useState({});

  useEffect(() => {
    getPlanetsById(planets_id).then((response) => {
      setPlanetsById(response.data.planet);
      console.log(response.data.planet);
    });
  }, [planets_id]);

  return (
    <>
<div className="single-planet-container">

      <p className="individual-planet-title">{planetsById.name}</p>
     <div className="individual-planet-img-container">
      <img 
      src={planetsById.img_url}
      className="single-planet-img"
      alt={planetsById.name}
      />
</div>
      <p className="individual-planet-description">{planetsById.planet_description}</p>

      

      <div className="single-planet-bottom-links">
      <Link to="/" className="single-planets-back-home">
            Home
          </Link> 
          </div>


          </div>
    </>
  );
}
