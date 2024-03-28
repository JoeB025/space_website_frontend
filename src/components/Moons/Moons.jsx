import "./Moons.css";
import { getMoons } from "../../utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Moons() {
  const [moonList, setMoonList] = useState([]);

  useEffect(() => {
    getMoons().then((response) => {
      setMoonList(response.data.moon);
      console.log(response.data.moon);
    });
  }, []);

  return (
    <>
      <div className="moon-page-container">
        <h1 className="moon-page-title">Welcome to the Moons page</h1>

        <section>
          <ul className="moon-page-list">
            {moonList.map((moon) => {
              return (
                <li key={moon.id}>

                  <div className="user-container">
                  <p>{moon.moon_name}</p>
                  <p>{moon.orbits}</p>
                  
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
}
