import "./Galaxies.css";
import "./Links.css";
import "./PageContainer.css";
import { getGalaxies } from "../../utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GalaxyData() {
  const [galaxyList, setGalaxyList] = useState([]);

  useEffect(() => {
    getGalaxies().then((response) => {
      setGalaxyList(response.data.galaxy);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <h1 className="galaxies-header">Galaxies</h1>

      <div className="galaxies-container">
        <ul className="galaxies-data-container">
          {galaxyList.map((galaxy) => {
            return (
              <li key={galaxy.galaxy_id}>
                <div className="galaxy-containers">
                  <h2 className="galaxy-title">{galaxy.galaxy_name}</h2>

                  <div className="galaxy-top-section">
                    <div className="galaxy-data-container">
                      <p className="galaxy-constellation-text">Constellation: {galaxy.constellation}</p>
                      <p className="galaxy-distance-text">Distance from earth: {galaxy.distance_from_earth}</p>
                      <p className="galaxy-size-text">Size: {galaxy.size}</p>
                      <p className="galaxy-type-text">Type: {galaxy.type}</p>
                      <p className="galaxy-star-count-text">Number of stars: {galaxy.number_of_stars}</p>
                    </div>
                    <div className="general-info-container">
                      <h2 className="about-heading">About</h2>
                      <p>{galaxy.general_info}</p>
                    </div>
                  </div>

                  <div className="galaxy-mid-section">
                    <div className="obs-history-container">
                      <h3 className="observation-heading">Observation History</h3>
                      <p>{galaxy.observation_history}</p>
                    </div>
                    <div className="galaxy-img-container">
                      <img
                        src={galaxy.img_url}
                        className="galaxy-image"
                        alt={galaxy.galaxy_name}
                      />
                    </div>
                  </div>

              <div className="galaxy-bottom-section">
                  <h4 className="timeline-heading">
                    Timeline of {galaxy.galaxy_name}
                  </h4>
                  <p className="galaxy-timeline-text">{galaxy.timeline}</p>
                </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="galaxies-bottom-links">
          <Link to="/" className="galaxies-back-home">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
