import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = { text: "" };

  static propTypes = {
    onSearch: PropTypes.func,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.text === "") {
      this.props.setAlert("Who do you want to search for?");
    } else {
      this.props.onSearch(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center", margin: "20px" }}>
        <form onSubmit={this.onSubmit}>
          <input
            style={{ fontSize: "12px", padding: "10px", width: "170px" }}
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
            placeholder="Search for a user"
          />
          <input
            style={{ padding: "10px", margin: "8px", fontSize: "12px" }}
            type="submit"
            value="Search"
          />
        </form>
      </div>
    );
  }
}

export default Search;
