import React, { Component } from "react";
import { connect } from "../../state/RxState";
import initActions from "../../actions/initActions";

@connect(() => ({}), initActions)
class Init extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

export default Init;
