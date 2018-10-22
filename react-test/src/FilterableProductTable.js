import React from "react";
import SearchBar from "./SearchBar.js";


function SimpleList(props) {
  const products = props.products

  // should I use toString()?
  // <li key={product.id.toString()}>{product.name}</li>
  const simpleList = products.map((product) =>
    <li key={product.id}>{product.name}</li>
  );
  return (
    <ul>
      {simpleList}
    </ul>
  );
}

// // The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.
// let json = '{"result":true, "count":42}';
// let obj = JSON.parse(json);
// console.log(obj);
// // The JSON.stringify() method converts a JavaScript value to a JSON string
// console.log(JSON.stringify(obj));

class ProductTable extends React.Component {
  render() {
    return (
      <div className="product-table">
        <h1>ProductTable</h1>
        {this.props.children}
        <ProductCategoryRow />
        <ProductRow />
      </div>
    )
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <div>
        ProductCategoryRow
      </div>
    )
  }
}

class ProductRow extends React.Component {
  render() {
    return (
      <div>
        ProductRow
      </div>
    )
  }
}

const PRODUCTS = [
  {id: 1, category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {id: 2, category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {id: 3, category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {id: 4, category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {id: 5, category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {id: 6, category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div className="filterable-product-table">
        <h1>FilterableProductTable</h1>
        <SearchBar />
        <ProductTable>
          <h2>something inside ProductTable</h2>
        </ProductTable>
        <SimpleList products={PRODUCTS} />
      </div>
    )
  }
}

export default FilterableProductTable;
