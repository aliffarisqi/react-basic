import React, { Component, Fragment } from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import Product from "../pages/Product/Product";
import LifeCycleComp from "../pages/LifeCycleComponent/LifeCycleComp";
import BlogPost from "../pages/BlogPost/BlogPost";
import "./Home.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import YoutubePage from "../pages/YoutubeComp/YoutubePage";

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
          <Link to="/youtube" className="link-nav">
            Youtube
          </Link>
        </div>
        <div className="home-container">
          <Routes>
            <Route path="/" exact Component={BlogPost}></Route>
            <Route path="/product" Component={Product} />
            <Route path="/lifecycle" Component={LifeCycleComp} />
            <Route path="/youtube" Component={YoutubePage} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;
