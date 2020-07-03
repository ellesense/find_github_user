import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Alert from "./components/Alert";
import UserList from "./components/UserList";
import Search from "./components/Search";
import User from "./components/User";
import Contact from "./components/Contact";
import GithubStateProvider from "./context/github/githubStateProvider";
import AlertStateProvider from "./context/alert/alertStateProvider";
import "./App.css";

const App = () => {
  return (
    <GithubStateProvider>
      <AlertStateProvider>
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
                    <h1 style={{ textAlign: "center" }}>
                      Find Dat GitHub User
                    </h1>
                    <Search />
                    <Alert />
                    <UserList />
                  </>
                )}
              />
              <Route exact path="/contact" component={Contact} />
              <Route
                exact
                path="/user/:login"
                render={(props) => <User {...props} />}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertStateProvider>
    </GithubStateProvider>
  );
};

export default App;
