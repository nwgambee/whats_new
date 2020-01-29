import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import entertainment from '../../data/entertainment'
import health from '../../data/health'
import science from '../../data/science'
import technology from '../../data/technology'
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'
import Form from '../SearchForm/SearchForm'





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
      },
      currentNewsSource: 'local',
    }
  }
  changeSource = (event) => {
    this.setState({currentNewsSource: event.target.name})
  }

  render () {
    return (
      <div className="app">
        <h1>What's New?</h1>
        <Menu changeSource={this.changeSource}/>
        <Form />
        <NewsContainer currentNews={this.state.newsData[this.state.currentNewsSource]}/>
      </div>
    );
  }
}

export default App;
