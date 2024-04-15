import "./Header.css";
import { UserContext } from "../Users/singleUser/SingleUser";
import { useContext } from "react";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="logged-user-container">
        <div className="left"></div>
        <div className="right">
          <div className="user-header-container">
            <div className="user-header">
              <p>Logged in: {user.username}</p>
            </div>
            <div className="logged-in-img-container">
              <img
                className="logged-in-user-img"
                src={user.avatar_url}
                alt={user.name}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
