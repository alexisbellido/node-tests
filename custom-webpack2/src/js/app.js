import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom';

import Header from './components/Header';
import { formatPrice } from './extra';

formatPrice(1233);
console.log('FROM VIM again with webpack2');

//render(<h1>mama</h1>, document.querySelector('#root'));

ReactDOM.render(
	<div>
		<Header/>
		<h1>Hello, world, again!</h1>
	</div>,
	document.getElementById('root')
);
