import React, { Component } from 'react';
import { func, array, string } from 'prop-types';
import { connect } from "../state/RxState";
import searchActions from "../actions/searchActions";
import weatherActions from "../actions/weatherActions";
import commonAction from "../actions/commonAction";
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
            defaultValueInput: state.search.defaultValueInput,
            positionPopupGeo: state.common.positionPopupGeo
        }
    ),
        {...searchActions, ...weatherActions, ...commonAction})
class SearchContainer extends Component {

    clearInput = () => {
        const inpSearch = document.getElementById('searchInput');
        inpSearch.value = '';
    };

    hidePopUpGeoposition = () => {
        const { setGeoPopup, clearGeoposition } = this.props;
        setGeoPopup('-100%');
        setTimeout(clearGeoposition, 500);
    };

    render() {
        const { searchTown, towns, getWeather, list,
                clearTowns, defaultValueInput, setDefaultInputValue, positionPopupGeo } = this.props;
        return (
                <WrapeerSearch animate={list.length}>
                    <LiveSearch
                        handleChange={searchTown}
                        defaultValueInput={defaultValueInput}
                        clearTowns={clearTowns}
                    />
                    <SearchList
                        results={towns}
                        pickItem={getWeather}
                        clearTowns={clearTowns}
                        setDefaultInputValue={setDefaultInputValue}
                        clearInput={this.clearInput}
                        hideGeolationPopup={this.hidePopUpGeoposition}
                        positionPopupGeo={positionPopupGeo}
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
    defaultValueInput: string,
    setGeoPopup: func

};

export default SearchContainer;