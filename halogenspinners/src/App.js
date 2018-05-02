import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import Buttons from './Button.js';
import AlertDismissable from './AlertDismissable.js';
import PulseLoaderz from './Halogeniumm.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React with Halogen Spinners</h1>

      </header>

        <Buttons />
        <AlertDismissable />
        <div class="center"></div>
        <PulseLoaderz />


      </div>
    );
  }
}

export default App;
