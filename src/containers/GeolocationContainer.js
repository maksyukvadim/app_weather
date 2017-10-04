import React, { Component } from 'react';
import { func, array, string } from 'prop-types';
import { connect } from "../state/RxState";
import searchActions from "../actions/searchActions";
import weatherActions from "../actions/weatherActions";
import commonAction from "../actions/commonAction";
import GeolocationMessage from '../components/GeolocationMessage';

@connect(
    ( state ) => (
        {
            geopositionTown: state.search.geopositionTown,
            positionPopupGeo: state.common.positionPopupGeo,
        }
    ),
    {...searchActions, ...weatherActions, ...commonAction})
class GeolocationContainer extends Component {
    state = {
        geolacationPosition: {}
    };
    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({geolacationPosition: {lat:position.coords.latitude, lng:position.coords.longitude}});
                this.props.searchTownByPosition({lat:position.coords.latitude, lng:position.coords.longitude});
            }
        );
    }

    handleAcceptGeolocation = () => {
        const { geopositionTown, setDefaultInputValue, getWeather, setGeoPopup, clearGeoposition } = this.props;
        setGeoPopup("-100%");
        setTimeout(() => {
            setDefaultInputValue(geopositionTown[0].formatted_address);
            getWeather(this.state.geolacationPosition);
            clearGeoposition();
        }, 500);
    };

    onCancelGeolocation = () => {
        const {  setGeoPopup, clearGeoposition } = this.props;
        setGeoPopup('-100%');
        setTimeout(clearGeoposition, 500);
    };


    render() {
        const { geopositionTown, setGeoPopup, positionPopupGeo } = this.props;
        return (
             geopositionTown.length > 0 ?
                 <GeolocationMessage
                    location={geopositionTown[0]}
                    onAcceptGeolocation={this.handleAcceptGeolocation}
                    visibilityAnimation={positionPopupGeo}
                    onStartAnimation={() => setGeoPopup('0')}
                    onCancelGeolocation={this.onCancelGeolocation}
                 />
                :null
        );
    }
}
GeolocationContainer.propTypes = {
    setDefaultInputValue: func,
    geopositionTown: array,
    setGeoPopup: func,
    getWeather: func,
    clearGeoposition: func,
    positionPopupGeo: string
};

export default GeolocationContainer;