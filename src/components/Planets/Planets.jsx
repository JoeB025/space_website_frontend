import "./Planets.css";
import { getPlanets, getImages } from "../../utils";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Planets() {

  const [planetList, setPlanetList] = useState([])
  const [imageList, setImageList] = useState([])

  useEffect(() => {
    getPlanets().then((response) => {
      setPlanetList(response.data.planet)
      console.log(response.data.planet[0].name)
    });
  }, []);

  useEffect(() => {
    getImages().then((response) => {
      setImageList(response.data.image)
      console.log(response.data.image)
    });
  }, []);



  return (
    <>


    <div className="container-planets">


{/* <ul className="solar-system-planets">
  {imageList.map((img) => {
    if (img.name === 'solarSystem8') {
      return (
        <li key={img.id}>
          <img src={img.img_url} alt={img.name} className="solar-system-img" />
        </li>
      )
    }
  })}

</ul> */}

    <section>

  <ul className="planet-image-list">
    {planetList.map((img) => {
      let className = 'planet-order-images'; // Default className
      if (img.name === 'Mercury') {
        className += ' mercury-image-string';
      } else if (img.name === 'Venus') {
        className += ' venus-image-string';
      } else if (img.name === 'Earth') {
        className += ' earth-image-string';
      } else if (img.name === 'Mars') {
        className += ' mars-image-string';
      } else if (img.name === 'Jupiter') {
        className += ' jupiter-image-string';
      } else if (img.name === 'Saturn') {
        className += ' saturn-image-string';
      } else if (img.name === 'Uranus') {
        className += ' uranus-image-string';
      } else if (img.name === 'Neptune') {
        className += ' neptune-image-string';
      } else if (img.name === 'Sun') {
        className += ' sun-image-string';
      } else if (img.name === 'Pluto') {
        className += ' pluto-image-string';
      } 

      return (
        <h1 key={img.name} className="planet-container">
          <li>
            <div className="planet-image-container">
              <img
                src={img.img_url}
                className={className}
                alt={img.name}
              />
            </div>
          </li>
        </h1>
      );
    })}
  </ul>
</section>






      <section>
        <p className="planet-page-title">Welcome to the Planets Page!</p>
      <ul className="planet-list">
      {planetList.map((planet) => {
        return (

          <h2 key={planet.name} className="planet-string">

            <li>
              <div className="planet-main-container">
                <div className="planet-info-container">
                  <p className="planet-name">{planet.name}</p>
                  <p className="planet-type">{planet.name} is a {planet.planet_type} planet.</p>
                  <p className="distance_from_sun">{planet.name} is {planet.distance_from_sun} million km from the Sun.</p>
                  <p className="number-of-moons">{planet.name} has {planet.number_of_moons} moons.</p>
                </div>
                <div className="article-image-container">
                    <img
                      src={planet.img_url}
                      className="planet-image"
                      alt={planet.name}
                    />
                  </div>
              </div>
            </li>

          </h2>
        )
      })}


      </ul>
      
      
      </section>

    </div>
    </>
  )
}



/*

Mercury: Diameter of about 4,880 kilometers (3,032 miles).
Venus: Diameter of about 12,104 kilometers (7,521 miles).
Earth: Diameter of about 12,742 kilometers (7,918 miles).
Mars: Diameter of about 6,779 kilometers (4,212 miles).
Jupiter: Diameter of about 139,820 kilometers (86,881 miles).
Saturn: Diameter of about 116,460 kilometers (72,366 miles).
Uranus: Diameter of about 50,724 kilometers (31,518 miles).
Neptune: Diameter of about 49,244 kilometers (30,598 miles).
These sizes are approximate and can vary slightly depending on how they are measured and defined.

*/