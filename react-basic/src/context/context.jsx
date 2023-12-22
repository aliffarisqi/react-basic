import React, { Component, createContext } from "react";

//STATE MANAGEMENT
export const RootContext = createContext();
const Provider = RootContext.Provider;

// HOC high order component
// PROVIDER
const GlobalProvider = (Children) => {
  return class ParentComponent extends Component {
    state = {
      totalOrder: 5,
    };
    dispatch = (action) => {
      if (action.type === "PLUS_ORDER") {
        return this.setState({
          totalOrder: this.state.totalOrder + 1,
        });
      }
      if (action.type === "MINUS_ORDER") {
        return this.setState({
          totalOrder: this.state.totalOrder - 1,
        });
      }
    };
    render() {
      return (
        <Provider
          value={{
            state: this.state,
            dispatch: this.dispatch,
          }}>
          <Children {...this.props} />
        </Provider>
      );
    }
  };
};

export default GlobalProvider;

// HOC high order component
// CONSUMER
