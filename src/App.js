import React from "react";
import axios from "axios";
import Nav from "./components/Nav";
import Alert from "./components/Alert";
import UserList from "./components/UserList";
import Search from "./components/Search";
import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    showAlert: false,
    alertMsg: "",
  };

  onSearch = async (searchKey) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchKey}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  setAlert = (alertMsg) => {
    this.setState({ showAlert: true, alertMsg });
    setTimeout(() => {
      this.setState({ showAlert: false });
    }, 2500);
  };

  render() {
    return (
      <>
        <Nav menuOne="Home" menuTwo="About" menuThree="Contact" />
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Find Dat GitHub User</h1>
          <Search onSearch={this.onSearch} setAlert={this.setAlert} />
          <Alert
            showAlert={this.state.showAlert}
            alertMsg={this.state.alertMsg}
          />

          <UserList users={this.state.users} loading={this.state.loading} />
        </div>
      </>
    );
  }
}

export default App;
