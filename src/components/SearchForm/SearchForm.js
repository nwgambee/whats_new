import React, { Component } from 'react';
import './SearchForm.css';

// SEARCHFORM COMPONENT CODE GOES HERE

class Form extends Component {
  constructor() {
    super();
    this.state = {query: ''};
  }
  searchArticles = (event) => {
    event.preventDefault();
    this.props.search(this.state.query);
  }
  updateInput = (event) => {
    this.setState({query: event.target.value})
  }
  render() {
    return (
      <form>
        <input
        type="text"
        placeholder="Title..."
        name="title"
        value={this.state.query}
        onChange={this.updateInput}
        />
        <button
          name="submit-btn"
          type="submit"
          onClick={this.searchArticles}
          >
          Submit Idea
        </button>
      </form>
    )
  }
}

export default Form;
