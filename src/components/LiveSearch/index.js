import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const InputSearch = styled.input`
  color: green;
  width: 100%;
  height: 40px;
  font-size: 20px;
  display: inline-block;
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
    return (
      <div>
        <InputSearch 
          type="text" 
          onChange={this.change} 
        />
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
      </div>
    );
  }
  static defaultProps = {
    results: []
  };
}
LiveSearch.propTypes = {
  handleChange: PropTypes.func,
  results: PropTypes.array,
  pickItem: PropTypes.func
};

export default LiveSearch;
