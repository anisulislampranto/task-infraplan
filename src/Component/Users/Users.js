import React, { useEffect, useState } from "react";
import User from "../User/User";
import "./Users.css";
import logo from "../../logo.svg";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://randomuser.me/api/?results=15")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img width={"400px"} src={logo} alt="" />
          <h2 style={{ textAlign: "center" }}>loading . . .</h2>
        </div>
      ) : (
        <div className="users">
          {users.map((user) => (
            <User user={user} key={user.cell} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
