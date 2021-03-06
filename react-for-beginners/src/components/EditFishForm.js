import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  handleChange = (event) => {
    // using event as opposed to refs, see AddFishForm
    // spread properties of object this.props.fish and replace with the updated property
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input name="name" onChange={this.handleChange} value={this.props.fish.name} type="text" placeholder="Name" />
        <input name="price" onChange={this.handleChange} value={this.props.fish.price} type="text" placeholder="Price" />
        <select name="status"onChange={this.handleChange} value={this.props.fish.status} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} placeholder="Desc"></textarea>
        <input name="image" onChange={this.handleChange} value={this.props.fish.image} type="text" placeholder="Image" />
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
        </div>
    );
  }
}

EditFishForm.propTypes = {
  deleteFish: PropTypes.func,
  updateFish: PropTypes.func,
  index: PropTypes.string,
  fish: PropTypes.object
};

export default EditFishForm;
