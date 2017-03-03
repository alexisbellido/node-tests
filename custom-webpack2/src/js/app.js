import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom';

import Header from './components/Header';
import ProductList from './components/ProductList';
import { formatPrice } from './extra';

formatPrice(1233);
console.log('FROM VIM again with webpack2');
console.log('xx');

//render(<h1>mama</h1>, document.querySelector('#root'));
const name = "Mono";

ReactDOM.render(
	<div>
		<ProductList />
		<Header/>
		<h1>Hello {name}, again!</h1>
		<h2>{`the name is ${name}`}</h2>
		<h2>{`Again name for ${name}`}</h2>
	</div>,
	document.getElementById('root')
);
