import React, { Component, Fragment } from "react";
import { IoLogoBitcoin } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import "./Product.css";
import CardProduct from "./CardProduct/CardProduct";

class Product extends Component {
  state = {
    order: 5,
  };
  handleCountChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };
  render() {
    return (
      <Fragment>
        <p>Product</p>
        <hr />
        <div className="header">
          <div className="logo">
            <div className="logo">
              <IoLogoBitcoin />
            </div>
            <div className="troley">
              <div className="icon">
                <SlBasket />
              </div>
              <div className="count">{this.state.order}</div>
            </div>
          </div>
        </div>
        <CardProduct
          onCounterChange={(value) => this.handleCountChange(value)}
        />
      </Fragment>
    );
  }
}
export default Product;