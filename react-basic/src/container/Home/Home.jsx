import React, { Component, Fragment } from "react";
// import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
// import Product from "../Product/Product";
import LifeCycleComp from "../LifeCycleComponent/LifeCycleComp";

class Home extends Component {
  state = {
    showComponent: true,
  };
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 3000);
  }
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
        {/* <p>Counter</p>
        <hr />
        <Product /> */}
        <p>LifeCycle Component</p>
        <hr />
        {this.state.showComponent ? <LifeCycleComp /> : null}
      </Fragment>
    );
  }
}

export default Home;
