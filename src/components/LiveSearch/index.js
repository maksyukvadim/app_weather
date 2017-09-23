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
  box-sizing:border-box;
  border: none;
  padding: 5px;
  outline: none;
`;

class LiveSearch extends Component {

  state = {
    inpVal:''
  };

  componentDidMount() {
    const searchInput = document.getElementById('searchInput');
    searchInput.setAttribute('onclick', 'this.select();');
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.townInSearch !== this.props.townInSearch)
      this.setState({
          inpVal: nextProps.townInSearch
      });
  }

  change = (e) => {
    const { handleChange } = this.props;
    const { value } = e.target;
    this.setState({inpVal: value});
    handleChange(value);
  };
  
  render() {
    const { inpVal } = this.state;
    return (
        <InputSearch
          type="text" 
          onChange={this.change}
          value={inpVal}
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
