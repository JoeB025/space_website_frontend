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

          <Link to="articles" className="articles-link">Articles</Link>
        
        <div className ='dropdown'>
          <button className="dropdown-button">
            <i>Planets</i>
          </button>
          <div className='dropdown-content'>
          <Link to="planets">All Planets</Link>
            <Link to="Mercury">Mercury</Link>
            <Link to="Venus">Venus</Link>
            <Link to="Earth">Earth</Link>
            <Link to="Mars">Mars</Link>
            <Link to="Jupiter">Jupiter</Link>
            <Link to="Saturn">Saturn</Link>
            <Link to="Uranus">Uranus</Link>
            <Link to="Neptune">Neptune</Link>
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
