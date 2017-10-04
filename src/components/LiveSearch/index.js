import React, { Component } from "react";
import { func, array, string, node } from "prop-types";
import styled from 'styled-components';
import { Observable } from 'rxjs';

const InputSearch = styled.input`
  color: rgb(33,33,33);
  width: 100%;
  height: 50px;
  font-size: 25px;
  font-weight: 500;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
  box-sizing:border-box;
  border: none;
  padding: 5px;
  outline: none;
  
  @media (max-width: 768px) {
    font-size: 20px;
}  
`;

class LiveSearch extends Component {

  componentDidMount() {
    this.change();
  }

  change() {
    const searchInput = document.getElementById('searchInput');
    const { handleChange, clearTowns } = this.props;
    const keyPressInput$ = Observable.fromEvent(searchInput, 'keyup')
      .map( e => e.target.value);
    keyPressInput$
        .filter((str) => str.length > 2)
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe((name) => handleChange(name));

      keyPressInput$
          .filter((str) => str.length === 0)
          .debounceTime(500)
          .subscribe((name) => clearTowns());
  };

  
  render() {
    return (
        <InputSearch
          type="text"
          id={'searchInput'}
          placeholder={this.props.defaultValueInput}
        />
    );
  }
}

LiveSearch.propTypes = {
  handleChange: func,
  results: array,
  defaultValueInput: string,
  clearTowns: func
};

LiveSearch.defaultProps = {
    results: []
};

export default LiveSearch;
