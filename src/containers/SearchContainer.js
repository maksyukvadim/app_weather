import React, { Component } from 'react';
import { connect } from "../state/RxState";
import searchActions from "../actions/searchActions";
import weatherActions from "../actions/weatherActions";
import LiveSearch from "../components/LiveSearch";
import SearchList from "../components/SearchList";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled, { keyframes } from 'styled-components';

const WrapeerSearch = styled.div`
    position: relative;
    width: 70%;
    margin: 0 auto;
`;

@connect(
    ( state ) => (
        { towns:state.search.towns }
    ),
        {...searchActions, ...weatherActions})
class SearchContainer extends Component {
    render() {
        const { searchTown, towns, getWeather } = this.props;
        return (
            <WrapeerSearch animate={towns.length}>
                <LiveSearch 
                    handleChange={searchTown}   
                    results={towns.results}
                />
               <SearchList results={towns.results}  pickItem={getWeather} />
            </WrapeerSearch>
        );
    }
}

export default SearchContainer;