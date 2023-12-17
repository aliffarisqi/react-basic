import React, { Fragment } from "react";

const Post = (props) => {
  return (
    <Fragment>
      <div className="post">
        <div className="img-thumb">
          <img src="https://loremflickr.com/200/150" alt="" />
        </div>
        <div className="content">
          <div className="title">{props.title}</div>
          <div className="desc">{props.desc}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Post;
