import React, {PropTypes, Component} from 'react';
import Button from 'react-button';

class ConnectButton extends Component {
  render() {
    return (
      <Button>This</Button>
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
              <th><ConnectButton coordinate="A"/></th>
              <th><ConnectButton coordinate="B"/></th>
              <th><ConnectButton coordinate="C"/></th>
              <th><ConnectButton coordinate="D"/></th>
              <th><ConnectButton coordinate="E"/></th>
              <th><ConnectButton coordinate="F"/></th>
              <th><ConnectButton coordinate="G"/></th>
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
  coordinate: PropTypes.string.isRequired
};

export default Board;
