import logo from '../logo.svg';
import React from 'react';

function Navbar() {
	return (
		<nav>
			<div className="brand">
				<img src={logo} alt="" className="brand--logo" />
				<h3 className="brand--name">ReactFacts</h3>
			</div>
			<h4 className="title">React Course - Project 1</h4>
		</nav>
	);
}

export default Navbar;
