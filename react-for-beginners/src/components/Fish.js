import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };

  render() {
    const {image, name, desc, price, status} = this.props.details;
    const isAvailable = status == 'available';
    return (
      <li className="menu-fish">
        <img src={`/public/${image}`} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>{isAvailable ? 'Add to order' : 'Sold Out'}</button>
      </li>
    );
  }
}

Fish.propTypes = {
  addToOrder: PropTypes.func,
  index: PropTypes.string,
  details: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    status: PropTypes.string,
    price: PropTypes.number
  })
};

export default Fish;
