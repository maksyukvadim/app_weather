import React from 'react';
import { array } from 'prop-types';
import WidgetsWeather from '../WidgetsWeather';
import styled from 'styled-components';

const CardWrap = styled.div`  
    background: #fff;
    box-sizing: border-box;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
    margin: 1% 2%;
`;

class CardWidget extends React.Component {

    state = {
        dateId: 0
    };

    hadleSwitchRight = (e) => {
        if( this.state.dateId + 1 > this.props.weatherByDate.length - 1 ) return false;
        this.setState({dateId: this.state.dateId + 1})
    }

    hadleSwitchLeft = (e) => {
        if( this.state.dateId - 1 < 0 ) return false;
        this.setState({dateId: this.state.dateId - 1})
    }

    render() {
        const { weatherByDate } = this.props;
        const { dateId } = this.state;

        return (
            <CardWrap>
                <WidgetsWeather 
                    weather={weatherByDate[dateId]} 
                />
                <span onClick={this.hadleSwitchLeft}>
                    <img src="../../icons/arrow_left.svg" alt="arrow_left"/>
                </span>
                <span onClick={this.hadleSwitchRight}>
                    <img src="../../icons/arrow_right.svg" alt="arrow_right"/>
                </span>
            </CardWrap>
        );
    }
}

CardWidget.propTypes = {
    weatherByDate: array
}

export default CardWidget;
