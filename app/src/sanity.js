import sanityClient from '@sanity/client';

export default sanityClient({
		projectId: 'quzsh0t6',
		dataset: 'production',
		apiVersion: '2022-03-30', // when the project where first created
		useCdn: true // false for localhost, true for netlify
	});