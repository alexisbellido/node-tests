import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  constructor() {
    super();
    // we need binding to use "this" inside renderInventory
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key];
    // take copy of that fish and update it using spread
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    };
    this.props.updateFish(key, updatedFish);
    // console.log(updatedFish);
  }

  renderInventory(key) {
    // you can access "this" because renderInventory was bound in the constructor
    const fish = this.props.fishes[key];
    return (
      <div className="fish-edit" key={key}>
        <input type="name" name="name" value={fish.name} placeholder="fish name" onChange={(e) => this.handleChange(e, key)} />
        <input type="name" name="price" value={fish.price} placeholder="fish price" onChange={(e) => this.handleChange(e, key)} />
        <select name="status" value={fish.status} placeholder="fish status" onChange={(e) => this.handleChange(e, key)}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="name" name="desc" value={fish.desc} placeholder="fish desc" onChange={(e) => this.handleChange(e, key)}></textarea>
        <input type="name" name="image" value={fish.image} placeholder="fish image" onChange={(e) => this.handleChange(e, key)} />
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <p>Inventory</p>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
