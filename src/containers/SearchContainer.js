import React, { Component } from 'react';
import { connect } from "../state/RxState";
import searchActions from "../actions/searchActions";
import LiveSearch from "../components/LiveSearch/LiveSearch";

@connect(( state ) => ({ towns:state.search.towns }), searchActions)
class SearchContainer extends Component {
    render() {
        
        const { searchTown, towns } = this.props;
        console.log(towns);
        return (
            <div>
                <LiveSearch handleChange={searchTown} />
            </div>
        );
    }
}

export default SearchContainer;