// import Component as a single export from React so Table extends Component
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import React, { Component } from "react";

const TableHeader = (props) => {
    return (
        <thead>
            <tr>
                <th>Name - props.message: {props.message}</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Charlie</td>
                <td>Janitor</td>
            </tr>
            <tr>
                <td>Mac</td>
                <td>Bouncer</td>
            </tr>
            <tr>
                <td>Dee</td>
                <td>Aspiring actress</td>
            </tr>
            <tr>
                <td>Dennis</td>
                <td>Bartender</td>
            </tr>
        </tbody>
    );
}

class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <TableHeader message="hello" />
        <TableBody />
      </table>
    );
  }
}

export default Table;
