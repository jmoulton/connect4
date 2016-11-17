import React, {Component} from 'react';
import Button from 'react-button';
import Token from './Token';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: "player",
      columns: [new Array(6),
        new Array(6),
        new Array(6),
        new Array(6),
        new Array(6),
        new Array(6),
        new Array(6)]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const id = event.target.id;
    this.addToken(id);
    this.checkBoard();
    this.changeTurn();
  }

  checkBoard() {
  }

  addToken(col) {
    const arr = this.state.columns;
    switch (col) {
      case "A":
        arr[0] = this.setPlay(arr[0]);
        break;
      case "B":
        arr[1] = this.setPlay(arr[1]);
        break;
      case "C":
        arr[2] = this.setPlay(arr[2]);
        break;
      case "D":
        arr[3] = this.setPlay(arr[3]);
        break;
      case "E":
        arr[4] = this.setPlay(arr[4]);
        break;
      case "F":
        arr[5] = this.setPlay(arr[5]);
        break;
      case "G":
        arr[6] = this.setPlay(arr[6]);
        break;
      default :
        return null;
    }
    this.setState({columns: arr});
  }

  setPlay(arr) {
    const index = arr.findIndex(x => x === undefined);
    arr[index] = {turn: this.state.turn};
    return arr;
  }

  changeTurn() {
    if (this.state.turn === "player") {
      this.setState({turn: "cpu"});
    } else {
      this.setState({turn: "player"});
    }
  }

  renderToken(token) {
    if (token === undefined) {
    } else {
      const color = token.turn === "player" ? "red" : "black";
      return (<Token color={color}/>);
    }
  }

  render() {
    const columns = this.state.columns;
    return (
      <div className="board">
        <table>
          <tbody>
            <tr>
              <th><Button id="A" onClick={this.handleClick}>A</Button></th>
              <th><Button id="B" onClick={this.handleClick}>B</Button></th>
              <th><Button id="C" onClick={this.handleClick}>C</Button></th>
              <th><Button id="D" onClick={this.handleClick}>D</Button></th>
              <th><Button id="E" onClick={this.handleClick}>E</Button></th>
              <th><Button id="F" onClick={this.handleClick}>F</Button></th>
              <th><Button id="G" onClick={this.handleClick}>G</Button></th>
            </tr>
            <tr>
              <td id="A1">{this.renderToken(columns[0][5])}</td>
              <td id="B1">{this.renderToken(columns[1][5])}</td>
              <td id="C1">{this.renderToken(columns[2][5])}</td>
              <td id="D1">{this.renderToken(columns[3][5])}</td>
              <td id="E1">{this.renderToken(columns[4][5])}</td>
              <td id="F1">{this.renderToken(columns[5][5])}</td>
              <td id="G1">{this.renderToken(columns[6][5])}</td>
            </tr>
            <tr>
              <td id="A2">{this.renderToken(columns[0][4])}</td>
              <td id="B2">{this.renderToken(columns[1][4])}</td>
              <td id="C2">{this.renderToken(columns[2][4])}</td>
              <td id="D2">{this.renderToken(columns[3][4])}</td>
              <td id="E2">{this.renderToken(columns[4][4])}</td>
              <td id="F2">{this.renderToken(columns[5][4])}</td>
              <td id="G2">{this.renderToken(columns[6][4])}</td>
            </tr>
            <tr>
              <td id="A3">{this.renderToken(columns[0][3])}</td>
              <td id="B3">{this.renderToken(columns[1][3])}</td>
              <td id="C3">{this.renderToken(columns[2][3])}</td>
              <td id="D3">{this.renderToken(columns[3][3])}</td>
              <td id="E3">{this.renderToken(columns[4][3])}</td>
              <td id="F3">{this.renderToken(columns[5][3])}</td>
              <td id="G3">{this.renderToken(columns[6][3])}</td>
            </tr>
            <tr>
              <td id="A4">{this.renderToken(columns[0][2])}</td>
              <td id="B4">{this.renderToken(columns[1][2])}</td>
              <td id="C4">{this.renderToken(columns[2][2])}</td>
              <td id="D4">{this.renderToken(columns[3][2])}</td>
              <td id="E4">{this.renderToken(columns[4][2])}</td>
              <td id="F4">{this.renderToken(columns[5][2])}</td>
              <td id="G4">{this.renderToken(columns[6][2])}</td>
            </tr>
            <tr>
              <td id="A5">{this.renderToken(columns[0][1])}</td>
              <td id="B5">{this.renderToken(columns[1][1])}</td>
              <td id="C5">{this.renderToken(columns[2][1])}</td>
              <td id="D5">{this.renderToken(columns[3][1])}</td>
              <td id="E5">{this.renderToken(columns[4][1])}</td>
              <td id="F5">{this.renderToken(columns[5][1])}</td>
              <td id="G5">{this.renderToken(columns[6][1])}</td>
            </tr>
            <tr>
              <td id="A6">{this.renderToken(columns[0][0])}</td>
              <td id="B6">{this.renderToken(columns[1][0])}</td>
              <td id="C6">{this.renderToken(columns[2][0])}</td>
              <td id="D6">{this.renderToken(columns[3][0])}</td>
              <td id="E6">{this.renderToken(columns[4][0])}</td>
              <td id="F6">{this.renderToken(columns[5][0])}</td>
              <td id="G6">{this.renderToken(columns[6][0])}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;
