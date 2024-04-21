import "./Galaxies.css";
import "./Links.css";
import "./PageContainer.css";
import { getGalaxies } from "../../utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Loading.css"

export default function GalaxyData() {
  const [galaxyList, setGalaxyList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGalaxies().then((response) => {
      setGalaxyList(response.data.galaxy);
      setLoading(false)
      console.log(response.data);
    });
  }, []);

  if (loading)
  return (
    <>
      <div className="loader-container">
        <p className="loading-all-articles">Loading Galaxies</p>
        <div className="loader"></div>
      </div>
    </>
  );

  return (
    <>
    
    <div className="galaxy-page-container">
      <h1 className="galaxies-page-header">Galaxies</h1>
      <div className="galaxy-intro-text-container">
      <p className="galaxy-intro-text">In the vast expanse of the cosmos, galaxies stand as colossal islands of stars, gas, dust, and dark matter, bound together by gravity and swirling through the cosmic dance of the universe. These cosmic entities, each containing billions to trillions of stars, have captured the imagination of scientists and stargazers alike, offering glimpses into the awe-inspiring complexity and beauty of our universe.</p>
      <p className="galaxy-intro-text">Galaxies are immense systems composed of stars, stellar remnants, interstellar gas, dust, and dark matter, held together by gravitational forces. They are the fundamental building blocks of the universe, forming the backdrop against which the drama of cosmic evolution unfolds. Estimates suggest that the observable universe contains more than 100 billion galaxies, each with its own distinct characteristics and history. These galaxies range in size from dwarfs containing only a few million stars to giants hosting trillions of stars. They are distributed across the vast cosmic landscape, clustering together in cosmic filaments and superclusters, separated by immense voids of seemingly empty space.</p>
      <p className="galaxy-intro-text">Galaxies come in a diverse array of shapes and sizes, categorized into several main types. Spiral galaxies feature a distinctive spiral structure, with arms winding outward from a central bulge. Examples include the iconic Andromeda Galaxy and our own Milky Way. Elliptical galaxies are shaped like ellipsoids, ranging from nearly spherical to highly elongated. They typically lack the prominent spiral arms seen in spiral galaxies and contain older stars. Irregular galaxies lack a well-defined structure and often exhibit chaotic shapes. They are characterized by ongoing star formation and are thought to result from gravitational interactions or mergers between galaxies.</p>
      <p className="galaxy-intro-text">At the heart of many galaxies lie supermassive black holes, gravitational behemoths with masses millions to billions of times that of the Sun. These black holes, lurking in the centers of galaxies, exert a profound influence on their surroundings, shaping the dynamics of stars, gas, and dust within their gravitational grasp. Stars are the primary constituents of galaxies, responsible for illuminating the cosmic tapestry with their radiance. They form within the vast clouds of gas and dust scattered throughout galaxies, undergoing cycles of birth, evolution, and eventual demise. Supernova explosions, the dramatic deaths of massive stars, seed galaxies with heavy elements, enriching the interstellar medium and fostering the formation of new stars and planetary systems.</p>
      <p className="galaxy-intro-text">Scientists observe galaxies through various techniques, including optical telescopes, radio telescopes, and space-based observatories. Optical telescopes capture the light emitted by stars and other celestial objects, offering detailed images of galaxies and their constituent components. Radio telescopes detect radio waves emitted by galaxies, providing insights into the distribution of gas and magnetic fields within these cosmic structures.</p>
      <p className="galaxy-intro-text">Galaxies span a vast range of sizes, from dwarfs measuring only a few thousand light-years across to giants stretching hundreds of thousands of light-years in diameter. The Milky Way, our home galaxy, boasts a diameter of approximately 100,000 light-years, while giants like the Andromeda Galaxy extend over 220,000 light-years.</p>
      <p className="galaxy-intro-text">Galaxies stand as monumental cosmic entities, weaving together the fabric of the universe and offering windows into the mysteries of space and time. From their diverse shapes and sizes to the cosmic dramas unfolding within their depths, galaxies continue to captivate and inspire humanity's quest for understanding the cosmos.</p>
      <p className="galaxy-intro-text">Below, we can explore some of the most observed galaxies, exploring their size, type and distance from earth.</p>
</div>
      
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
                      <p className="galaxy-main-text">{galaxy.observation_history}</p>
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
                  <p className="galaxy-main-text">{galaxy.timeline}</p>
                </div>
                </div>
              </li>
            );
          })}


           <div className="galaxies-bottom-links">
          <Link to="/" className="galaxies-back-home">
            Home
          </Link>
        </div>
        </ul>

       
      </div>
    </>
  );
}
