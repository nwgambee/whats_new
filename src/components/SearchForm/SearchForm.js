import React, { Component } from 'react';
import './SearchForm.css';

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
        placeholder="Search"
        name="title"
        value={this.state.query}
        onChange={this.updateInput}
        />
        <button
          name="submit-btn"
          className='submit-btn'
          type="submit"
          onClick={this.searchArticles}
          >
          Search News
        </button>
      </form>
    )
  }
}

export default Form;
