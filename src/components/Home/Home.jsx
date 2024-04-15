import "./Home.css";
import "./Links.css"
import "./Images.css"
import "./Loading.css"
import { Link } from "react-router-dom";
import { getImages } from "../../utils";
import { useEffect, useState } from "react";

const Home = () => {
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getImages().then((response) => {
      setImageList(response.data.image);
      setLoading(false);
      console.log(response.data.image);
    });
  }, []);

  // if (loading) return <div className="loader"></div>

  if (loading)
  return (
    <>
      <div className="loader-container">
        <p className="loading-home">Loading</p>
        <div className="loader"></div>
      </div>
    </>
  );



  return (
    <>
      <div className="home-container">
        <h1 className="welcome-text-title">Galactic Gateway</h1>
        <p className="welcome-text">
          Explore the Worlds of Planets, Stars, Galaxies, and Moons
        </p>
      

        <ul className="home-img-container-main">
          {imageList.map((img) => {
            if (img.name === "solarSystem18") {
              return (
                <li key={img.id}>
                  <img
                    src={img.img_url}
                    alt={img.name}
                    className="home-background-img"
                  />
                </li>
              );
            }
          })}
        </ul>

        <div className="intro-text-container">
          
        <p className="intro-text">
            Welcome to our celestial haven, where the wonders of the cosmos
            await your exploration! Dive into the depths of space with our
            comprehensive space website, your portal to the mysteries and
            marvels of the universe.{" "}
          </p>
          <p className="intro-text">
            Embark on a journey through the vast expanse of space as you peruse
            our collection of articles spanning a multitude of captivating
            topics. From the fiery furnaces of distant stars to the swirling
            galaxies that adorn the cosmic tapestry, each article offers a
            glimpse into the breathtaking beauty and unfathomable complexity of
            the cosmos. Discover the intricacies of planetary systems, from the
            familiar worlds of our own solar system to the exotic exoplanets
            orbiting distant stars. Delve into the enigmatic realms of dwarf
            planets and moons, where hidden treasures and untold stories await
            those who dare to explore.{" "}
          </p>

          <p className="intro-text">
            Join us as we unravel the mysteries of the universe, one starry-eyed
            article at a time. Whether you're an amateur stargazer or a seasoned
            astronomer, there's something for everyone in our celestial library.
            So sit back, relax, and let your imagination soar as we embark on an
            unforgettable cosmic odyssey together. Welcome to the wonders of
            space!
          </p>
        </div>
        <p className="portfolio-link">👩🏻‍🚀🧑🏿‍🚀👩🏻‍🚀👨🏾‍🚀🧑🏾‍🚀</p>
        <ul className="home-img-container-bottom">
          {imageList.map((img) => {
            if (img.name === "solarSystem20") {
              return (
                <li key={img.id}>
                  <img
                    src={img.img_url}
                    alt={img.name}
                    className="home-background-img-bottom"
                  />
                </li>
              );
            }
          })}
        </ul>



        {/* <p className="portfolio-link">Link to portfolio page</p> */}
        
      </div>
    </>
  );
};

export default Home;
