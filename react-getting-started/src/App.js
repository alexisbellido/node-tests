// import default export from React so App needs to extend React.Component
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import React from "react";
import Table from './Table';
import Form from './Form';
import ApiFetch from './ApiFetch';
import ApiAxios from './ApiAxios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [
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
      ]
    };

    this.headingObject = React.createElement(
      'h3',
      {className: 'heading'},
      'Hi, I am a heading built with React.createElement'
    );

    this.removeCharacter = this.removeCharacter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(character) {
    this.setState({
      characters: [...this.state.characters, character]
    });
  }

  removeCharacter(index) {
      const { characters } = this.state;

      this.setState({
          characters: characters.filter((character, i) => {
              return i !== index;
          })
      });
  }

  render() {
    const heading = <h2 className="heading">I am a heading</h2>;
    const REACT_VERSION = React.version;
    return (
      <div className="App">
        <h1>I am a React application running version {REACT_VERSION}</h1>
        <ApiFetch />
        <ApiAxios />
        {heading}
        {this.headingObject}
        <Table
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
