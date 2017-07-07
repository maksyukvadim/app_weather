import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WidgetsWeather extends Component {
    render() {
        return (
            <div>
                {this.props}
            </div>
        );  
    }
}

WidgetsWeather.propTypes = {

}

export default WidgetsWeather;