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
          <Link to="articles" className="articles-link">All Articles</Link>
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
