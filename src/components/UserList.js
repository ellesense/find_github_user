import React from "react";
import Loader from "./Loader";
import UserItem from "./UserItem";
import PropTypes from "prop-types";

const UserList = ({ users, loading }) => {
  const renderUsers = () => {
    return users.map((user) => <UserItem key={user.id} user={user} />);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "1rem",
          }}
        >
          {renderUsers()}
        </div>
      )}
    </>
  );
};

UserList.propTypes = {
  loading: PropTypes.bool,
  users: PropTypes.array,
};

export default UserList;
