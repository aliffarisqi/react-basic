import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./container/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
//dengan redux
// root.render(
//   <Provider store={store}>
//     <Home />
//   </Provider>
// );

//dengan contex
root.render(<Home />);
