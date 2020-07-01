import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Nav = ({ menuOne, menuTwo, linkForMenuOne, linkForMenuTwo }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={linkForMenuOne}>{menuOne}</Link>
          </li>
          <li>
            <Link to={linkForMenuTwo}>{menuTwo}</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

Nav.defaultProps = {
  menuOne: "Menu One",
  menuTwo: "Menu Two",
};

Nav.propTypes = {
  menuOne: PropTypes.string,
  menuTwo: PropTypes.string,
};

export default Nav;
