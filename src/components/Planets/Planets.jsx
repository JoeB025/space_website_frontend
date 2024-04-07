import "./Planets.css";
import { getPlanets, getImages } from "../../utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Planets() {
  const [planetList, setPlanetList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlanets().then((response) => {
      setPlanetList(response.data.planet);
      setLoading(false)
    });
  }, []);

  if (loading) return <p className="loading-home-page">Loading...</p>;

  return (
    <>
      <div className="container-planets">
        <h1 className="planet-page-title">Galactic Getaway</h1>
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
          <h3 className="sub-heading">Planets of our Solar System</h3>
          <div className="planets-intro-text-container">
            <p className="planets-intro-text">
              Our solar system is a vast and fascinating collection of celestial
              bodies that orbit around a central star, the Sun. It consists of
              the Sun, eight planets, their moons, dwarf planets, asteroids,
              comets, and other small celestial objects. Below, you can explore
              the planets in our solar system.
            </p>
            <p className="planets-intro-text">
              Below, you can explore the planets in our solar system.
            </p>
          </div>

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

              if (
                (planet.name !== "Sun" &&
                  planet.name !== "Pluto" &&
                  planet.name === "Mercury") ||
                planet.name === "Jupiter" ||
                planet.name === "Uranus"
              ) {
                return (
                  <h4 key={planet.name} className="planet-string">
                    <li>
                      <div className="planet-main-container">
                        <div className="planet-info-container">
                          <p className="planet-name">{planet.name}</p>
                          <p className="planet-type">
                            {planet.name} is classified as a{" "}
                            {planet.planet_type} celestial body, boasting an
                            average temperature of {planet.average_temp}℉. It
                            orbits the Sun at a distance of{" "}
                            {planet.distance_from_sun} million kilometers and
                            completes its orbit in {planet.orbital_period_years}{" "}
                            Earth years. Notably, {planet.name} hosts{" "}
                            {planet.number_of_moons} moons.
                          </p>
                          <div className="planet-quick-facts">
                            <p>
                              Highest Recorded Temperature:{" "}
                              {planet.highest_recorded_temp}℉
                            </p>
                            <p>
                              Lowest Recorded Temperature:{" "}
                              {planet.lowest_recorded_temp}℉
                            </p>
                          </div>
                        </div>

                        <div className="planet-image-container">
                          <img
                            src={planet.img_url}
                            className={className}
                            alt={planet.name}
                          />

                          <Link
                            to={`/planets/${planet.planets_id}`}
                            className="link-to-single-page"
                          >
                            <p>🚀 Click here to travel to {planet.name} 🛸</p>
                          </Link>
                        </div>
                      </div>
                    </li>
                  </h4>
                );
              } else if (
                planet.name !== "Sun" &&
                planet.name !== "Pluto" &&
                planet.name === "Earth"
              ) {
                return (
                  <h4 key={planet.name} className="planet-string">
                    <li>
                      <div className="planet-main-container">
                        <div className="planet-info-container">
                          <p className="planet-name">{planet.name}</p>
                          <p className="planet-type">
                            {planet.name}, positioned {planet.distance_from_sun}{" "}
                            million kilometers from the Sun, belongs to the
                            category of {planet.planet_type} planets. Notably,
                            Earth stands as the solitary planet in our Solar
                            System known to harbor life. Earth's unique
                            suitability for life arises from its optimal
                            distance from the Sun, ensuring stable surface
                            temperatures and the presence of liquid water—a
                            fundamental requirement for life as we know it.
                            Moreover, its temperate climate, protective
                            atmosphere, geological dynamism, and magnetosphere,
                            shielding it from harmful solar radiation,
                            collectively contribute to its habitability. In
                            terms of orbital dynamics, {planet.name} completes
                            an orbit around the Sun in approximately 365.25 days
                            on average. However, to maintain synchronization
                            with the astronomical year, leap years, occurring
                            roughly every four years, include an additional
                            day—February 29th—in the calendar. {planet.name} has{" "}
                            {planet.number_of_moons} moon, which illuminates the
                            night sky with its radiant presence, casting a
                            gentle glow upon the Earth's surface.
                          </p>
                          <div className="planet-quick-facts">
                            <p>
                              Highest Recorded Temperature:{" "}
                              {planet.highest_recorded_temp}℉
                            </p>
                            <p>
                              Lowest Recorded Temperature:{" "}
                              {planet.lowest_recorded_temp}℉
                            </p>
                          </div>
                        </div>

                        <div className="planet-image-container">
                          <img
                            src={planet.img_url}
                            className={className}
                            alt={planet.name}
                          />
                          <Link
                            to={`/planets/${planet.planets_id}`}
                            className="link-to-single-page"
                          >
                            <p>🚀 Click here to travel to {planet.name} 🛸</p>
                          </Link>
                        </div>
                      </div>
                    </li>
                  </h4>
                );
              } else if (
                (planet.name !== "Sun" &&
                  planet.name !== "Pluto" &&
                  planet.name === "Venus") ||
                planet.name === "Mars" ||
                planet.name === "Saturn" ||
                planet.name === "Neptune"
              ) {
                return (
                  <h4 key={planet.name} className="planet-string">
                    <li>
                      <div className="planet-main-container">
                        <div className="planet-image-container">
                          <img
                            src={planet.img_url}
                            className={className}
                            alt={planet.name}
                          />
                          <Link
                            to={`/planets/${planet.planets_id}`}
                            className="link-to-single-page"
                          >
                            <p>🚀 Click here to travel to {planet.name} 🛸</p>
                          </Link>
                        </div>

                        <div className="planet-info-container">
                          <p className="planet-name">{planet.name}</p>
                          <p className="planet-type">
                            {planet.name} is classified as a{" "}
                            {planet.planet_type} celestial body, boasting an
                            average temperature of {planet.average_temp}℉. It
                            orbits the Sun at a distance of{" "}
                            {planet.distance_from_sun} million kilometers and
                            completes its orbit in {planet.orbital_period_years}{" "}
                            Earth years. Notably, {planet.name} hosts{" "}
                            {planet.number_of_moons} moons.
                          </p>

                          <div className="planet-quick-facts">
                            <p>
                              Highest Recorded Temperature:{" "}
                              {planet.highest_recorded_temp}℉
                            </p>
                            <p>
                              Lowest Recorded Temperature:{" "}
                              {planet.lowest_recorded_temp}℉
                            </p>
                          </div>
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
            {planetList.map((planet) => {
              let className = "planet-order-images-bottom"; // Default className
              if (planet.name === "Mercury") {
                className += " mercury-image-bottom";
              } else if (planet.name === "Venus") {
                className += " venus-image-bottom";
              } else if (planet.name === "Earth") {
                className += " earth-image-bottom";
              } else if (planet.name === "Mars") {
                className += " mars-image-bottom";
              } else if (planet.name === "Jupiter") {
                className += " jupiter-image-bottom";
              } else if (planet.name === "Saturn") {
                className += " saturn-image-bottom";
              } else if (planet.name === "Uranus") {
                className += " uranus-image-bottom";
              } else if (planet.name === "Neptune") {
                className += " neptune-image-bottom";
              } else if (planet.name === "Sun") {
                className += " sun-image-bottom";
              } else if (planet.name === "Pluto") {
                className += " pluto-image-bottom";
              }

              return (
                <h5 key={planet.name}>
                  <li>
                    <div className="planet-image-container-bottom">
                      <img
                        src={planet.img_url}
                        className={className}
                        alt={planet.name}
                      />
                    </div>
                  </li>
                </h5>
              );
            })}
          </ul>
        </section>

        <div className="all-planet-bottom-links">
          <Link to="/" className="all-planets-back-home">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
