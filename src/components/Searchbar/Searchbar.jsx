import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import {
  SearchbarHead,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.Styled';
import Notiflix from 'notiflix';


Notiflix.Notify.init({
  width: '320px',
  position: 'center-top',
  distance: '100px',
  timeout: 1500,
  fontSize: '20px',
});

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query:  event.currentTarget.value.trimLeft()});
  };

  handleSubmit = event => {
    const { query } = this.state;
    event.preventDefault();


    if (query === '') {
      Notiflix.Notify.warning('You made the same request');
      return;
    }
    this.props.query(query);
    this.setState({ query: '' });
  };



  render() {
    const { input } = this.state;

    return (
      <SearchbarHead>
        <SearchForm onSubmit={this.handleSubmit} className="SearchForm">
          <SearchFormBtn type="submit" >
            <FaSearch
              style={{
                height: '30px',
                width: '30px',
              }}
            />
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchFormInput
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={input}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarHead>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};