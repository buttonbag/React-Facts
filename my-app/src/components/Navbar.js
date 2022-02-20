import logo from '../logo.svg';
import React from 'react';

function Navbar() {
	return (
		<nav>
			<div className="brand">
				<img src={logo} alt="" className="nav-logo" />
				<h1 className="brand-name">ReactFacts</h1>
			</div>
			<div className="title">React Course - Project 1</div>
		</nav>
	);
}

export default Navbar;
