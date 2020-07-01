import React, { Component } from "react";
import UserItem from "./UserItem";

export class UserList extends Component {
  state = {
    users: [
      {
        id: 1,
        login: "user 1",
        avatar_url: "",
        html_url: "",
      },
      {
        id: 2,
        login: "user 2",
        avatar_url: "",
        html_url: "",
      },
      {
        id: 3,
        login: "user 3",
        avatar_url: "",
        html_url: "",
      },
    ],
  };

  renderUsers() {
    return this.state.users.map((user) => (
      <UserItem key={user.id} user={user} />
    ));
  }

  render() {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "1rem",
        }}
      >
        {this.renderUsers()}
      </div>
    );
  }
}

export default UserList;
