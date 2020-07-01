import React from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Alert from "./components/Alert";
import UserList from "./components/UserList";
import Search from "./components/Search";
import User from "./components/User";
import Contact from "./components/Contact";
import "./App.css";

class App extends React.Component {
  state = {
    user: {},
    repos: [],
    users: [],
    loading: false,
    showAlert: false,
    alertMsg: "",
  };

  onSearch = async (searchKey) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchKey}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  fetchSingleUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };

  fetchUserRepos = async (username, reposPerPage) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=${reposPerPage}&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ repos: res.data, loading: false });
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
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  fetchSingleUser={this.fetchSingleUser}
                  fetchUserRepos={this.fetchUserRepos}
                  user={this.state.user}
                  repos={this.state.repos}
                  loading={this.state.loading}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
