/* eslint camelcase: ["error", {properties: "never"}]*/
/* eslint no-alert: 0*/
import React, {Component} from 'react';
import Token from './Token';
import {getNextTurn} from '../actions';
import 'whatwg-fetch';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: "player",
      boardId: null,
      turnCount: 0,
      columns: [new Array(6),
        new Array(6),
        new Array(6),
        new Array(6),
        new Array(6),
        new Array(6),
        new Array(6)]
    };

    this.initiateGame();
    this.handleClick = this.handleClick.bind(this);
  }

  initiateGame() {
    fetch('http://cd8e8382.ngrok.io/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        board: this.state.columns
      })

    })
    .then(response => {
      return response.json();
    })
    .then(json => {
      this.setState({boardId: json.id});
    }).catch(ex => {
      console.log('parsing failed', ex);
    });
  }

  handleClick(event) {
    const id = event.target.id;
    this.addToken(id);
    this.checkBoard();
  }

  checkBoard() {
    const id = this.state.boardId;
    fetch(`http://cd8e8382.ngrok.io/games/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        board: this.state.columns
      })

    })
    .then(response => {
      return response.json();
    })
    .then(json => {
      if (json.status === "Game Over") {
        alert(`Game Over ${this.state.turn} Won!`);
      } else {
        this.changeTurn();
      }
    }).catch(ex => {
      console.log('parsing failed', ex);
    });
  }

  addToken(col) {
    const arr = this.state.columns;
    switch (col) {
      case "A":
        arr[0] = this.setPlay(arr[0], col);
        break;
      case "B":
        arr[1] = this.setPlay(arr[1], col);
        break;
      case "C":
        arr[2] = this.setPlay(arr[2], col);
        break;
      case "D":
        arr[3] = this.setPlay(arr[3], col);
        break;
      case "E":
        arr[4] = this.setPlay(arr[4], col);
        break;
      case "F":
        arr[5] = this.setPlay(arr[5], col);
        break;
      case "G":
        arr[6] = this.setPlay(arr[6], col);
        break;
      default :
        return null;
    }
    this.setState({columns: arr});
  }

  setPlay(arr, col) {
    const index = arr.findIndex(x => x === undefined);
    arr[index] = {turn: this.state.turn, row: index, col: String(col)};
    this.sendMove(col, index);
    const newTurnCount = this.state.turnCount + 1;
    this.setState({turnCount: newTurnCount});
    return arr;
  }

  sendMove(col, index) {
    fetch('http://cd8e8382.ngrok.io/moves', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        coordinate: String(String(col) + String(index + 1)),
        player: this.state.turn,
        game_id: this.state.boardId
      })
    });
  }

  changeTurn() {
    if (this.state.turn === "player") {
      this.setState({turn: "cpu"});
      const obj = getNextTurn(this.state.columns, this.state.turnCount);
      this.setPlay(obj.arr, obj.col);
      this.checkBoard();
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
              <th><btn className="btn" id="A" onClick={this.handleClick}>A</btn></th>
              <th><btn className="btn" id="B" onClick={this.handleClick}>B</btn></th>
              <th><btn className="btn" id="C" onClick={this.handleClick}>C</btn></th>
              <th><btn className="btn" id="D" onClick={this.handleClick}>D</btn></th>
              <th><btn className="btn" id="E" onClick={this.handleClick}>E</btn></th>
              <th><btn className="btn" id="F" onClick={this.handleClick}>F</btn></th>
              <th><btn className="btn" id="G" onClick={this.handleClick}>G</btn></th>
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
