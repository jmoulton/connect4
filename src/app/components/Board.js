import React, {PropTypes, Component} from 'react';
import Button from 'react-button';
import Token from './Token';

class ConnectButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event);
  }

  render() {
    return (
      <Button onClick={this.handleClick}>{this.props.column}</Button>
    );
  }
}

class Board extends Component {

  render() {
    return (
      <div className="board">
        <table>
          <tbody>
            <tr>
              <th><ConnectButton column="A"/></th>
              <th><ConnectButton column="B"/></th>
              <th><ConnectButton column="C"/></th>
              <th><ConnectButton column="D"/></th>
              <th><ConnectButton column="E"/></th>
              <th><ConnectButton column="F"/></th>
              <th><ConnectButton column="G"/></th>
            </tr>
            <tr>
              <td><Token/></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ConnectButton.propTypes = {
  column: PropTypes.string.isRequired
};

export default Board;
