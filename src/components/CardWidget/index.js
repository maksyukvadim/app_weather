import React from 'react';
import { array } from 'prop-types';
import WidgetsWeather from '../WidgetsWeather';
import styled from 'styled-components';
import localization from '../../localization';

const CardWrap = styled.div`  
    display:flex;
    background: #fff;
    box-sizing: border-box;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
    margin: 1% 10%;
    min-height: 100px;
    
    @media (max-width: 768px) {
		flex-direction: column;
		margin: 1% 0;
	}
`;

const TimePanel = styled.ul`  
    background: #3F51B5;
    margin: 0;
    padding: 0;
    font-family: 'Play';
    color: #fff;
    display:flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;  
    
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: row;
        height: 50px;
        font-size: 0.8em;
    }      
`;

const TimePanelDay = styled.li`
    list-style:none;
    font-weight: bold;
    font-size: 3em;  
`;

const TimePanelMonth = TimePanelDay.extend`
    font-size: 3.5em;
    &:first-letter {
        text-transform: uppercase;
    }
`;

const WrapTab = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: row;
    width:100%;
    
    @media (max-width: 768px) {
    flex-direction: column;
}  
`;

class CardWidget extends React.Component {

    render() {
        const { weatherByDate, date } = this.props;
        const dateArr = date.split('.');
        return (
            <CardWrap>
                <TimePanel>
                    <TimePanelDay>{parseInt(dateArr[2])}</TimePanelDay>
                    <TimePanelMonth>{localization['month' + dateArr[1]]}</TimePanelMonth>
                </TimePanel>
                <WrapTab>
                    {weatherByDate.map((item,index) => <WidgetsWeather key={index} weather={item} />)}
                </WrapTab>
            </CardWrap>
        );
    }
}

CardWidget.propTypes = {
    weatherByDate: array
};

export default CardWidget;
