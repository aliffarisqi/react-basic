import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./container/Home/Home";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer/globalReducer";

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

//PEMBUATAN STORE UNTUK REDUX
const createStore = legacy_createStore;

//STORE
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Home />
  </Provider>
);
