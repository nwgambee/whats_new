import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import entertainment from '../../data/entertainment'
import health from '../../data/health'
import science from '../../data/science'
import technology from '../../data/technology'





class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <div className="app">
        YOUR CODE GOES HERE!
      </div>
    );
  }
}

export default App;
