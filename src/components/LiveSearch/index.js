import React, { Component } from "react";
import { func, array } from "prop-types";
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
`;

class LiveSearch extends Component {

  componentDidMount() {
    this.change();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.townInSearch !== this.props.townInSearch)
      this.setState({
          inpVal: nextProps.townInSearch
      });
  }

  change() {
    const searchInput = document.getElementById('searchInput');
    const keyPressInput$ = Observable.fromEvent(searchInput, 'keyup')
      .map( e => e.target.value)
      .filter((str) => str.length > 2)
      .debounceTime(500)
      .distinctUntilChanged();
    const { handleChange } = this.props;
    keyPressInput$.subscribe((name) => handleChange(name));
  };
  
  render() {
    return (
        <InputSearch
          type="text"
          id={'searchInput'}
        />
    );
  }
}

LiveSearch.propTypes = {
  handleChange: func,
  results: array
};

LiveSearch.defaultProps = {
    results: []
};

export default LiveSearch;
