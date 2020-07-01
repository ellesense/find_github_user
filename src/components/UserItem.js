import React from "react";

const UserItem = ({ login, avatar_url, html_url }) => {
  return (
    <div
      style={{
        margin: "20px",
        backgroundColor: "#DCDCDC",
        padding: "20px",
        borderRadius: "3px",
      }}
    >
      <img src={avatar_url} alt="avatar-img" />
      <h3>{login}</h3>
      <a href={html_url} style={{ textDecoration: "none" }}>
        GitHub Link
      </a>
    </div>
  );
};

export default UserItem;
