import * as React from "react";
import { Layout } from '../components';

const IndexPage = () => {
	let pageTitle = 'Home';
	return (
		<Layout pageTitle={pageTitle}>
			<p>This is the {pageTitle} page.</p>
		</Layout>
	)
}

export default IndexPage
