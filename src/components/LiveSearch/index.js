import React, { Component } from "react";
import { func, array } from "prop-types";
import styled from 'styled-components';

const InputSearch = styled.input`
  color: rgb(33,33,33);
  width: 100%;
  height: 50px;
  font-size: 25px;
  font-weight: 500;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
  margin-top: 30vh;
  box-sizing:border-box;
  border: none;
  padding: 5px;
  outline: none;
`;


const List = styled.ul``;

const ListItem = styled.li``;

class LiveSearch extends Component {
  change = (e) => {
    const { handleChange } = this.props;
    handleChange(e.target.value);
  }
  
  render() {
    const { results, pickItem } = this.props;
    return (
        <InputSearch 
          type="text" 
          onChange={this.change} 
          haveResult={results.length > 0}
        />
    );
  }
  static defaultProps = {
    results: []
  };
}
LiveSearch.propTypes = {
  handleChange: func,
  results: array
};

export default LiveSearch;
