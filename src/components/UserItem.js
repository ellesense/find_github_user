import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div
      style={{
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
        width: "200px",
        padding: "20px",
        margin: "auto",
      }}
    >
      <img
        src={avatar_url}
        style={{
          width: "70px",
          borderRadius: "99px",
          display: "block",
          margin: "auto",
        }}
        alt="avatar-img"
      />
      <Link
        to={`/user/${login}`}
        style={{
          textDecoration: "none",
          display: "block",
          textAlign: "center",
        }}
      >
        {login}
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object,
};

export default UserItem;
