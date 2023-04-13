import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { getPhoto } from '../API/getPhoto';
import { Wrapper } from './Wrapper/Wrapper';
import { animateScroll as scroll } from 'react-scroll';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    gallery: [],
    error: '',
    status: 'stoped',
    page: 1,
    searchParameter: '',
    showBtn: false,
  };

  componentDidMount() {
    Notiflix.Notify.init({
      width: '400px',
      position: 'center-top',
      distance: '80px',
      timeout: 1000,
      fontSize: '25px',
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchParameter, page } = this.state;

    if (
      prevState.searchParameter !== searchParameter ||
      prevState.page !== page
    ) {
      this.setState({ status: 'pending' });

      getPhoto(searchParameter, page)
        .then(response => response.json())
        .then(photo => {
          const { gallery } = this.state;
          this.setState({
            gallery: [...gallery, ...photo.hits],
            status: 'resolved',
            showBtn: page < Math.ceil(photo.totalHits / 12),
          });

          if (page === 1) {
            Notiflix.Notify.success(`We found ${photo.totalHits} photos!`);
          }
        })
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
    }
  }

  handleLoad = () => {
    const { page } = this.state;
    scroll.scrollMore(window.innerHeight - 125);
    this.setState({ page: page + 1 });
  };

  query = searchParameter => {
    if (this.state.searchParameter === searchParameter) {
      return Notiflix.Notify.warning('You made the same request');
    }
    this.setState({
      searchParameter: searchParameter,
      page: 1,
      gallery: [],
      showBtn: false,
      status: 'stoped',
    });
  };

  // searchQuery = inputValue => {
  //   if (this.state.query === inputValue) {
  //     return toastInfoMessage('You made the same request');
  //   }
  //   this.setState({
  //     query: inputValue,
  //     page: 1,
  //     gallery: [],
  //     isVisible: false,
  //     loading: false,
  //     currentPerPage: null,
  //     error: null,
  //     largeImageURL: '',
  //   });
  // };

  render() {
    const { searchParameter, gallery, status, error, showBtn } = this.state;
    return (
      <Wrapper>
        <GlobalStyle />

        <Searchbar query={this.query} />

        {searchParameter ? (
          <ImageGallery gallery={gallery} status={status} error={error} />
        ) : (
          <div style={{ height: '10rem' }}></div>
        )}

        {showBtn && <Button handleLoad={this.handleLoad} />}
      </Wrapper>
    );
  }
}
