import React from 'react';

import sampleProducts from '../seed';
import Product from './Product';

class ProductList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            products: []
        };
    }

    handleProductUpvote (productId) {
        console.log(`${productId} was upvoted`);
    }

    render () {
        // map with implicit return of Product components that is rendered inside ProductList below
        const productComponents = sampleProducts.map((product) => (
          <Product key={`product-${product.id}`}
            id={product.id}
            title={product.title}
            votes={product.votes}
            onVote={this.handleProductUpvote}
            description={product.description} />
        ));
        return (
            <div className="ui unstackable items">
              <h2>Product List from map in const</h2>
              {productComponents}
            </div>
        );
    }
}

export default ProductList;
