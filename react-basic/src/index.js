import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./container/Home/Home";

//Stateless component
// digunakan untuk child di folder component
function HelloComponentJadul() {
  return <p>Hello world Stateless Component Jadul</p>;
}
const HelloComponentModern = () => {
  return <p>Hello world Stateless Component Modern</p>;
};

//Classful component atau statefull component
// digunakan untuk parent atau container
class StatefullComponent extends React.Component {
  render() {
    return <p>Hello world Statefull component</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
