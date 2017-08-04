import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "../state/RxState";
import weatherActions from "../actions/weatherActions";
import CardWidget from "../components/CardWidget";
import { groupDataByDay } from '../utils';
import styled from 'styled-components';

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

        return (
            <Container>
                {list.length > 0 && groupDataByDay(list)
                    .map((town, id) =>
                        <CardWidget key={id} weatherByDate={town} />)}
            </Container>
        );
    }
}

export default WidgetsContainer;