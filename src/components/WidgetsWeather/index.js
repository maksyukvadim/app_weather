import React, { Component } from 'react';
import { object } from 'prop-types';
import ReactSVG from 'react-svg'
import { converKelvinToCels, getDate } from '../../utils';
import styled from 'styled-components';
import  * as icon from '../../icons/icons';
import asd from '../../icons/01d.svg';
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
    
    @media (max-width: 768px) {
        width:100%;
        margin-left: 0;
        flex-direction: row;
        height: 50px;
        box-sizing: border-box;
        border 1px 0 solid #3a3939;
    }  
`;

const Time = styled.span`
    font-family:'Play';
    font-weight: bold;
    text-align: center;
    font-size: 1.2em;
    
    @media (max-width: 768px) {
        margin: auto 0;
        font-size: 1em;
    }  
`;

const IconText = styled.div`
    display:flex;
    font-size: 0.8em;
    justify-content: space-around;
    line-height: 1.5em;  
    
    @media (max-width: 768px) {
        align-items: center;
    }   
`;

const Temperature = styled.span`
    font-weight: bold;
    font-size: 2em;
    line-height: 1.5em;
    
    @media (max-width: 768px) {
        font-size: 1.5em;
    }  
`;

const IconTextCenter = IconText.extend`
    justify-content: center;    
`;

const Icon = styled.div`
    display: flex;
    padding-top: 15px;
    justify-content:center;
    & svg {
        width: 40px;
        height: 40px;
        fill: #3a3939;
    }
    
    @media (max-width: 768px) {
        padding-top: 5px;
    }  
`;

const IconCels = Icon.extend`
    padding-top: 0;
    & svg {
        width: 40px;
        height: 40px;

    }
    @media (max-width: 768px) {
        padding-top: 0px;
    }  
`;
const IconLittle = Icon.extend`
    padding-top: 0;
    & svg {
        width: 23px;
        height: 23px;
    }
    @media (max-width: 768px) {
        padding-top: 0px;
    } 
`;

const WidgetsWeather = ({weather}) => (
    
    <Widget>
        <Time>{weather.dt_txt.split(' ')[1].slice(0, -3)}</Time>
            <Icon dangerouslySetInnerHTML={{__html: icon[`icon_${weather.weather[0].icon}`]}}  />
        <IconTextCenter>
            <Temperature>{converKelvinToCels(weather.main.temp)}</Temperature>   
            <IconCels dangerouslySetInnerHTML={{__html: icon.degrees_celcius}} />         
        </IconTextCenter>
        <IconText>
            <IconLittle dangerouslySetInnerHTML={{__html: icon.umbrella}} />
            <span>{weather.main.humidity}%</span>
        </IconText>
        <IconText>
            <IconLittle dangerouslySetInnerHTML={{__html: icon.wind}} />
            <span>{Number(weather.wind.speed).toFixed(1)}м/с</span>
        </IconText>
    </Widget>
);

WidgetsWeather.propTypes = {
    weather: object
};

export default WidgetsWeather;