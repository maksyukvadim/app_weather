import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "../state/RxState";
import searchActions from "../actions/searchActions";
import weatherActions from "../actions/weatherActions";
import WidgetsWeather from "../components/WidgetsWeather/WidgetsWeather";

@connect((state) => ({towns: state.weather.towns}), weatherActions)
class WidgetsContainer extends Component {
    render() {
        const { list } = this.props.towns;

        return (
            <div>
                {list.map((town) => <WidgetsWeather weather={town}/>)}               
            </div>
        );
    }
}

export default WidgetsContainer;