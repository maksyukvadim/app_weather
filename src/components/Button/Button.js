import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.styl';
class Button extends Component {
    render() {
        const { label, btnName } = this.props;
        return (
            <div className='wrap_btn'>
                <span>{label}</span>
                <button>{btnName}</button>
            </div>
        );
    }  
}

Button.propTypes = {
        label:PropTypes.string,
        btnName:PropTypes.string,
    };

export default Button;