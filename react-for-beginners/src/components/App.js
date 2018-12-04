import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";
import sampleFishes from "./sample-fishes"

class App extends React.Component {
  // alternative to using super method; see StorePicker
  state = {
    fishes: {},
    order: {}
  };

  // using an arrow function as a property of the component instead of a
  // custom method to avoid the bind in constructor to have access to this
  addFish = fish => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;

    // using shorthand property name for object literal
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015

    // passing just an object
    // this.setState({fishes});

    // better use form that accepts function
    this.setState((prevState, props) => ({
      fishes
    }));
  };

  loadSampleFishes = () => {
    // better use form that accepts function
    this.setState((prevState, props) => ({
      fishes: sampleFishes
    }));
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="All The Fresh Fish" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
