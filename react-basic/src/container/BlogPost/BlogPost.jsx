import React, { Component, Fragment } from "react";
import "./BlogPost.css";
import Post from "../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
  };
  getPostApi = () => {
    axios.get("http://localhost:3004/posts").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  };
  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((result) => {
      this.getPostApi();
    });
  };
  componentDidMount() {
    // menggunakan fetch
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       post: json,
    //     });
    //   });
    //menggunakan axios
    this.getPostApi();
  }

  render() {
    return (
      <Fragment>
        <p className="section-title">Blog Post</p>
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} remove={this.handleRemove} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
