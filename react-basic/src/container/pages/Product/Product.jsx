import React, { Component, Fragment } from "react";
import { IoLogoBitcoin } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import "./Product.css";
import CardProduct from "./CardProduct/CardProduct";
import { GLobalConsumer } from "../../../context/context";

class Product extends Component {
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
              <div className="count">{this.props.state.totalOrder}</div>
            </div>
          </div>
        </div>
        <CardProduct />
      </Fragment>
    );
  }
}

export default GLobalConsumer(Product);
