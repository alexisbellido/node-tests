import React from "react";
// or just get { Compomnent }
// import React, { Component } from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Form below</h1>
        { /* must use a javascript block comment here */ }
        <form className="store-selector">
          <h2>Please enter a store</h2>
          <input type="text" required placeholder="Store name" />
          <button type="submit">Visit store</button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
