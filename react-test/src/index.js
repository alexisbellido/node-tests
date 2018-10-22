import React from "react";
import ReactDOM from "react-dom";

// import App from "./App.js";
// ReactDOM.render(<App />, document.getElementById("root"));

// import Clock from "./Clock.js";
// ReactDOM.render(
//   <Clock isLoggedIn={false} />,
//   document.getElementById("root")
// );

// import LoginControl from "./LoginControl.js";
// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById("root")
// );


const PRODUCTS = [
  {id: 1, category: "Sporting Goods", price: "$59.99", stocked: true, name: "Football"},
  {id: 2, category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {id: 3, category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {id: 4, category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {id: 5, category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {id: 6, category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
  {id: 7, category: "Sporting Goods", price: "$29.99", stocked: false, name: "T-Shirt"},
];

import FilterableProductTable from "./FilterableProductTable.js";
ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById("root")
);
