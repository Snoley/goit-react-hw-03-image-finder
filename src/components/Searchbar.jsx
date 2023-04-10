import React, { Component } from 'react';
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
    value: '',
  };

  handleChange = event => {
    const newSearch = event.target.value;
    this.setState({ value: newSearch });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.value) {
      Notiflix.Notify.warning('Enter a search parameter');
    } else this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <SearchbarHead>
        <SearchForm onSubmit={this.handleSubmit} className="SearchForm">
          <SearchFormBtn type="submit">
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
            value={query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarHead>
    );
  }
}
