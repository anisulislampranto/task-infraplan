import React from "react";
import "./User.css";

const User = ({ user }) => {
  console.log(user);
  return (
    <div className="user">
      <img className="image" src={user.picture.medium} alt="" />
      <div>
        <h3>
          {user.name.title} {user.name.first} {user.name.last}
        </h3>
        <p>
          <strong>{user.email}</strong>
        </p>
        <p></p>
        <p></p>
      </div>
      <span>{user.nat}</span>
    </div>
  );
};

export default User;
