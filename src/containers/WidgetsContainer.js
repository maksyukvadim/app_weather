import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "../state/RxState";
import searchActions from "../actions/searchActions";
import weatherActions from "../actions/weatherActions";
import WidgetsWeather from "../components/WidgetsWeather/WidgetsWeather";

@connect((state) => ({town: state.weather.town}), weatherActions)
class WidgetsContainer extends Component {
    render() {
        const { town } = this.props;
        return (
            <div>
                <WidgetsWeather weather={town}/>
            </div>
        );
    }
}

export default WidgetsContainer;