import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
//import Modal from './components/Modal';
import getServerResponse from './shared/services/api.js';

import LoaderSpinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    gallery: [],
    status: 'idle',
    searchQuery: '',
    page: 1,
    loader: false,
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
    this.setState({ gallery: [], page: 1 });
    const { value } = event.target.elements['searchInput'];
    this.setState({ searchQuery: value });
  };

  pagination = event => {
    /*     window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    }); */

    this.setState(prevState => ({
      page: prevState['page'] + 1,
    }));
  };

  componentWillUnmount() {
    console.log('CWUnmount-APP');
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.searchQuery !== prevState.searchQuery ||
      this.state.page !== prevState.page
    ) {
      this.setState({ status: 'pending' });
      getServerResponse(this.state['searchQuery'], this.state['page'])
        .then(({ hits }) =>
          this.setState(({ gallery: prevGallery }) => ({
            gallery: prevGallery.concat(
              hits.map(({ id, webformatURL, largeImageURL }) => ({
                id,
                webformatURL,
                largeImageURL,
              })),
            ),
            status: 'resolved',
          })),
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

    return (
      <div className="App">
        <SearchBar onSubmit={this.onSubmit} />
        {(status === 'pending' || status === 'resolved') && (
          <>
            <ImageGallery gallery={this.state['gallery']} />
            <Button onClick={this.pagination} status={status}>
              {() => <LoaderSpinner color="tomato" height={100} width={100} />}
            </Button>
          </>
        )}
      </div>
    ); /* return */
  } /* render */
} /* root */

export default App;
