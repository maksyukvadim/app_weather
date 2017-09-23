import React, { Component } from "react";
import { array, func} from "prop-types";
import styled from 'styled-components';

const List = styled.ul`
    margin:0;
    padding:0;
`;

const ListItem = styled.li`
    list-style: none;
    padding: 0 15px;
    height: 48px;
    line-height: 48px;
    background: #fff;
    color: rgb(33,33,33);
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
    transition: background .15s linear;
    overflow: hidden;
    
    &:hover {
      background: rgb(238,238,238);
      cursor: pointer;
    }
`;

class SearchList extends Component {

  pickTown(item) {
      const { activeTown, pickItem, clearTowns } = this.props;
      clearTowns();
      pickItem(item.geometry.location);
      activeTown(item.formatted_address);
  }
  
  render() {
    const { results } = this.props;
    return (
        <List>
          {results.map(item =>
            <ListItem 
              key={item.formatted_address} 
              onClick={this.pickTown.bind(this, item)}
            >
              {item.formatted_address}
            </ListItem>
          )}
        </List>
    );
  }
}
SearchList.propTypes = {
  results: array,
  pickItem: func,
  clearTowns: func
};

SearchList.defaultProps = {
    results: []
};

export default SearchList;
