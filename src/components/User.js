import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import PropTypes from "prop-types";

export class User extends Component {
  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.login);
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
            </div>
          </div>
        )}
      </>
    );
  }
}

export default User;
