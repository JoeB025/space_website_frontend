import "./NavBar.css";
import "./DropDown.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <div className="top-bar-container">
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

          <div className="dropdown">
            <button className="dropdown-button">
              <p>Planets ⌵</p>
            </button>
            <div className="dropdown-content-planets">
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

          <div className="dropdown">
            <button className="dropdown-button">
            <p>Explore ⌵</p>      
            </button>
            <div className="dropdown-content-explore">
  <Link to="moons">Moons</Link>
          <Link to="galaxies">Galaxies</Link>
          <Link to="stars">Stars</Link>
          <Link to="black_holes">Black Holes</Link>
          <Link to="astronomy_info">Celestial Entities</Link>
            </div>
          </div>
        

     
        </div>

        <div className="nav-right">
          <Link to="users" className="articles-link-user">
            Users 
          </Link>
        </div>
      </nav>
      </div>
    </>
  );
};

export default NavBar;
