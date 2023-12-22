import React, { Component, Fragment } from "react";
import "./LifeCycleComp.css";
import { RootContext } from "../../Home/Home";

class LifeCycleComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.group("componentDidMount");
    // setTimeout(() => {
    //     this.setState({
    //         count: 2
    //     })
    // }, 3000)
    this.setState({
      count: 2,
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.group("shouldComponentUpdate");

    // console.log('next Props', nextProps);
    console.log("next State", nextState);
    console.log("this State", this.state);

    console.groupEnd();
    if (nextState.count >= 4) {
      return false;
    }

    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log(this.props);
    return (
      <RootContext.Consumer>
        {(value) => {
          return (
            <Fragment>
              <p>LifeCycle Component</p>
              <hr />
              <button onClick={this.changeCount} className="btn-lifeCycle">
                Component Button {this.state.count}
              </button>
              <hr />
              <p>total order {value.state.totalOrder}</p>
            </Fragment>
          );
        }}
      </RootContext.Consumer>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

// export default connect(mapStateToProps)(LifeCycleComp);
export default LifeCycleComp;
