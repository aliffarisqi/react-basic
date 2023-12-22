// LIBRARIES
import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

//PAGES
import Product from "../pages/Product/Product";
import BlogPost from "../pages/BlogPost/BlogPost";
import LifeCycleComp from "../pages/LifeCycleComponent/LifeCycleComp";
import YoutubePage from "../pages/YoutubeComp/YoutubePage";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";

//STYLING
import "./Home.css";
import GlobalProvider from "../../context/context";

class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
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
              <Route path="/detail-post/:idPost" Component={DetailPost}></Route>
              <Route path="/product" Component={Product} />
              <Route path="/lifecycle" Component={LifeCycleComp} />
              <Route path="/youtube" Component={YoutubePage} />
            </Routes>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default GlobalProvider(Home);
