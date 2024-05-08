import "./Users.css";
import { getUsers } from "../../utils";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Links.css";
import { UserContext } from './singleUser/SingleUser';

export default function Users() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState([]);
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((response) => {
      setUserList(response.data.users);
      setLoading(false);
    });
  }, []);

  if (loading)
  return (
    <>
      <div className="loader-container">
        <p className="loading-text">Loading</p>
        <div className="loader"></div>
      </div>
    </>
  );

  return (
    <>
      <div className="user-page-container">
        <h1 className="user-page-title">Choose your user</h1>
        <section>
          <ul className="list-container">
            {userList.map((user) => {
              return (
                <li key={user.id} className="user-container-main" onClick={() => {{setUser(user)}; alert=(`Signed in as ${user.username}`)}}>
                  <div className="user-container-layout">
                    <div className="user-info-container">
                      <p className="user-name">{user.name}</p>
                      <p className="user-username">{user.username}</p>
                    </div>

                    <div className="user-img-container">
                      <img
                        src={user.avatar_url}
                        className="user-img"
                        alt={user.name}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <div className="users-bottom-links">
          <Link to="/" className="users-back-home">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
