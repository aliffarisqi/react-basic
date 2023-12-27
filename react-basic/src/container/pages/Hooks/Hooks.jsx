import React, { Component, useState } from "react";
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
//   render() {
//     return (
//       <div className="p-hooks">
//         <p>Nilai saat ini adalah : {this.state.count}</p>
//         <button onClick={this.onUpdate}>Update Nilai</button>
//       </div>
//     );
//   }
// }

//menggunakan hooks dan functional component
const HooksComponent = () => {
  const [count, setCount] = useState(7);
  return (
    <div className="p-hooks">
      <p>Nilai saat ini adalahh : {count}</p>
      <button onClick={() => setCount(count + 1)}>Update Nilai</button>
    </div>
  );
};

export default HooksComponent;
