import React, { useEffect, useState } from "react";
import User from "../User/User";
import "./Users.css";
import logo from "../../logo.svg";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(true);
      });
  }, []);

  return (
    <div className="users">
      {users.map((user) => (
        <User user={user} key={user.cell} />
      ))}
    </div>
  );
};

export default Users;
