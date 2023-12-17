import React from "react";
import "./YoutubeComp.css";
const YoutubeComp = (props) => {
  return (
    <div className="youtube-wrappe">
      <div className="thumb-youtube">
        <img src="https://2.bp.blogspot.com/-1DFLh-bi8P8/W9_rEbiL63I/AAAAAAAAAGA/-Tiws1vR1QE6AOMbJ9JcIoEN4B1MmC-xACLcBGAs/s320/IMG_20180202_090734.jpg"></img>
        <div className="time">{props.time}</div>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YoutubeComp.defaultProps = {
  time: "00.00",
  title: "belajar ngoding",
  desc: "0x ditonton",
};

export default YoutubeComp;
