import React, { Component } from "react";
import { RootContext } from "../../../Home/Home";

class Counter extends Component {
  render() {
    return (
      <RootContext.Consumer>
        {(value) => {
          console.log(value);
          return (
            <div className="counter">
              <button
                className="minus"
                onClick={() => value.dispatch({ type: "MINUS_ORDER" })}>
                -
              </button>
              <input type="text" value={value.state.totalOrder} />
              <button
                className="plus"
                onClick={() => value.dispatch({ type: "PLUS_ORDER" })}>
                +
              </button>
            </div>
          );
        }}
      </RootContext.Consumer>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
