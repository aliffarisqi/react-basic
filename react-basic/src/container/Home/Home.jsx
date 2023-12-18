import React, { Component, Fragment } from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import Product from "../Product/Product";
import LifeCycleComp from "../LifeCycleComponent/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";
import "./Home.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

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
      <BrowserRouter>
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
        <YoutubeComp />
        <p>Counter</p>
        <hr />

        
        <BlogPost /> */}
        <div className="nav">
          <Link to="/" className="link-nav">
            Blog Post
          </Link>
          <Link to="/product" className="link-nav">
            Productt
          </Link>
          <Link to="/lifecycle" className="link-nav">
            Lifecycle
          </Link>
        </div>
        <div className="home-container">
          <Routes>
            <Route path="/" exact Component={BlogPost}></Route>
            <Route path="/product" Component={Product} />
            <Route path="/lifecycle" Component={LifeCycleComp} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;
