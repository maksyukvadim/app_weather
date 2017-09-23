import React, { Component } from 'react';
import { func, array } from 'prop-types';
import { connect } from "../state/RxState";
import searchActions from "../actions/searchActions";
import weatherActions from "../actions/weatherActions";
import LiveSearch from "../components/LiveSearch";
import SearchList from "../components/SearchList";
import styled from 'styled-components';

const WrapeerSearch = styled.div`
    position: relative;
    width: 70%;
    margin: 0 auto;
    transform: translateY( ${props => props.animate?'5vh':'40vh'});
    transition: transform .5s ease-in-out;
    padding-bottom: 3vh;
    
    @media (max-width: 768px) {
        width: 95%;
    }  
`;

@connect(
    ( state ) => (
        {
            towns: state.search.towns,
            list: state.weather.towns.list,
            townInSearch: state.search.townInSearch
        }
    ),
        {...searchActions, ...weatherActions})
class SearchContainer extends Component {
    render() {
        const { searchTown, towns, getWeather, list, activeTown, townInSearch, clearTowns } = this.props;
        return (
                <WrapeerSearch animate={list.length}>
                    <LiveSearch
                        handleChange={searchTown}
                        townInSearch={townInSearch}
                    />
                    <SearchList results={towns}
                                pickItem={getWeather}
                                activeTown={activeTown}
                                clearTowns={clearTowns}
                    />
                </WrapeerSearch>
        );
    }
}

SearchContainer.propTypes = {
    searchTown: func,
    towns:array,
    getWeather:func,
    list: array,
    activeTown: func

};

export default SearchContainer;