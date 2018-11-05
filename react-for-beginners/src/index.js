import React, {Component} from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import StorePicker from "./components/StorePicker";

class Post extends Component {
  // no for constructor with super(props) to access this.props
  // but if there's a constructor super(props) must be there
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h4>This is from Post component for name {this.props.name} and color {this.props.color}</h4>
    );
  }
}

// TODO PropTypes.oneOf and PropTypes.string.isRequired not working with
// current eslint configuration
Post.propTypes = {
  color: PropTypes.oneOf(["orange", "yellow"]).isRequired,
  name: PropTypes.string.isRequired,
};

const root = React.createElement(
  "h1",
  {"className": "testing"},
  "This is ",
  React.createElement(
      "a",
      {href: "http://google.com", target: "_blank"},
      "a link"
  ),
  <Post color="green" />,
  <StorePicker />
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
