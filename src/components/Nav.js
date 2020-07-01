import React from "react";
import PropTypes from "prop-types";

class Nav extends React.Component {
  static defaultProps = {
    menuOne: "Menu One",
    menuTwo: "Menu Two",
    menuThree: "Menu Three",
  };

  static propTypes = {
    menuOne: PropTypes.string,
    menuTwo: PropTypes.string,
    menuThree: PropTypes.string,
  };

  render() {
    return (
      <>
        <nav>
          <ul>
            <li>{this.props.menuOne}</li>
            <li>{this.props.menuTwo}</li>
            <li>{this.props.menuThree}</li>
          </ul>
        </nav>
      </>
    );
  }
}
export default Nav;
