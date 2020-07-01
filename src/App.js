import React from "react";
import Nav from "./components/Nav";
import UserList from "./components/UserList";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Nav menuOne="Home" menuTwo="About" menuThree="Contact" />
        <div className="container">
          <h1>Find Dat GitHub User</h1>
          <UserList />
        </div>
      </>
    );
  }
}

export default App;
