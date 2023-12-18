import React, { Component, Fragment } from "react";
import "./BlogPost.css";
import Post from "../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
  };
  getPostApi = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((result) => {
        this.setState({
          post: result.data,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      });
  };
  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((result) => {
      this.getPostApi();
    });
  };
  handleFoormChange = (event) => {
    let newFormBlogPost = { ...this.state.formBlogPost };
    let timeStamp = new Date().getTime();
    newFormBlogPost["id"] = timeStamp;
    newFormBlogPost[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: newFormBlogPost,
    });
  };
  handleSubmit = () => {
    this.postDataToAPI();
  };
  postDataToAPI = () => {
    axios.post("http://localhost:3004/posts/", this.state.formBlogPost).then(
      (result) => {
        console.log(result);
        this.getPostApi();
      },
      (err) => {
        console.log("err", err);
      }
    );
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
        <div className="form-add-post">
          <label htmlFor="title" className="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            className=""
            name="title"
            placeholder="masukan title ..."
            onChange={this.handleFoormChange}
          />
          <label htmlFor="body" className="title">
            Deskripsi
          </label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            placeholder="add body content"
            onChange={this.handleFoormChange}></textarea>
          <button onClick={this.handleSubmit} className="btn btn-save">
            Simpan
          </button>
        </div>
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} remove={this.handleRemove} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
