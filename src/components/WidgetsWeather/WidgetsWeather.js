import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { converKelvinToCels } from '../../utils';

class WidgetsWeather extends Component {
    render() {
        const { weather, temperature } = this.props;
        console.log(this.props.weather);
        return (
            <div>
                <div>
                    <span>Страна: {weather.sys.country}</span><br/>
                    <span>Температура: {converKelvinToCels(weather.main.temp)} °C</span><br/>
                    <span>min: {converKelvinToCels(weather.main.temp_min)} </span>
                    <span>max: {converKelvinToCels(weather.main.temp_max)}</span><br/>
                    <span>Влажность: {weather.main.humidity}</span><br/>
                </div>
            </div>
        );  
    }
}

WidgetsWeather.propTypes = {
    weather: PropTypes.object,
}

export default WidgetsWeather;