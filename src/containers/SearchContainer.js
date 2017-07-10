import React, { Component } from 'react';
import { connect } from "../state/RxState";
import searchActions from "../actions/searchActions";
import weatherActions from "../actions/weatherActions";
import LiveSearch from "../components/LiveSearch/LiveSearch";

console.log(searchActions);

@connect(( state ) => ({ towns:state.search.towns }), {...searchActions, ...weatherActions})
class SearchContainer extends Component {
    render() {
        
        const { searchTown, towns, getWeather } = this.props;
        return (
            <div>
                <LiveSearch handleChange={searchTown} results={ towns.results } pickItem={getWeather} />
            </div>
        );
    }
}

export default SearchContainer;