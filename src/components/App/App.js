import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import entertainment from '../../data/entertainment'
import health from '../../data/health'
import science from '../../data/science'
import technology from '../../data/technology'
import NewsContainer from '../NewsContainer/NewsContainer'





class App extends Component {
  constructor() {
    super();
    this.state = {
      newsData: {
        entertainment: entertainment,
        health: health,
        local: local,
        science: science,
        technology: technology
      }
    }
  }

  render () {
    return (
      <div className="app">
        <h1>What's New?</h1>
        <Menu />
        <NewsContainer currentNews={this.state.newsData}/>
      </div>
    );
  }
}

export default App;
