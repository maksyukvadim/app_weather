import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "../state/RxState";
import weatherActions from "../actions/weatherActions";
import CardWidget from "../components/CardWidget";
import { groupDataByDay } from '../utils';
import styled from 'styled-components';
import _ from 'lodash';

const Container = styled.div`
    display:flex;
    margin: 0 auto;
    margin-top: 30px;
    flex-direction: column;
    align-items:stretch;
`;

@connect((state) => ({ towns: state.weather.towns }), weatherActions)
class WidgetsContainer extends Component {

    render() {
        const { list } = this.props.towns;
        let listNode = [];
        if(list.length > 0)
            _.forIn(groupDataByDay(list), (value, key) => { 
                listNode.push(<CardWidget key={key} weatherByDate={value} date={key.replace(/d/g,'.')} />);
            });
        return (
            <Container>
                {listNode}
            </Container>
        );
    }
}

export default WidgetsContainer;