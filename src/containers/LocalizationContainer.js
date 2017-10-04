import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { connect } from "../state/RxState";
import commonAction from "../actions/commonAction";
import localization from '../localization';
import LocalizationControl from '../components/LocalizationControl';
import styled from 'styled-components';
import { LOCALIZATION_LANGUAGES } from '../constants';

const Wrapper = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    width: 58px;
    height: 58px;
    background: #dedede;
    
    @media (max-width: 768px) {
        width: 116px;
        height: 29px;
    }  
`;

@connect(
    ( state ) => (
        {
            activeLang: state.common.activeLang
        }
    ), commonAction)
class LocalizationContainer extends Component {
    componentWillReceiveProps(nextProps) {
        const { activeLang, setLang } = this.props;
        if(nextProps.activeLang !== activeLang) {
            localization.setLanguage(nextProps.activeLang);
            setLang(nextProps.activeLang);
        }
    }

    render() {
        const { setLang, activeLang } = this.props;
        return (
            <Wrapper>
                {
                    LOCALIZATION_LANGUAGES
                        .map( (lang) =>
                            <LocalizationControl
                                key={lang}
                                active={activeLang === lang}
                                onActive={() => setLang(lang)}
                                value={lang.toUpperCase()}
                            />
                        )
                }
            </Wrapper>
        );
    }
}

LocalizationContainer.propTypes = {
    activeLang: string,
    setLang: func
};

export default LocalizationContainer;