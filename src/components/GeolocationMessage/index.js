import React from 'react';
import { object, func, string } from 'prop-types';
import styled from 'styled-components';
import localization from '../../localization';

const WrapperInfo = styled.div`
    position: relative;
    top: 0;
    padding: 20px;
    background: #03A9F4;
    color: #fff;
    transform: translateX(${props => props.animate});
    transition: transform .5s ease-in-out; 
`;

const Wrapper = styled.div`
    position: absolute;
    z-index: 10;
`;

const Button = styled.span`
    margin: 0 10px;
    color: ${props => props.color};
    font-weight: bold;
    
    &:hover {
        border-bottom: 2px solid ${props => props.color};
        cursor: pointer; 
    }
`;

class GeolocationMessage extends React.Component {

    componentDidMount() {
        setTimeout(this.props.onStartAnimation, 0);
    }

    render() {
        const { location, onAcceptGeolocation, onCancelGeolocation, visibilityAnimation } = this.props;
        return (
            <Wrapper>
                <WrapperInfo animate={visibilityAnimation}>
                    {localization.want_get_weather} <span>{location.formatted_address}</span>
                    <Button color='#6eff74' onClick={onAcceptGeolocation}>{localization.yes}</Button>
                    <Button color='#FF5252' onClick={onCancelGeolocation}>{localization.no}</Button>
                </WrapperInfo>
            </Wrapper>
        );
    }
}

GeolocationMessage.propTypes = {
    location: object,
    onAcceptGeolocation: func,
    visibilityAnimation: string,
    onCancelGeolocation: func,
};

export default GeolocationMessage;
