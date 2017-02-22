import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  goToStore(event) {
    event.preventDefault();
    console.log('you changed the URL');
    console.log(this.storeInput.value);
  }

  render() {
    // let name = 'mike';
    // console.log( `The name is: ${name}`);
    // return <p>Hello mummy</p>
    // return React.createElement('p', {className: 'testing'}, 'I love you');
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input } } />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}
// another way of passing storeInput that doesn't create a new function
// <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input } } />

export default StorePicker;
