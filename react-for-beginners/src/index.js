import React, {Component} from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import StorePicker from "./components/StorePicker";

class Secret extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '...'
    }
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(event) {
    // don't submit the form
    event.preventDefault();

    // https://reactjs.org/docs/react-component.html#setstate

    // simple form, passing state object
    // this.setState({
    //   name: 'Toby'
    // });

    // passing an updater function with access to previous state and props
    // this is the recommended way to use setState
    // parenthesize the body of function to return an object literal expression
    this.setState((prevState, props) => ({
      name: 'Bill'
    }));

    // passing an updater function with access to previous state and props
    // and a callback once the updater has run
    // docs recommend using componentDidUpdate() instead of this callback
    // this.setState(
    //   (prevState, props) => ({
    //     name: 'Bill'
    //   }),
    //   () => {
    //     console.log('setState complete');
    //   }
    // );

  }

  render() {
    return (
      <form>
        <h1>My name is {this.state.name}</h1>
        <button onClick={this.onButtonClick}>Reveal the secret</button>
      </form>
    );
  }
}

class Post extends Component {

  // need @babel/plugin-proposal-class-properties, see .babelrc, to use
  // experimental syntax 'classProperties'
  // may be better to define static properties outside the class as shown below
  static defaultProps = {
    name: "Luis"
  };

  // no for constructor with super(props) to access this.props
  // but if there's a constructor super(props) must be there
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-content">
        <h4>This is from Post component for name {this.props.name} and color {this.props.color}</h4>
        <StorePicker />
        <Secret />
      </div>
    );
  }
}

// note how static properties of the class Post, Post.propTypes and Post.defaultProps,
// can be defined outside the class, as shown below, or inside the class, as show above
// for defaultProps

// TODO PropTypes.oneOf and PropTypes.string.isRequired won't be detected by eslint
// but they are visible from browser console
Post.propTypes = {
  color: PropTypes.oneOf(["orange", "yellow"]).isRequired,
  name: PropTypes.string.isRequired,
};

// Post.defaultProps = {
//   name: "Pepe"
// };

function Greeting(props) {
  return <strong> Hello {props.for}! </strong>;
}

Greeting.defaultProps = {
  for: 'friend'
};

// using React.createElement for demonstration purposes; prefer JSX
const root = React.createElement(
  "h1",
  {"className": "testing"},
  "This is ",
  React.createElement(
      "a",
      {href: "http://google.com", target: "_blank"},
      "a link"
  ),
  <Greeting />,
  <Greeting for="Toby" />,
  <Post color="green" />,
  <Post name="Chito" color="orange" />
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
