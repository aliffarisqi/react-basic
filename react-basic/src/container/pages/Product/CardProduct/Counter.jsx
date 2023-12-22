import React, { Component } from "react";
import { GLobalConsumer } from "../../../../context/context";

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <button
          className="minus"
          onClick={() => this.props.dispatch({ type: "MINUS_ORDER" })}>
          -
        </button>
        <input type="text" value={this.props.state.totalOrder} />
        <button
          className="plus"
          onClick={() => this.props.dispatch({ type: "PLUS_ORDER" })}>
          +
        </button>
      </div>
    );
  }
}
export default GLobalConsumer(Counter);
