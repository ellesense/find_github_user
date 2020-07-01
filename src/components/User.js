import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import PropTypes from "prop-types";

export class User extends Component {
  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.login);
    this.props.fetchUserRepos(this.props.match.params.login, 4);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object,
    fetchSingleUser: PropTypes.func,
  };

  render() {
    const {
      name,
      avatar_url,
      html_url,
      location,
      bio,
      hireable,
      login,
      followers,
      following,
      public_repos,
    } = this.props.user;

    return (
      <>
        <Link to="/">Back to search</Link>
        {this.props.loading ? (
          <Loader />
        ) : (
          <div
            className="card"
            style={{
              boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
              width: "400px",
              margin: "40px auto",
            }}
          >
            <img
              src={avatar_url}
              alt="profile-img"
              style={{
                width: "150px",
                display: "block",
                borderRadius: "99px",
                margin: "auto",
              }}
            />
            <div style={{ padding: "35px" }}>
              <h3>
                <b>{name ? name : "No name"}</b>
              </h3>
              <p>
                <i className="fa fa-github" style={{ marginRight: "10px" }}></i>
                <a href={html_url}>{login}</a>
              </p>
              <p>
                <i
                  className="fa fa-map-marker"
                  style={{ marginRight: "10px" }}
                ></i>
                {location}
              </p>
              <p>
                <i
                  className="fa fa-quote-left"
                  style={{ marginRight: "10px" }}
                ></i>
                {bio ? bio : "Nothing to show"}
                <i
                  className="fa fa-quote-right"
                  style={{ marginLeft: "10px" }}
                ></i>
              </p>
              <p>Hireable? {hireable ? "Yes" : "Not at the moment"}</p>

              {/* Other information */}
              <div>Followers: {followers}</div>
              <div>Following: {following}</div>
              <div>Public Repos: {public_repos}</div>

              <div>
                <h3 style={{ marginTop: "12px" }}>Repositories</h3>
                <ul>
                  {this.props.repos.map((repo) => {
                    return (
                      <li key={repo.id} style={{ listStyle: "none" }}>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {repo.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default User;
