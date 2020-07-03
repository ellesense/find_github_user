import React, { useReducer } from "react";
import axios from "axios";
import githubReducer from "./githubReducer";
import GithubContext from "./githubContext";
import { SEARCH_USERS, SET_LOADING, GET_REPOS, GET_USER } from "../types";

// for deployment
let githubClientID;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientID = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GIHUB_CLIENT_SECRET;
}

const githubApiUrl = "https://api.github.com";

// create context component
const GithubStateProvider = (props) => {
  const initState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    showAlert: false,
    alertMsg: "",
  };
  const [state, dispatch] = useReducer(githubReducer, initState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const onSearch = async (searchKey) => {
    setLoading();
    const res = await axios.get(
      `${githubApiUrl}/search/users?q=${searchKey}&client_id=${githubClientID}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  const fetchSingleUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `${githubApiUrl}/users/${username}?client_id=${githubClientID}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  const fetchUserRepos = async (username, reposPerPage) => {
    setLoading();
    const res = await axios.get(
      `${githubApiUrl}/users/${username}/repos?per_page=${reposPerPage}&sort=created:asc&client_id=${githubClientID}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        alertMsg: state.alertMsg,
        onSearch,
        fetchSingleUser,
        fetchUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubStateProvider;
