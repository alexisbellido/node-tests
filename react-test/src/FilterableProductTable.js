import React from "react";
import SearchBar from "./SearchBar.js";


function SimpleList(props) {
  const products = props.products

  // should I use toString()?
  // <li key={product.id.toString()}>{product.name}</li>
  const simpleList = products.map((product) =>
    <li key={product.id}>{product.name} at {product.price}</li>
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

// class ProductTable extends React.Component {
//   render() {
//     return (
//       <div className="product-table">
//         <h1>ProductTable</h1>
//         <ul>
//           {this.props.products.map((product) =>
//             <li key={product.id}>{product.name} at {product.price}</li>
//           )}
//         </ul>
//         {this.props.children}
//         <ProductCategoryRow />
//         <ProductRow />
//       </div>
//     )
//   }
// }

// class ProductCategoryRow extends React.Component {
//   render() {
//     return (
//       <div>
//         ProductCategoryRow
//       </div>
//     )
//   }
// }

// class ProductRow extends React.Component {
//   render() {
//     return (
//       <div>
//         ProductRow
//       </div>
//     )
//   }
// }

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      // this assumes products are sorted and grouped by category, if not, the
      // category headers will be repeated. See T-Shirt in Sporting Goods
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      // key should better be product.id
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div className="filterable-product-table">
        <h1>FilterableProductTable</h1>
        <SearchBar />
        <ProductTable products={this.props.products}>
          <h2>something inside ProductTable</h2>
        </ProductTable>
      </div>
    )
  }
}

export default FilterableProductTable;
