import React from 'react';
import { array } from 'prop-types';
import WidgetsWeather from '../WidgetsWeather';

class CardWidget extends React.Component {

    state = {
        dateId: 0
    };

    hadleSwitchRight = (e) => {
        if( this.state.dateId + 1 > this.props.weatherByDate.length - 1 ) return false;
        this.setState({dateId: this.state.dateId + 1})
        console.log(e);
    }

    hadleSwitchLeft = (e) => {
        if( this.state.dateId - 1 < 0 ) return false;
        this.setState({dateId: this.state.dateId - 1})
    }

    render() {
        const { weatherByDate } = this.props;
        const { dateId } = this.state;

        return (
            <div>
                <WidgetsWeather 
                    weather={weatherByDate[dateId]} 
                />
                <span onClick={this.hadleSwitchLeft}> {'<'} </span>
                <span onClick={this.hadleSwitchRight}> > </span>
            </div>
        );
    }
}

CardWidget.propTypes = {
    weatherByDate: array
}

export default CardWidget;
