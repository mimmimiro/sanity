<template>
		<main>
			<h1 class="product__header">{{ title }}</h1>
			<div v-if="loading">waiting</div>
				<div class="product" v-else>
					<section class="product__section" v-for="product in products" :key="product._id">
						<card>
						<div class="product__title">Title - {{ product.title}}</div>
						<img class="product__image" :src="product.productImage.asset.url" alt="product-image"> 
						<div class="product__category">Category: {{ product.category.type }}</div>
						<div class="product__description"> {{ product.description }}</div>
						<div class="product__price">Price ${{ product.price}}</div>
						<button class="product__button">Add to cart</button>
						</card>
					</section>
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
				result: null,
				title: 'Art shop',
				products: [],
			}
		},
		async created() {
			const query = `
			*[_type == $type] | order(title asc) {
				_id,
				title,
				description,
				price,
						
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
			this.products = this.result;
		},
	}
</script>

<style>
	.product {
		display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: var(--gap-big);
		margin: var(--outside-margin);
		margin-top: var(--top-large);
	}
	.product__header {
		color:#633930;
		margin: 20px 0px 15px 550px;
	}
	
	.product__image {
		width: 20vw;
		height: 30vh;
	}
	.product__button {
		background: #633930;
		border: solid 1px #633930;
		border-radius: 5px;
		color: white;
		cursor: pointer;
		padding: 10px 30px;
		text-align: center;
		letter-spacing: 0.1em;
		margin-top: 0.5em;
		font-size: 0.8em;
	}
	.product__button:hover {
		background: #276448;
		border: solid 1px #276448;
	}
</style>