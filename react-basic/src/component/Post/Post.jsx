import React, { Fragment } from "react";

const Post = (props) => {
  return (
    <Fragment>
      <div className="post">
        <div className="img-thumb">
          <img src="https://loremflickr.com/200/150" alt="" />
        </div>
        <div className="content">
          <div className="title">{props.data.title}</div>
          <div className="desc">{props.data.body}</div>
          <button
            className="btn btn-remove"
            onClick={() => props.remove(props.data.id)}>
            Remove
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Post;
