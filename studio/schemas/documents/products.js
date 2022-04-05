export default {
	title: 'Products',
	name: 'products', 
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string'
		},

		{
			title: 'productImage',
			name: 'productImage',
			type: 'image',
			
		 },
		{
			title: "Description",
			name: "description",
			type: "text"
		},
		{
			title: 'price',
			name: 'price',
			type: 'number',
		},
		{
			title: 'Category',
			name: 'category',
			type: 'reference',
			to: [{ type: 'category' }]
		},
		
	]
}