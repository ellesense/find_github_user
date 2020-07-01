import React from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Alert from "./components/Alert";
import UserList from "./components/UserList";
import Search from "./components/Search";
import Contact from "./components/Contact";
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
      <BrowserRouter>
        <Nav
          menuOne="Home"
          linkForMenuOne="/"
          menuTwo="Contact"
          linkForMenuTwo="/contact"
        />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <h1 style={{ textAlign: "center" }}>Find Dat GitHub User</h1>
                  <Search onSearch={this.onSearch} setAlert={this.setAlert} />
                  <Alert
                    showAlert={this.state.showAlert}
                    alertMsg={this.state.alertMsg}
                  />
                  <UserList
                    users={this.state.users}
                    loading={this.state.loading}
                  />
                </>
              )}
            />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
