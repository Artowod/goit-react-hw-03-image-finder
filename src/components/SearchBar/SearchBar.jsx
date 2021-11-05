import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchInput: '',
  };

  onInputChange = e => {
    const { value } = e.target;
    this.setState({ searchInput: value });
  };

  render() {
    return (
      <header className="SearchBar">
        <form className="SearchForm" onSubmit={this.props.onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            name="searchInput"
            value={this.state.searchInput}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onInputChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
