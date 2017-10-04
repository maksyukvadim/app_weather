import React from 'react';
import { bool, func, string } from 'prop-types';
import styled from 'styled-components';

const ItemLang = styled.div`
    background: ${props => props.active?'#E91E63':''};
    user-select: none;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
    color: ${props => props.active?'#FCE4EC':'#636061'};
    height: 29px;
    line-height: 30px;
    
    @media (max-width: 768px) {
        width: 58px;
        display: inline-block;
    }  
`;

const LocalizationControl = ({value, onActive, active}) => (
    <ItemLang
        active={active}
        onClick={onActive}
    >
        {value}
    </ItemLang>);

LocalizationControl.propTypes = {
    value: string,
    onActive: func,
    active: bool
};

export default LocalizationControl;