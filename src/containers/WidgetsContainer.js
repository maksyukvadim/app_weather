import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "../state/RxState";
import searchActions from "../actions/searchActions";
import weatherActions from "../actions/weatherActions";
import LiveSearch from "../components/WidgetsWeather/WidgetsWeather";

@connect((state) => ({}))
class WidgetsContainer extends Component {
    render() {
        return (
            <div>
               {this.props.children} 
            </div>
        );
    }
}

export default WidgetsContainer;