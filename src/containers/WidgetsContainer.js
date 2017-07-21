import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "../state/RxState";
import searchActions from "../actions/searchActions";
import weatherActions from "../actions/weatherActions";
import WidgetsWeather from "../components/WidgetsWeather/WidgetsWeather";

@connect((state) => ({towns: state.weather.towns}), weatherActions)
class WidgetsContainer extends Component {

    groupData(list) {
        let enptArr = {};
        let data = list[0].dt_txt.split(' ')[0].replace(/-/g,'d');

        list.forEach((item) => {
            if(item.dt_txt.split(' ')[0].replace(/-/g,'d') !== data) {
                data = item.dt_txt.split(' ')[0].replace(/-/g,'d');
            }               

            if(enptArr[data]) {
                enptArr[data].push(item);
            } else {
                enptArr[data] = [];
                enptArr[data].push(item);
            }
            console.log(enptArr);
        });
        return enptArr;
    }

    render() {       
        const { list } = this.props.towns;
        console.log(list.length > 0 && Object.values(this.groupData(list)));
        return (
            <div>
                {list.map((town) => <WidgetsWeather key={town.dt} weather={town}/>)}               
            </div>
        );
    }
}

export default WidgetsContainer;