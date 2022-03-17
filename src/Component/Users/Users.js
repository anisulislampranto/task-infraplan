import React, { useEffect, useState } from "react";
import User from "../User/User";
import "./Users.css";
import logo from "../../logo.svg";
import Navbar from "../Navbar/Navbar";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(users);

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
      <Navbar setSearchTerm={setSearchTerm} />
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
          {users
            .filter((user) => {
              if (
                user.name.title
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return user;
              } else if (
                user.name.first
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return user;
              } else if (
                user.name.last
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return user;
              }
            })
            .map((user) => (
              <User user={user} key={user.cell} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Users;
