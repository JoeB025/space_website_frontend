import "./Planets.css";
import { getPlanets, getImages } from "../../utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Planets() {
  const [planetList, setPlanetList] = useState([]);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    getPlanets().then((response) => {
      setPlanetList(response.data.planet);
      console.log(response.data.planet[0].name);
    });
  }, []);

  useEffect(() => {
    getImages().then((response) => {
      setImageList(response.data.image);
    });
  }, []);

  return (
    <>
      <div className="container-planets">
        <h1 className="planet-page-title">Welcome to the Planets Page!</h1>
        <section className="planet-img-top-section">
          <ul className="planet-image-list-top">
            {planetList.map((img) => {
              let className = "planet-order-images-top"; // Default className
              if (img.name === "Mercury") {
                className += " mercury-image-top";
              } else if (img.name === "Venus") {
                className += " venus-image-top";
              } else if (img.name === "Earth") {
                className += " earth-image-top";
              } else if (img.name === "Mars") {
                className += " mars-image-top";
              } else if (img.name === "Jupiter") {
                className += " jupiter-image-top";
              } else if (img.name === "Saturn") {
                className += " saturn-image-top";
              } else if (img.name === "Uranus") {
                className += " uranus-image-top";
              } else if (img.name === "Neptune") {
                className += " neptune-image-top";
              } else if (img.name === "Pluto") {
                className += " pluto-image-top";
              }

              if (img.name !== "Sun") {
                return (
                  <h2 key={img.name}>
                    <li>
                      <div className="planet-image-container-top">
                        <img
                          src={img.img_url}
                          className={className}
                          alt={img.name}
                        />
                      </div>
                    </li>
                  </h2>
                );
              }
            })}
          </ul>
        </section>

        <section>
          <h3 className="sub-heading">Info on individual planets:</h3>
          <ul className="planet-list">
            {planetList.map((planet) => {

let className = "planet-order-images-mid"; // Default className
              if (planet.name === "Mercury") {
                className += " mercury-image-mid";
              } else if (planet.name === "Venus") {
                className += " venus-image-mid";
              } else if (planet.name === "Earth") {
                className += " earth-image-mid";
              } else if (planet.name === "Mars") {
                className += " mars-image-mid";
              } else if (planet.name === "Jupiter") {
                className += " jupiter-image-mid";
              } else if (planet.name === "Saturn") {
                className += " saturn-image-mid";
              } else if (planet.name === "Uranus") {
                className += " uranus-image-mid";
              } else if (planet.name === "Neptune") {
                className += " neptune-image-mid";
              } else if (planet.name === "Pluto") {
                className += " pluto-image-mid";
              }

              if (planet.name !== "Sun" && planet.name !== "Pluto") {
                return (
                  <h4 key={planet.name} className="planet-string">
                    <li>
                      <div className="planet-main-container">
                        <div className="planet-info-container">
                          <p className="planet-name">{planet.name}</p>
                          <p className="planet-type">
                            {planet.name} is a {planet.planet_type} planet. It
                            is {planet.distance_from_sun} million km from the
                            Sun.
                          </p>
                          <p className="number-of-moons">
                            Number of Moons: {planet.number_of_moons}
                          </p>
                        </div>

                        <div className="article-image-container">
                          <img
                            src={planet.img_url}
                            className={className}
                            alt={planet.name}
                          />
                        </div>
                      </div>
                    </li>
                  </h4>
                );
              }
            })}
          </ul>
        </section>

        <section className="planet-img-bottom-section">
          <ul className="planet-image-list-bottom">
            {planetList.map((img) => {
              let className = "planet-order-images-bottom"; // Default className
              if (img.name === "Mercury") {
                className += " mercury-image-bottom";
              } else if (img.name === "Venus") {
                className += " venus-image-bottom";
              } else if (img.name === "Earth") {
                className += " earth-image-bottom";
              } else if (img.name === "Mars") {
                className += " mars-image-bottom";
              } else if (img.name === "Jupiter") {
                className += " jupiter-image-bottom";
              } else if (img.name === "Saturn") {
                className += " saturn-image-bottom";
              } else if (img.name === "Uranus") {
                className += " uranus-image-bottom";
              } else if (img.name === "Neptune") {
                className += " neptune-image-bottom";
              } else if (img.name === "Sun") {
                className += " sun-image-bottom";
              } else if (img.name === "Pluto") {
                className += " pluto-image-bottom";
              }

              return (
                <h5 key={img.name}>
                  <li>
                    <div className="planet-image-container-bottom">
                      <img
                        src={img.img_url}
                        className={className}
                        alt={img.name}
                      />
                    </div>
                  </li>
                </h5>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
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
