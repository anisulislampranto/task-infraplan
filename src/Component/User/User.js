import React from "react";
import "./User.css";

const User = ({ user }) => {
  return (
    <div style={{ display: "flex" }}>
      <div className="user">
        <img className="image" src={user.picture.medium} alt="" />
        <div style={{ width: "100%" }}>
          <h3 style={{ width: "100%" }}>
            {user.name.title} {user.name.first} {user.name.last}
          </h3>
          <p>
            <strong>{user.email}</strong>
          </p>
          <p>
            {user.location.street.number} {user.location.street.name}
            {user.location.state.city} {user.location.state.country}
            {user.location.state.postcode}
          </p>
        </div>
      </div>
      <span style={{ color: "grey", marginLeft: "-35px", marginTop: "20px" }}>
        {user.nat}
      </span>
    </div>
  );
};

export default User;
