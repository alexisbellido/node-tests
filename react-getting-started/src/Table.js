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

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  });
  return (
      <tbody>
        {rows}
      </tbody>
  );
}

class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const characterData = this.props.characterData;
    // destructuring assignment (ES6 property shorthand)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { characterData } = this.props;
    return (
      <table>
        <TableHeader message="hello" />
        <TableBody characterData={characterData} />
      </table>
    );
  }
}

export default Table;
