import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { converKelvinToCels, getDate } from '../../utils';
import './widgets-weather.styl';

const WidgetsWeather = ({weather}) => (
    <div className='widget-weather__wrap'>
        <span>Дата:{weather.dt_txt}</span><br/>
        <span>Температура: {converKelvinToCels(weather.main.temp)} °C</span><br/>
        <span>min: {converKelvinToCels(weather.main.temp_min)} </span>
        <span>max: {converKelvinToCels(weather.main.temp_max)}</span><br/>
        <span>Влажность: {weather.main.humidity}</span><br/>
    </div>
);

WidgetsWeather.propTypes = {
    weather: PropTypes.object,
}

export default WidgetsWeather;