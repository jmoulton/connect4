import React, {PropTypes, Component} from 'react';

class Token extends Component {

  render() {
    // const Red = require("../assets/images/red.png");
    const Black = require("../assets/images/black.png");
    return (
      <img src={Black}/>
    );
  }
}

Token.propTypes = {
  color: PropTypes.string.isRequired
};

export default Token;
