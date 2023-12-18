import React, { Component } from "react";
// import "./Product.css";

class CardProduct extends Component {
  state = {
    order: 5,
  };
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
      <div className="card">
        <div className="img-thumb-prod">
          <img
            src="https://1.bp.blogspot.com/-SjrvxDHEecg/X4lF619JouI/AAAAAAAAAJA/KwBXQ6fgJJMDD0TQdEzcUT8jX-7VYtDEACNcBGAsYHQ/s901/lemon.png"
            alt="lemon"></img>
        </div>
        <p className="product-title">daging ayam</p>
        <p className="product-price">54.000</p>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}
export default CardProduct;
