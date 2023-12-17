import React, { Component, Fragment } from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import Product from "../Product/Product";

class Home extends Component {
  render() {
    return (
      <Fragment>
        {/* <p>Youtube Component</p>
        <hr />
        <YoutubeComp
          time="23.12"
          title="belajar dengan prawito"
          desc="2x ditonton"
        />
        <YoutubeComp
          time="12.32"
          title="belajar dengan sandhika"
          desc="4x ditonton"
        />
        <YoutubeComp
          time="08.42"
          title="belajar dengan ajay"
          desc="6x ditonton"
        />
        <YoutubeComp
          time="20.52"
          title="belajar dengan alif"
          desc="10x ditonton"
        />
        <YoutubeComp /> */}
        <p>Counter</p>
        <hr />
        <Product />
      </Fragment>
    );
  }
}

export default Home;
