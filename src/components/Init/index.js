import React, { Component } from "react";
import { connect } from "../../state/RxState";
import initActions from "../../actions/initActions";
import styled from 'styled-components';
import img from '../../images/background_main.jpg';
const BackgroundMain = styled.div`
  position: fixed;
  top: 0;
  left:0;
  right:0;
  bottom:0;
  background: url(${props => props.srcImg}) no-repeat center center fixed ;
  background-size: cover;
  z-index: -1;
`;

@connect(() => ({}), initActions)
class Init extends Component {

  render() {
    return (
      <BackgroundMain srcImg={img} />
    );
  }
}

export default Init;
