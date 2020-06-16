import React, { Component } from 'react';

import './App.css';
import Sender from './Components/Sender'
import Receiver from './Components/Receiver'

//
// ReactReduxSenderReceiver
// Demonstrates the use of a Redux store to show two components interacting
//

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="">React/Redux Sender-Receiver</h1>
        <h3>Example to show the use of React/Redux</h3>
        <div className="component-container">
          <div className="row">
            <div className="col s12 m6">
              <Sender />
            </div>
            <div className="col s12 m6">
              <Receiver />
            </div>
          </div>
        </div>
      </div>
    );
  }
}




export default App;
