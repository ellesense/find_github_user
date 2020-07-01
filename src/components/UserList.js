import React, { Component } from "react";
import Loader from "./Loader";
import UserItem from "./UserItem";

export class UserList extends Component {
  renderUsers() {
    return this.props.users.map((user) => (
      <UserItem key={user.id} user={user} />
    ));
  }

  render() {
    return (
      <>
        {this.props.loading ? (
          <Loader />
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: "1rem",
            }}
          >
            {this.renderUsers()}
          </div>
        )}
      </>
    );
  }
}

export default UserList;
