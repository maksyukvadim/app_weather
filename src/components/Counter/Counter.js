import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "../../state/RxState";
import counterActions from "../../actions/counterActions";

@connect(({ counter }) => ({ counter }), counterActions)
class Counter extends Component {
  render() {
    const { counter, increment, decrement, reset } = this.props;
    return (
      <div>
        <h1>
          {counter}
        </h1>
        <hr />
        <button onClick={() => increment(1)} id="increment">
          +
        </button>
        <button onClick={() => increment(10)} id="increment10">
          +10
        </button>
        <button onClick={reset} id="reset">
          Reset
        </button>
        <button onClick={() => decrement(1)} id="decrement">
          -
        </button>
        <button onClick={() => decrement(10)} id="decrement10">
          -10
        </button>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  reset: PropTypes.func
};

export default Counter;
