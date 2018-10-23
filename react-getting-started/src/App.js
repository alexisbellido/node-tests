import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.headingObject = React.createElement(
      'h3',
      {className: 'heading'},
      'Hi, I am a heading built with React.createElement'
    );
  }

  render() {
    const heading = <h2 className="heading">I am a heading</h2>;
    return(
      <div className="App">
        <h1>I am a React application</h1>
        {heading}
        {this.headingObject}
      </div>
    );
  }
}

export default App;
