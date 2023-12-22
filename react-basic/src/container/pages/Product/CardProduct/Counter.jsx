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
              <button className="minus" onClick={() => null}>
                -
              </button>
              <input type="text" value={value.totalOrder} />
              <button className="plus" onClick={() => null}>
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
