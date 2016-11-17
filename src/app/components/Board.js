import React, {Component} from 'react';
import Button from 'react-button';
import Token from './Token';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: "player",
      colA: new Array(6),
      colB: new Array(6),
      colC: new Array(6),
      colD: new Array(6),
      colE: new Array(6),
      colF: new Array(6),
      colG: new Array(6)
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const id = event.target.id;
    this.addToken(id);
    this.changeTurn();
  }

  addToken(col) {
    let arr = [];
    switch (col) {
      case "A":
        arr = this.state.colA;
        arr = this.setPlay(arr);
        this.setState({colA: arr});
        break;
      case "B":
        arr = this.state.colB;
        arr = this.setPlay(arr);
        this.setState({colB: arr});
        break;
      case "C":
        arr = this.state.colC;
        arr = this.setPlay(arr);
        this.setState({colC: arr});
        break;
      case "D":
        arr = this.state.colD;
        arr = this.setPlay(arr);
        this.setState({colD: arr});
        break;
      case "E":
        arr = this.state.colE;
        arr = this.setPlay(arr);
        this.setState({colE: arr});
        break;
      case "F":
        arr = this.state.colF;
        arr = this.setPlay(arr);
        this.setState({colF: arr});
        break;
      case "G":
        arr = this.state.colG;
        arr = this.setPlay(arr);
        this.setState({colG: arr});
        break;
      default :
        return null;
    }
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
              <td id="A1">{this.renderToken(this.state.colA[5])}</td>
              <td id="B1">{this.renderToken(this.state.colB[5])}</td>
              <td id="C1">{this.renderToken(this.state.colC[5])}</td>
              <td id="D1">{this.renderToken(this.state.colD[5])}</td>
              <td id="E1">{this.renderToken(this.state.colE[5])}</td>
              <td id="F1">{this.renderToken(this.state.colF[5])}</td>
              <td id="G1">{this.renderToken(this.state.colG[5])}</td>
            </tr>
            <tr>
              <td id="A2">{this.renderToken(this.state.colA[4])}</td>
              <td id="B2">{this.renderToken(this.state.colB[4])}</td>
              <td id="C2">{this.renderToken(this.state.colC[4])}</td>
              <td id="D2">{this.renderToken(this.state.colD[4])}</td>
              <td id="E2">{this.renderToken(this.state.colE[4])}</td>
              <td id="F2">{this.renderToken(this.state.colF[4])}</td>
              <td id="G2">{this.renderToken(this.state.colG[4])}</td>
            </tr>
            <tr>
              <td id="A3">{this.renderToken(this.state.colA[3])}</td>
              <td id="B3">{this.renderToken(this.state.colB[3])}</td>
              <td id="C3">{this.renderToken(this.state.colC[3])}</td>
              <td id="D3">{this.renderToken(this.state.colD[3])}</td>
              <td id="E3">{this.renderToken(this.state.colE[3])}</td>
              <td id="F3">{this.renderToken(this.state.colF[3])}</td>
              <td id="G3">{this.renderToken(this.state.colG[3])}</td>
            </tr>
            <tr>
              <td id="A4">{this.renderToken(this.state.colA[2])}</td>
              <td id="B4">{this.renderToken(this.state.colB[2])}</td>
              <td id="C4">{this.renderToken(this.state.colC[2])}</td>
              <td id="D4">{this.renderToken(this.state.colD[2])}</td>
              <td id="E4">{this.renderToken(this.state.colE[2])}</td>
              <td id="F4">{this.renderToken(this.state.colF[2])}</td>
              <td id="G4">{this.renderToken(this.state.colG[2])}</td>
            </tr>
            <tr>
              <td id="A5">{this.renderToken(this.state.colA[1])}</td>
              <td id="B5">{this.renderToken(this.state.colB[1])}</td>
              <td id="C5">{this.renderToken(this.state.colC[1])}</td>
              <td id="D5">{this.renderToken(this.state.colD[1])}</td>
              <td id="E5">{this.renderToken(this.state.colE[1])}</td>
              <td id="F5">{this.renderToken(this.state.colF[1])}</td>
              <td id="G5">{this.renderToken(this.state.colG[1])}</td>
            </tr>
            <tr>
              <td id="A6">{this.renderToken(this.state.colA[0])}</td>
              <td id="B6">{this.renderToken(this.state.colB[0])}</td>
              <td id="C6">{this.renderToken(this.state.colC[0])}</td>
              <td id="D6">{this.renderToken(this.state.colD[0])}</td>
              <td id="E6">{this.renderToken(this.state.colE[0])}</td>
              <td id="F6">{this.renderToken(this.state.colF[0])}</td>
              <td id="G6">{this.renderToken(this.state.colG[0])}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;
