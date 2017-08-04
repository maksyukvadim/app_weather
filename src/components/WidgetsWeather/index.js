import React, { Component } from 'react';
import { object } from 'prop-types';
import { converKelvinToCels, getDate } from '../../utils';
import styled from 'styled-components';

const Widget = styled.div`
    
`;

const WidgetsWeather = ({weather}) => (
    <Widget>
        <span>Дата:{weather.dt_txt}</span><br/>
        <span><img src="../../icons/degreees_c.svg" alt=""/>  Температура: {converKelvinToCels(weather.main.temp)} °C</span><br/>
        <span>min: {converKelvinToCels(weather.main.temp_min)} </span>
        <span>max: {converKelvinToCels(weather.main.temp_max)}</span><br/>
        <span>Влажность: {weather.main.humidity}</span><br/>
    </Widget>
);

WidgetsWeather.propTypes = {
    weather: object,
}

export default WidgetsWeather;