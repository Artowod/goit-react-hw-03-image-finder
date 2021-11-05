import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
import Modal from './components/Modal';
import getServerResponse from './shared/services/api.js';

import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    gallery: [],
    status: 'idle',
    searchQuery: '',
  };

  componentDidMount() {
    /*     getServerResponse('')
      .then(({ hits }) =>
        this.setState({
          gallery: hits.map(({ id, webformatURL, largeImageURL }) => ({
            id,
            webformatURL,
            largeImageURL,
          })),
        }),
      )
      .catch(err => {
        alert(err.message);
        throw err;
      }); */
  }

  onSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements['searchInput'];
    this.setState({ searchQuery: value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      this.setState({ status: 'pending' });
      getServerResponse(this.state['searchQuery'])
        .then(({ hits }) =>
          this.setState({
            gallery: hits.map(({ id, webformatURL, largeImageURL }) => ({
              id,
              webformatURL,
              largeImageURL,
            })),
            status: 'resolved',
          }),
        )
        .catch(err => {
          alert(err.message);
          throw err;
        });
    }
  }

  render() {
    const { status } = this.state;
    if (status === 'idle') {
      return (
        <div className="App">
          <SearchBar onSubmit={this.onSubmit} />
          Please type what you want to find...
        </div>
      );
    }
    if (status === 'pending') {
      return (
        <div className="App">
          <SearchBar onSubmit={this.onSubmit} />
          <Loader />
        </div>
      );
    }
    if (status === 'rejected') {
    }
    if (status === 'resolved') {
      return (
        <div className="App">
          <SearchBar onSubmit={this.onSubmit} />
          <ImageGallery gallery={this.state['gallery']} />
          <Button />
          {/*       <Modal /> */}
        </div>
      );
    }
  }
}

export default App;
