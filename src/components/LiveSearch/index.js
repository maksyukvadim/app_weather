import React, { Component } from "react";
import { func, array } from "prop-types";
import styled from 'styled-components';

const InputSearch = styled.input`
  color: #1A237E;
  width: 100%;
  height: 50px;
  font-size: 25px;
  font-weight: 500;
  box-shadow: ${haveResult => haveResult?'none':'0 4px 8px 0 rgba(0,0,0,0.2)'};
  margin-top: 30vh;
  box-sizing:border-box;
  border: none;
  padding: 5px;
  outline: none;
  
  &:focus, 
  &:hover {
    box-shadow: ${haveResult => haveResult?'none':'2px 8px 16px 2px rgba(0,0,0,0.2)'};
  }
`;


const List = styled.ul``;

const ListItem = styled.li``;

class LiveSearch extends Component {
  change = (e) => {
    const { handleChange } = this.props;
    handleChange(e.target.value);
  }

  pickTown(item) {
    this.props.pickItem(item.geometry.location)
  }
  
  render() {
    const { results, pickItem } = this.props;
    console.log(results);
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
