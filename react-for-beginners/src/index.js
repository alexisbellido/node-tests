import React, {Component} from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import StorePicker from "./components/StorePicker";

const root =
  <div>
    <h2>Picking a store</h2>
    <StorePicker />
  </div>;

ReactDOM.render(root, document.getElementById("root"));
