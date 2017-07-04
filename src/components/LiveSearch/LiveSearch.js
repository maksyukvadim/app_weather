import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LiveSearch extends Component {

    change(e) {
        console.log(e.target.value);
        const { handleChange } = this.props;
        handleChange(e.target.value)
    }

    render() {
        
        return (
            <div>
                <input type="text" onChange={::this.change} />
            </div>
        );
    }
}
LiveSearch.propTypes = {
    handleChange: PropTypes.func
}

export default LiveSearch;