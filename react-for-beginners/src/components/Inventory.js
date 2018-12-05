import React from "react";
import PropTypes from "prop-types";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map( key =>
          <EditFishForm
            key={key}
            index={key}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
            fish={this.props.fishes[key]}
          />
        )}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

Inventory.propTypes = {
  addFish: PropTypes.func,
  updateFish: PropTypes.func,
  loadSampleFishes: PropTypes.func,
  deleteFish: PropTypes.func,
  index: PropTypes.string,
  fishes: PropTypes.object
};

export default Inventory;
