import React from 'react';

import ReactDOM from 'react-dom';
// or I can import just the render method
//import { render } from 'react-dom';

import { BrowserRouter, Match, Miss } from 'react-router';

import Header from './components/Header';
import ProductList from './components/ProductList';
import NotFound from './components/NotFound';

import { formatPrice } from './extra';

formatPrice(1233);
console.log('FROM VIM again with webpack2');

const Root = () => {
	 return (
			<BrowserRouter>
				<div>
					<p><a href="/">products</a></p>
					<p><a href="/head">head</a></p>
					<Match exactly pattern="/" component={ProductList} />
					<Match exactly pattern="/head" component={Header} />
					<Miss component={NotFound} />
				</div>
			</BrowserRouter>
	);
};

ReactDOM.render(<Root />, document.querySelector('#root'));

// const name = "Mono";
// //render(<h1>mama</h1>, document.querySelector('#root'));
// // if I imported just the render method
// ReactDOM.render(
// 	<div>
// 		<ProductList />
// 		<Header/>
// 		<h1>Hello {name}, again!</h1>
// 		<h2>{`the name is ${name}`}</h2>
// 		<h2>{`Again name for ${name}`}</h2>
// 	</div>,
// 	document.getElementById('root')
// );

export default Root;
