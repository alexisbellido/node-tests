import React from "react";
import ReactDOM from "react-dom";

// when no path used then it's usually a Node module
// need path so it knows where to look for the code
// import StorePicker from "./components/StorePicker";
// import App from "./components/App";

import Router from "./components/Router";

// const root =
//   <div>
//     <App />
//   </div>;
//
// ReactDOM.render(root, document.getElementById("root"));


ReactDOM.render(<Router />, document.getElementById("root"));
