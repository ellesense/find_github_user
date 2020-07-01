import React from "react";
import PropTypes from "prop-types";

const Nav = ({ menuOne, menuTwo, menuThree }) => {
  return (
    <>
      <nav>
        <ul>
          <li>{menuOne}</li>
          <li>{menuTwo}</li>
          <li>{menuThree}</li>
        </ul>
      </nav>
    </>
  );
};

Nav.defaultProps = {
  menuOne: "Menu One",
  menuTwo: "Menu Two",
  menuThree: "Menu Three",
};

Nav.propTypes = {
  menuOne: PropTypes.string,
  menuTwo: PropTypes.string,
  menuThree: PropTypes.string,
};

export default Nav;
