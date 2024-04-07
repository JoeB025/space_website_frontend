import "./Sun.css";
import "./Stars.css";
import "./Container.css";
import { getStars } from "../../utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Links.css";

export default function StarData() {
  const [starsList, setStarsList] = useState([]);

  useEffect(() => {
    getStars().then((response) => {
      setStarsList(response.data.stars);
    });
  }, []);

  return (
    <>
      <div className="star-page-container">
        <div className="star-intro-heading-container">
          <div className="star-icon-container">
            <div className="blue-star-icon">
              <i class="fa-regular fa-star"></i>
            </div>
            <div className="white-star-icon">
              <i class="fa-regular fa-star"></i>
            </div>
            <div className="yellow-star-icon">
              <i class="fa-regular fa-star"></i>
            </div>
            <div className="orange-star-icon">
              <i class="fa-regular fa-star"></i>
            </div>
            <div className="red-star-icon">
              <i class="fa-regular fa-star"></i>
            </div>
          </div>
          <h1 className="stars-intro-heading">Stars</h1>

          <div className="star-icon-container">
            <div className="red-star-icon">
              <i class="fa-regular fa-star"></i>
            </div>
            <div className="orange-star-icon">
              <i class="fa-regular fa-star"></i>
            </div>
            <div className="yellow-star-icon">
              <i class="fa-regular fa-star"></i>
            </div>
            <div className="white-star-icon">
              <i class="fa-regular fa-star"></i>
            </div>
            <div className="blue-star-icon">
              <i class="fa-regular fa-star"></i>
            </div>
          </div>
        </div>

        <p className="stars-intro-text">
          Welcome to our stellar journey into the captivating world of stars! On
          this page, we'll embark on an exploration of these celestial wonders
          that light up the night sky and fill our universe with brilliance.
          From their mesmerizing beauty to their incredible diversity, join us
          as we uncover the secrets of stars and learn about their fascinating
          roles in the cosmos. The first celestial object we'll delve into is
          none other than our very own star, commonly known as the Sun.
        </p>

        <ul className="stars-list-container">
          <h1>
            {starsList.map((star) => {
              if (star.name === "Sun") {
                return (
                  <li key={star.name}>
                    <div className="sun-container">
                      <div className="sun-title-container">
                        <p className="sun-title">The {star.name}</p>
                      </div>
                      <div className="sun-main-container">
                        <div className="sun-facts-container">
                          <p className="sun-facts">Type: {star.type}</p>
                          <p className="sun-facts">
                            Luminosity: {star.luminosity}
                          </p>
                          <p className="sun-facts">Age: {star.age}</p>

                          <p className="sun-facts">
                            Temperature: {star.temperature}
                          </p>
                          <p className="sun-facts">Radius: {star.radius}</p>
                          <p className="sun-facts">Mass: {star.mass}</p>
                        </div>
                        <div className="sun-description-container">
                          <p className="sun-description">
                            Our Sun, the radiant heart of our solar system, is a
                            dazzling celestial body that serves as the primary
                            source of light and energy for our planet Earth.
                            Despite its familiarity, the Sun is more than just a
                            glowing orb in the sky—it is a star, and one of
                            billions scattered throughout the vast expanse of
                            the universe.
                          </p>
                          <p className="sun-description">
                            At its core, the Sun is a massive, luminous sphere
                            primarily composed of hydrogen and helium gases
                            undergoing nuclear fusion. Through this process,
                            immense gravitational pressure causes hydrogen atoms
                            to fuse together, releasing an incredible amount of
                            energy in the form of light and heat. This
                            continuous fusion reaction not only sustains the
                            Sun's luminosity but also generates the intense
                            radiation that bathes our solar system.
                          </p>
                          <p className="sun-description">
                            As a star, the Sun plays a pivotal role in shaping
                            the dynamics of our solar system. Its gravitational
                            influence governs the orbits of planets, moons,
                            asteroids, and comets, binding them in an intricate
                            cosmic dance. The warmth and light emitted by the
                            Sun drive Earth's climate, weather patterns, and the
                            photosynthetic processes that sustain life on our
                            planet.
                          </p>
                          <p className="sun-description">
                            Moreover, the Sun serves as a cosmic alchemist,
                            synthesizing a wide array of chemical elements
                            within its core. Through nuclear fusion, hydrogen
                            atoms fuse to form helium, releasing energy in the
                            process. This fusion process also gives rise to
                            heavier elements such as carbon, oxygen, and iron,
                            which are subsequently dispersed into space through
                            stellar processes like solar flares and coronal mass
                            ejections.
                          </p>
                          <p className="sun-description">
                            In essence, the Sun is not only the lifeblood of our
                            solar system but also a cosmic crucible where the
                            building blocks of life and matter are forged. Its
                            radiant energy sustains life on Earth, while its
                            elemental output enriches the cosmos with the
                            diverse array of elements found on our planet and
                            beyond. Truly, the Sun is a stellar marvel whose
                            brilliance and significance extend far beyond the
                            bounds of our world.
                          </p>
                        </div>
                      </div>

                      <div className="sun-bottom-container">
                        <div className="sun-description-container-p2">
                          <p className="sun-description-p2">
                            The Sun is not only the lifeblood of our solar
                            system but also a cosmic crucible where the building
                            blocks of life and matter are forged. Its radiant
                            energy sustains life on Earth, while its elemental
                            output enriches the cosmos with the diverse array of
                            elements found on our planet and beyond. Truly, the
                            Sun is a stellar marvel whose brilliance and
                            significance extend far beyond the bounds of our
                            world.
                          </p>
                        </div>
                        <div className="sun-img-container">
                          <img
                            src={star.img_url}
                            className="sun-image"
                            alt={star.topic}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li key={star.name}>
                    <div className="star-data-container">
                      <p className="star-name">{star.name}</p>
                      <p>Type: {star.type}</p>
                      <p>Luminosity: {star.luminosity}</p>
                      <p>Age: {star.age}</p>
                      <p>Radius: {star.radius}</p>
                      <p>Size compared to our Sun: {star.size_comparison}</p>
                      <p>Temperature: {star.temperature}</p>
                      <p>Description: {star.description}</p>
                      <p>Mass: {star.mass}</p>

                      <div className="star-img-container">
                        <img
                          src={star.img_url}
                          className="star-image"
                          alt={star.topic}
                        />
                      </div>
                    </div>
                  </li>
                );
              }
            })}
          </h1>
        </ul>

        <div className="stars-bottom-links">
          <Link to="/" className="stars-back-home">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
