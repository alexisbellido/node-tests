import React from "react";

class App extends React.Component {
  render() {
    const REACT_VERSION = React.version;
    return (
      <div className="App">
        <h1>React version {REACT_VERSION}</h1>
      </div>
    );
  }
}

export default App;
