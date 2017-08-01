import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "../state/RxState";
import weatherActions from "../actions/weatherActions";
import CardWidget from "../components/CardWidget";
import { groupDataByDay } from '../utils';

@connect((state) => ({ towns: state.weather.towns }), weatherActions)
class WidgetsContainer extends Component {

    render() {
        const { list } = this.props.towns;

        return (
            <div>
                {list.length > 0 && groupDataByDay(list)
                    .map((town, id) =>
                        <CardWidget key={id} weatherByDate={town} />)}
            </div>
        );
    }
}

export default WidgetsContainer;