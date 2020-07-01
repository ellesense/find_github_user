import React from "react";
import Loader from "./Loader";
import UserItem from "./UserItem";

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

export default UserList;
