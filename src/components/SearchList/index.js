import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const List = styled.ul`
    margin:0;
    padding:0;
`;

const ListItem = styled.li`
    list-style: none;
    padding: 10px 0;
    background: #fff;    
`;

class SearchList extends Component {

  pickTown(item) {
    this.props.pickItem(item.geometry.location)
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
  static defaultProps = {
    results: []
  };
}
SearchList.propTypes = {
  results: PropTypes.array,
  pickItem: PropTypes.func
};

export default SearchList;
