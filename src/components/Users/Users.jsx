import "./Users.css";
import { getUsers } from "../../utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers().then((response) => {
      setUserList(response.data.users);
      console.log(response.data.users);
    });
  }, []);

  return (
    <>
      <div className="user-page-container">
        <h1 className="user-page-title">Welcome to the users page</h1>

        <section>
          <ul className="users-page-list">
            {userList.map((user) => {
              return (
                <li key={user.id}>

                  <div className="user-container">
                  <p>{user.name}</p>
                  <p>{user.username}</p>
                  <img
                    src={user.avatar_url}
                    className="user-img"
                    alt={user.name}
                  />
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
