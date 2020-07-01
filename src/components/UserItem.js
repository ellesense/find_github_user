import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div
      style={{
        margin: "20px",
        backgroundColor: "#DCDCDC",
        padding: "20px",
        borderRadius: "3px",
      }}
    >
      <img
        src={avatar_url}
        style={{ width: "70px", borderRadius: "99px" }}
        alt="avatar-img"
      />
      <h3>{login}</h3>

      <Link to={`/user/${login}`} style={{ textDecoration: "none" }}>
        GitHub Link
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object,
};

export default UserItem;
