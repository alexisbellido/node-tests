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
    this.createError = this.createError.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("<Secret /> - shouldComponentUpdate()");
    console.log("nextProps: ", nextProps);
    console.log("nextState: ", nextState);
    return true;
  }

  // componentWillUpdate is deprecated since React 16.3.0
  // use UNSAFE_componentWillUpdate instead
  // see https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate
  // componentWillUpdate(nextProps, nextState) {
  //   console.log("<ChildComponent/> - componentWillUpdate");
  //   console.log("nextProps: ", nextProps);
  //   console.log("nextState: ", nextState);
  // }

  componentDidUpdate(previousProps, previousState) {
    console.log("ChildComponent: componentDidUpdate");
    console.log("previousProps:", previousProps);
    console.log("previousState:", previousState);
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

  createError(event) {
    event.preventDefault();
    this.setState((prevState, props) => ({
      oops: true
    }));
  }

  render() {
    console.log('ChildComponent render');
    if (this.state.oops) {
      throw new Error('Something went wrong');
    }
    return (
      <form>
        <h1>My name is {this.state.name}</h1>
        <p>Message passed from parent: {this.props.message}</p>
        <p>
          <button onClick={this.onButtonClick}>Reveal the secret</button>
        </p>
        <p>
          <button onClick={this.createError}>Create error</button>
        </p>
      </form>
    );
  }
}

Secret.propTypes = {
  message: PropTypes.string.isRequired,
};

// stateless functional component; uses arrow function
// note it can still use default props and prop types
const Category = props => (
  <h4>Category of this post: {props.cat_name}. Owner: {props.cat_owner}</h4>
);

Category.defaultProps = {
  cat_owner: 'Toby'
};

Category.propTypes = {
  cat_name: PropTypes.string.isRequired,
  cat_owner: PropTypes.string,
};

class Post extends Component {

  // need @babel/plugin-proposal-class-properties, see .babelrc, to use
  // experimental syntax 'classProperties'
  // may be better to define static properties outside the class as shown below
  // static defaultProps = {
  //   name: "Luis"
  // };

  static defaultProps = (function() {
    console.log('defaultProps called from function in Post (parent component)');
    return {
      name: "Mario"
    };
  })();

  // no need for constructor with super(props) to access this.props
  // but if there's a constructor method then super(props) must be the first to run
  constructor(props) {
    super(props);
    console.log("Post (parent component): initial state in constructor");
    this.state = {
      country: 'france'
    }
  }

  render() {
    return (
      <div className="main-content">
        <h4>This is from Post component for name {this.props.name}, country {this.state.country} and color {this.props.color}</h4>
        <Category cat_name="music" />
        <p>errorColor: {this.state.errorColor}</p>
        <StorePicker />
        <Secret message="a message via props" />
      </div>
    );
  }

  // This lifecycle was previously named componentWillMount. That name will continue to work until version 17.
  // use constructor() instead for initializing state
  UNSAFE_componentWillMount() {
    console.log("Post (parent component): UNSAFE_componentWillMount");
  }

  componentDidMount() {
    console.log("Post (parent component): componentDidMount");
  }

  componentDidCatch(err, errorInfo) {
    console.log('Post (parent component): componentDidCatch');
    console.error(err);
    console.error(errorInfo);
  }
}

Post.getDerivedStateFromError = function(error) {
  console.log('getDerivedStateFromError');
  console.log(error);
  return { errorColor: 'red' };
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

// stateless functional component; uses function definition
function Greeting(props) {
  return <strong> Hello {props.for}! </strong>;
}

Greeting.defaultProps = {
  for: 'friend'
};

Greeting.propTypes = {
  for: PropTypes.string.isRequired,
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
  <Post color="green" />
  // <Post name="Chito" color="orange" />
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
