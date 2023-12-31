import React, { Component, Fragment } from "react";
import "./BlogPost.css";
import Post from "../../../component/Post/Post";
import API from "../../../service";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    isUpdate: false,
    comments: [],
  };
  getPostApi = () => {
    API.getNewsBlog().then((result) => {
      this.setState({
        post: result,
      });
    });
    API.getComentsBlog().then((result) => {
      this.setState({
        comments: result,
      });
    });
  };
  handleRemove = (data) => {
    API.deleteNewsBlog(data).then((res) => {
      this.getPostApi();
    });
  };
  handleFoormChange = (event) => {
    let newFormBlogPost = { ...this.state.formBlogPost };
    let timeStamp = new Date().getTime();
    if (!this.state.isUpdate) {
      newFormBlogPost["id"] = timeStamp;
    }
    newFormBlogPost[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: newFormBlogPost,
    });
  };
  handleSubmit = () => {
    this.state.isUpdate ? this.putDataToApi() : this.postDataToAPI();
  };
  postDataToAPI = () => {
    API.postNewsBlog(this.state.formBlogPost).then((res) => {
      this.getPostApi();
      this.setState({
        formBlogPost: {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        },
      });
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
  handleUpdate = (data) => {
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };
  putDataToApi = () => {
    API.updateNewsBlog(
      this.state.formBlogPost,
      this.state.formBlogPost.id
    ).then((res) => {
      this.getPostApi();
      this.setState({
        isUpdate: false,
        formBlogPost: {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        },
      });
    });
  };

  render() {
    return (
      <Fragment>
        <p>Blog Post</p>
        <hr />
        <p className="section-title">Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title" className="title">
            Title
          </label>
          <input
            type="text"
            value={this.state.formBlogPost.title}
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
            value={this.state.formBlogPost.body}
            id="body"
            cols="30"
            rows="10"
            placeholder="add body content"
            onChange={this.handleFoormChange}></textarea>
          <button onClick={this.handleSubmit} className="btn btn-save">
            {this.state.isUpdate ? "Update" : "Tambah"}
          </button>
        </div>

        {this.state.post.map((post) => {
          return (
            <Post
              key={post.id}
              data={post}
              remove={this.handleRemove}
              update={this.handleUpdate}
            />
          );
        })}
        {this.state.comments.map((coment) => {
          return (
            <p className="">
              {coment.name} - {coment.email}
            </p>
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
