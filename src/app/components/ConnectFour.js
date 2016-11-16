import React, {Component} from 'react';
import Header from './Header';
import Board from './Board';

class ConnectFour extends Component {

  render() {
    return (
      <section className="main">
        <Header/>
        <Board/>
      </section>
    );
  }
}

export default ConnectFour;
