import React from 'react';
import { Link } from 'gatsby';
import { navBar } from './Menu.module.css';

const Menu = () =>{
	return (
		<nav className={navBar}>
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/about'>About</Link></li>
			</ul>
		</nav>
	)
}

export default Menu;