import React from 'react';
import { Layout } from '../components';

const AboutPage = () => {
	let pageTitle = 'About';
	return (
		<Layout pageTitle={pageTitle}>
			<p>This is the {pageTitle} page.</p>
		</Layout>
	)
}

export default AboutPage;