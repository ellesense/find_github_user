import React from "react";
import Nav from "./components/Nav";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav menuOne="Home" menuTwo="About" menuThree="Contact" />
        <h1>GitHub User Finder</h1>
      </div>
    );
  }
}

export default App;
