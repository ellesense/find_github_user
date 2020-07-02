import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Alert from "./components/Alert";
import UserList from "./components/UserList";
import Search from "./components/Search";
import User from "./components/User";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const onSearch = async (searchKey) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchKey}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  const fetchSingleUser = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data);
    setLoading(false);
  };

  const fetchUserRepos = async (username, reposPerPage) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=${reposPerPage}&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);
  };

  const setAlert = (alertMsg) => {
    setShowAlert(true);
    setAlertMsg(alertMsg);
    setTimeout(() => {
      setShowAlert(false);
    }, 2500);
  };

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
                <Search onSearch={onSearch} setAlert={setAlert} />
                <Alert showAlert={showAlert} alertMsg={alertMsg} />
                <UserList users={users} loading={loading} />
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
                fetchSingleUser={fetchSingleUser}
                fetchUserRepos={fetchUserRepos}
                user={user}
                repos={repos}
                loading={loading}
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
