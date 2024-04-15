import "./BlackHoles.css";
import { getBlackHoles } from "../../utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Links.css";
import "./Loading.css"

export default function BlackHoles() {
  const [blackHolesList, setBlackHolesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlackHoles().then((response) => {
      setBlackHolesList(response.data.blackHoles);
      setLoading(false);
      console.log(response.data.blackHoles);
    });
  }, []);

  if (loading)
    return (
      <>
        <div className="loader-container">
          <p className="loading-all-articles">Loading Black Holes</p>
          <div className="loader"></div>
        </div>
      </>
    );

  return (
    <>
      <div className="bh-container">
        <div className="bh-page-title-container">
        <h1 className="bh-page-title">Black Holes</h1>
        </div>

        <ul className="bh-main-container">
          <h1>
            {blackHolesList.map((blackHoles) => {
              return (
                <li key={blackHoles.name}>
                  <div className="bh-data-container">
                    <div className="bh-left-container">
                      <h2 className="bh-title">{blackHoles.name}</h2>
                      <div className="bh-description-container">
                      <p className="bh-description">{blackHoles.description}</p>
                      </div>
                    </div>

                    <div className="bh-info-container">
                      <div className="bh-type-container">
                        <p>Type: {blackHoles.type}</p>
                      </div>

                      <div className="bh-distance-container">
                        <p className="bh-distance">
                          Distance from Earth: {blackHoles.distance}
                        </p>
                      </div>
                      <div className="bh-mass-container">
                        <p className="bh-mass">Mass: {blackHoles.mass}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </h1>
        </ul>

        <div className="black-holes-bottom-links">
          <Link to="/" className="black-holes-back-home">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
