import React, { Component, useEffect, useState } from "react";
import "./Hooks.css";

// menggunakan class component dan state
// class HooksComponent extends Component {
//   state = {
//     count: 0,
//   };
//   onUpdate = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };
//   componentDidMount() {
//     document.title = `title Change: ${this.state.count}`;
//   }
//   componentDidUpdate() {
//     document.title = `title Change: ${this.state.count}`;
//   }
//   componentWillUnmount() {
//     document.title = `React Js Hello World`;
//   }
//   render() {
//     return (
//       <div className="p-hooks">
//         <p>Nilai saat ini adalah : {this.state.count}</p>
//         <button onClick={this.onUpdate}>Update Nilai</button>
//       </div>
//     );
//   }
// }

// menggunakan hooks dan functional component
const HooksComponent = () => {
  const [count, setCount] = useState(7);

  //useEffect pada react hooks adalah lifecycle dari react yang memiliki kemampuan sama seperti didUpdate, didMount, willUnMount
  useEffect(() => {
    document.title = `title change : ${count}`;

    //menggunakan willUnMount
    return () => {
      document.title = "React Js Hello World";
    };
  });
  return (
    <div className="p-hooks">
      <p>Nilai saat ini adalahh : {count}</p>
      <button onClick={() => setCount(count + 1)}>Update Nilai</button>
    </div>
  );
};

export default HooksComponent;
