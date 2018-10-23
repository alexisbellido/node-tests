// import Component as a single export from React so Table extends Component
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import React, { Component } from "react";

const TableHeader = (props) => {
    return (
        <thead>
            <tr>
                <th>Name - props.message: {props.message}</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
  // https://reactjs.org/docs/handling-events.html
  // Delete 1 uses arrow function, which creates a different callback for each button rendered
  // Delete 2 uses Function.prototype.bind

  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete 1</button>
          {' '}
          <button onClick={props.removeCharacter.bind(this, index)}>Delete 2</button>
        </td>
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
    const { characterData, removeCharacter } = this.props;
    return (
      <table>
        <TableHeader message="hello" />
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}

export default Table;
