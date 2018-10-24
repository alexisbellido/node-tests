import React from "react";
import ReactDOM from "react-dom";
import StorePicker from "./components/StorePicker";

// document.querySelector, which is newer, can be used instead of document.getElementById but it may be slower because it allows more selections
ReactDOM.render(<StorePicker />, document.querySelector('#root'));

