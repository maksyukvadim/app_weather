import React, { Component } from "react";
import PropTypes from "prop-types";

class LiveSearch extends Component {
  change(e) {
    console.log(e.target.value);
    const { handleChange } = this.props;
    handleChange(e.target.value);
  }

  pickTown(item) {
    console.log(item);
    this.props.pickItem(item.geometry.location)
    
  }


  render() {
    const { results, pickItem } = this.props;
    console.log(results);
    return (
      <div>
        <input type="text" onChange={::this.change} />
        <ul>
          {results.map(item =>
            <li onClick={this.pickTown.bind(this, item)}>
              {item.formatted_address}
            </li>
          )}
        </ul>
      </div>
    );
  }
  static defaultProps = {
    results: [1, 3, 4]
  };
}
LiveSearch.propTypes = {
  handleChange: PropTypes.func,
  results: PropTypes.array,
  pickItem: PropTypes.func
};

export default LiveSearch;
