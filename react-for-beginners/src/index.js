import React from "react";
import ReactDOM from "react-dom";
import StorePicker from "./components/StorePicker";

const root = React.createElement(
  'h1',
  {className: 'testing'},
  'This is ',
  React.createElement(
    'a',
    {href: 'http://google.com', target: '_blank'},
    'a link'
  )
);

ReactDOM.render(root, document.getElementById("root"));

// document.querySelector, which is newer, can be used instead of document.getElementById but it may be slower because it allows more selections
// <React.Fragment> can be used instead of extra div to wrap sibling compoments
// ReactDOM.render(
//   <React.Fragment>
//     <StorePicker />
//     <h2>replace with some test compoment</h2>
//   </React.Fragment>,
//   document.querySelector('#root')
// );
