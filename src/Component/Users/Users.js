import React, { useEffect, useState } from "react";
import User from "../User/User";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
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
