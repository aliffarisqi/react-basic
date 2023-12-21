import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };
  handlePlus = () => {
    this.setState(
      {
        //this di sini merujuk ke global(parent)
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };
  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };
  render() {
    return (
      <div className="counter">
        <button className="minus" onClick={this.handleMinus}>
          -
        </button>
        <input type="text" value={this.props.counterOrder} />
        <button className="plus" onClick={this.handlePlus}>
          +
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counterOrder: state.totalOrder,
  };
};

export default connect(mapStateToProps)(Counter);
