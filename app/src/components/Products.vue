<template>
		<main>
			<!-- <div v-if="loading">...</div>
			<pre v-else>
				{{ JSON.stringify(result, null, 3)  }}
			</pre> -->
			<div v-if="loading">waiting</div>
				<div v-else>
					<card>
					<div v-for="product in result" :key="product" class="title">Title: {{ product.title}}
						<div >Category: {{ product.category.type }}</div>
						<span>Description: {{ product.description }}</span>
						<div>Price: {{ product.price}}</div>
						<img :src="product.productImage.asset.url" alt="product-image"> 
					</div>
					</card>
			</div>
		</main>
</template>

<script>
	import sanityClient from '@sanity/client';
	import Card from './Card.vue';

	const sanity = sanityClient({
		projectId: 'quzsh0t6',
		dataset: 'production',
		apiVersion: '2022-03-30', // dagens prosjekter først opprettet
		useCdn: false // false for localhost, true for netlify
	});
	export default {
		components: {
			Card
		},
		data() {
			return {
				loading: true,
				result: null
			}
		},
		async created() {
			const query = `
			*[_type == $type] | order(name asc) {
				...,
						
				category-> {
					type
				},
				
				productImage {
					asset-> {
						url
				}
				}
			
				}
			`
         const params = {
				type: 'products'
			};

			this.result = await sanity.fetch(query, params);
			this.loading = false;
			
		},
	}
</script>

<style scoped>
img {
	width: 20vw;
	height: 30vh;
}
</style>