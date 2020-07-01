import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ onSearch, setAlert }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Who do you want to search for?");
    } else {
      onSearch(text);
      setText("");
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <form onSubmit={onSubmit}>
        <input
          style={{ fontSize: "12px", padding: "10px", width: "170px" }}
          type="text"
          name="text"
          value={text}
          onChange={onChange}
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
};

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
