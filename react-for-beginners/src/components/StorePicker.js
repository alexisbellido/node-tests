import React from "react";
// or just get { Component }
// import React, { Component } from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    // binding is necessary when using custom method goToStore
    this.goToStore = this.goToStore.bind(this);
  }

  goToStore(event) {
    // 1. stop form from submitting
    event.preventDefault();
    // 2. get text from input
    const storeName = this.textInput.current.value;
    // 3. change page to /store/store-name-selected using history that comes from Router.js because
    // StorePicker is used there
    this.props.history.push(`/store/${storeName}`);
  }

  // I can also add an arrow function as a property of the component instead of a
  // custom method to avoid the bind in constructor to have access to this
  // goToStore = (event) => {
  //   event.preventDefault();
  //   console.log(this);
  //     console.log(this.textInput.current);
  //     console.log(this.textInput.current.value );
  // };

  render() {
    return (
      <React.Fragment>
        <h1>Form below</h1>
        { /* must use a javascript block comment here */ }
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store</h2>
          <input type="text" ref={this.textInput} required placeholder="Store name" defaultValue={getFunName()} />
          <button type="submit">Visit store</button>
        </form>
      </React.Fragment>
    );
  }

}

StorePicker.propTypes = {
  history: PropTypes.object
};

export default StorePicker;
