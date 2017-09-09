import React, { Component } from 'react';
import { object } from 'prop-types';
import ReactSVG from 'react-svg'
import { converKelvinToCels, getDate } from '../../utils';
import styled from 'styled-components';

const Widget = styled.div`
    font-size: 20px;
    background: #f9f9f9;
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 2.2%;
    text-align: center;
    color: #3a3939;
`;

const IconWeather = styled.img`
    width: 30px;
    height: 30px;
`;

const Time = styled.span`
    font-family:'Play';
    font-weight: bold;
    text-align: center;
    font-size: 22px;
`;

const IconText = styled.div`
    display:flex;
    font-size: 0.8em;
    justify-content: space-around;
    line-height: 1.5em;    
`;

const Temperature = styled.span`
    font-weight: bold;
    font-size: 2em;
    line-height: 1.5em;
`;

const IconTextCenter = IconText.extend`
    justify-content: center;    
`;

const WidgetsWeather = ({weather}) => (
    
    <Widget>
        <Time>{weather.dt_txt.split(' ')[1].slice(0, -3)}</Time>
        <ReactSVG path={`../../icons/${weather.weather[0].icon}.svg`} style={{ width:35+'px', height:35+'px', fill:'#3a3939' }} />
        <IconTextCenter>
            <Temperature>{converKelvinToCels(weather.main.temp)}</Temperature>   
            <ReactSVG path="../../icons/degrees-celcius.svg" style={{ width:45+'px', height:45+'px', fill:'#3a3939'}} />         
        </IconTextCenter>
        <IconText>
            <ReactSVG path="../../icons/umbrella.svg" style={{ width:25+'px', height:25+'px', fill:'#3a3939' }}/>
            <span>{weather.main.humidity}%</span>
        </IconText>
        <IconText>
            <ReactSVG path="../../icons/wind.svg" style={{ width:25+'px', height:25+'px', fill:'#3a3939' }}/>
            <span>{Number(weather.wind.speed).toFixed(1)}м/с</span>
        </IconText>
    </Widget>
);

WidgetsWeather.propTypes = {
    weather: object
}

export default WidgetsWeather;