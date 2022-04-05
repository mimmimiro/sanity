import Home from './views/Home.vue';
import About from './components/About.vue';
import Products from './components/Products.vue';
import Contact from './components/Contact.vue';

export default [
	{
		name: 'about',
	 	path: '/about',
	 	component: About
	 },
	{
		name: 'products',
		path: '/products', 
		component: Products
	},
	{ 
		name: 'contact', 
		path: '/contact', 
		component: Contact 
	},
	
	{ 
		name: 'home', 
		path: '/', 
		component: Home 
	}
];
