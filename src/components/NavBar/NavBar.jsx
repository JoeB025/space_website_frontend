import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="top-bar">
        <div className="nav-left">
          <Link to="/" className="home-link">
            Home
          </Link>
        </div>

        <div className="nav-center">
          <Link to="articles" className="articles-link">
            Articles
          </Link>

          <Link to='topics' className="articles-link">
            Topics
          </Link>


          <Link to='users' className="articles-link">
            Users
          </Link>

          <Link to='moons' className="articles-link">
            Moons
          </Link>

          <Link to='black_holes' className="articles-link">
            Black Holes
          </Link>

          <Link to='astronomy_info' className="articles-link">
            Astronomy
          </Link>

          <Link to='galaxies' className="articles-link">
            Galaxies
          </Link>

          <Link to='stars' className="articles-link">
            Stars
          </Link>

          

          <div className="dropdown">
            <button className="dropdown-button">
              <i>Planets</i>
            </button>
            <div className="dropdown-content">
              <Link to="planets">All Planets</Link>
              <Link to="/planets/1">Mercury</Link>
              <Link to="/planets/2">Venus</Link>
              <Link to="/planets/3">Earth</Link>
              <Link to="/planets/4">Mars</Link>
              <Link to="/planets/6">Jupiter</Link>
              <Link to="/planets/7">Saturn</Link>
              <Link to="/planets/8">Uranus</Link>
              <Link to="/planets/9">Neptune</Link>
            </div>
          </div>
        </div>

        <div className="nav-right">
          <h3 className="sign-up-link">Sign-up</h3>
          <h4 className="Log-in-link">Log-in</h4>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
