import React, { useState, useContext } from "react";
import GithubContext from "../context/github/githubContext";
import AlertContext from "../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  console.log(alertContext);

  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alertContext.setAlert("Who do you want to search for?");
    } else {
      githubContext.onSearch(text);
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

export default Search;
