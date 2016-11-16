import React, {Component} from 'react';
import {connect} from 'react-redux';
import ConnectFour from '../components/ConnectFour';

class App extends Component {
  render() {
    return (
      <div>
        <ConnectFour/>
      </div>
    );
  }
}

export default connect(
)(App);
