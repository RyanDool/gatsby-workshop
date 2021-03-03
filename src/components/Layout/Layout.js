import React from 'react';
import { Menu } from '../../components';
import { title } from './Layout.module.css';

const Layout = ({ children, pageTitle }) => {
	return (
		<main>
			<title>{pageTitle}</title>
			<Menu />
			<h1 className={title}>{pageTitle}</h1>
			{ children }
		</main>
	)
}

export default Layout;