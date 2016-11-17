import React, {PropTypes, Component} from 'react';

class Token extends Component {

  render() {
    const Color = this.props.color === "red" ? require("../assets/images/red.png") : require("../assets/images/black.png");
    return (
      <img src={Color}/>
    );
  }
}

Token.propTypes = {
  color: PropTypes.string.isRequired
};

export default Token;
