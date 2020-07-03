import React, { useContext } from "react";
import Loader from "./Loader";
import UserItem from "./UserItem";
import GithubContext from "../context/github/githubContext";

const UserList = () => {
  const githubContext = useContext(GithubContext);

  const renderUsers = () => {
    return githubContext.users.map((user) => (
      <UserItem key={user.id} user={user} />
    ));
  };

  return (
    <>
      {githubContext.loading ? (
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
