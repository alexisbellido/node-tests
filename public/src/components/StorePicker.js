import React from 'react';

class StorePicker extends React.Component {
  render() {
    // let name = 'mike';
    // console.log( `The name is: ${name}`);
    // return <p>Hello mummy</p>
    // return React.createElement('p', {className: 'testing'}, 'I love you');
    return (
      <form className="store-selector">
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
