import React from 'react';

class Product extends React.Component {
    render () {
        // console.log(this.props);
        return (
            <div className="item">
              <div className="description">
                <a href="#">{this.props.id}: {this.props.title}</a>
                <p>{this.props.description}</p>
              </div>
            </div>
        );
    }
}

export default Product;
