// import default export from React so App needs to extend React.Component
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import React from "react";
import Table from './Table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.headingObject = React.createElement(
      'h3',
      {className: 'heading'},
      'Hi, I am a heading built with React.createElement'
    );

    this.characters = [
        {
            'name': 'Charlie',
            'job': 'Janitor'
        },
        {
            'name': 'Mac',
            'job': 'Bouncer'
        },
        {
            'name': 'Dee',
            'job': 'Aspring actress'
        },
        {
            'name': 'Dennis',
            'job': 'Bartender'
        }
    ];
  }

  render() {
    const heading = <h2 className="heading">I am a heading</h2>;
    return (
      <div className="App">
        <h1>I am a React application</h1>
        {heading}
        {this.headingObject}
        <Table characterData={this.characters} />
      </div>
    );
  }
}

export default App;
