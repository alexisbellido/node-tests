import React from 'react';

import sampleProducts from '../seed';
import Product from './Product';

class ProductList extends React.Component {
    render () {
        return (
            <div className="ui unstackable items">
              <h2>Product List here</h2>
              {Object.keys(sampleProducts)}
              <Product />
            </div>
        );
    }
}

export default ProductList;
