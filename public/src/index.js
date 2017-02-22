// let's go!
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';

import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';

// const Root = () => {
//   return (
//     <BrowserRouter>
//       <Match exactly pattern="/" component={StorePicker} />
//     </BrowserRouter>
//   )
// }

// <Match pattern="/store/:storeId" component={App} />
// <Miss component={NotFound} />

// <Route path="/store/:storeId" component={StorePicker} />
// <Route path="/" component={App} />

// render(<StorePicker/>, document.querySelector('#main'));
// render(<App/>, document.querySelector('#main'));

// render(<Root/>, document.querySelector('#main'));

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
