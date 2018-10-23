// import Component as a single export from React
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      job: ''
    };
  }

  render() {
    const { name, job } = this.state;
    return (
      <form>
        <h2>Add Person</h2>
        <label>Name</label>
        <input type="text" name="name" value="" onChange="" />
        <label>Job</label>
        <input type="text" name="job" value="" onChange="" />
      </form>
    );
  }
}

export default Form;
