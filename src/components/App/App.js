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

let newsData = {
  entertainment: entertainment,
  health: health,
  local: local,
  science: science,
  technology: technology
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      newsData: newsData,
      currentNewsSource: 'local',
      query: '',
    }
  }
  changeSource = (event) => {
    this.setState({currentNewsSource: event.target.name})
  }
  searchArticles = (query) => {
    let filteredArticles = this.state.newsData[this.state.currentNewsSource].filter(article => {
      return article.headline.toLowerCase().includes(query.toLowerCase())
    })
    this.setState({currentNewsSource: 'filtered', newsData: {...newsData, filtered: filteredArticles}})

  }
  render () {
    return (
      <div className="app">
        <h1 className="title">What's New?</h1>
        <Menu changeSource={this.changeSource}/>
        <Form search={this.searchArticles} />
        <NewsContainer currentNews={this.state.newsData[this.state.currentNewsSource]}/>
      </div>
    );
  }
}

export default App;
