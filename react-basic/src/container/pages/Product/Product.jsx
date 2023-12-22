import React, { Component, Fragment } from "react";
import { IoLogoBitcoin } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import "./Product.css";
import CardProduct from "./CardProduct/CardProduct";
import { RootContext } from "../../Home/Home";

class Product extends Component {
  render() {
    return (
      <RootContext.Consumer>
        {(value) => {
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
                    <div className="count">{value.state.totalOrder}</div>
                  </div>
                </div>
              </div>
              <CardProduct
              // onCounterChange={(value) => this.handleCountChange(value)}
              />
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
// export default connect(mapStateToProps)(Product);
export default Product;
