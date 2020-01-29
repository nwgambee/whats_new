import React, { Component } from 'react';
import './SearchForm.css';

// SEARCHFORM COMPONENT CODE GOES HERE

class Form extends Component {
  constructor() {
    super();
    this.state = {query: ''};
  }
  searchArticles() {
    console.log(this.state.query);
  }
  render() {
    return (
      <form>
        <input
        type="text"
        placeholder="Title..."
        name="title"
        value={this.state.query}
        onChange={this.searchArticles}
        />
      </form>
    )
  }
}

export default Form;
