<template>
		<main>
			<!-- cart-modal, the cart section appears when clicked image icon-->
			<section class="cart">
   			 <div>
						<button @click="showCart = !showCart">
						<img class="cart__image" src="/images/cart.png" alt="shopping-cart">
						</button>
						<span >{{ cart.length }}</span>
     				 <div v-if="showCart" class="cart__dropdown">
							<h2 class="cart__header">Your cart</h2>
							<p v-if="cart.length <= 0">Your cart is empty!</p>
							<ul class="cart__dropdown-list">
									<li
										v-for="product in cart"
										:key="product._id"
									>
										Item:{{ product.title }} ${{ product.price}}
										<button class="cart__button" @click="removeFromCart(product)">Remove</button>
									</li>
							</ul>
							<h5 class="cart__total">Total: ${{ totalPrice }} </h5>
							<button @click="checkout" class="cart__checkout">checkout</button>
      			</div>
   			 </div>
 			</section>

			 <!-- product section - all the products are fetched from Sanity -->
			<h1 class="product__header">{{ title }}</h1>
			<div v-if="loading">waiting</div>
				<div class="product" v-else>
					<section class="product__section" v-for="product in products" :key="product._id">
						<card>
							<h3 class="product__title">Title - {{ product.title}}</h3>
							<img class="product__image" :src="product.productImage.asset.url" :alt="product.title"> 
							<div class="product__category">Category: {{ product.category.type }}</div>
							<div class="product__description"> {{ product.description }}</div>
							<div class="product__price">Price ${{ product.price}}</div>
							<button class="product__button" @click="addToCart(product)">Add to cart</button>
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
		apiVersion: '2022-03-30', // when the project where first created
		useCdn: false // false for localhost, true for netlify
	});
	export default {
		components: {
			Card,
			// Cart
		},
		data() {
			return {
				loading: true,
				result: null,
				title: 'Art shop',
				products: [],
				cart: [],
				showCart: false,
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
		computed: {
			 totalPrice() {
              let total = 0;
              total += this.cart.reduce((left, curent) => left + curent.price, 0);
               return total;
         }
		},
		methods: {
    		addToCart(product) {
      		this.cart.push(product);
				// this.$emit("addToCart", product);
				// console.log(product);
				console.log(this.cart);
    	},
			removeFromCart(product) {
     		 	this.cart.splice(this.cart.indexOf(product), 1);
    		},
			checkout() { 
			 this.cart = [];
			 alert(`Thank you, for shopping at our store !`);
			 }
		}
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
		text-align: center;
	}

	.product__title {
		color: #633930;
	}
	
	.product__image {
		width: 20vw;
		height: 30vh;
	}
	.product__button,
	.cart__button,
	.cart__checkout {
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
	.product__button:hover,
	.cart__button:hover,
	.cart__checkout:hover {
		background: #276448;
		border: solid 1px #276448;
	}
	.cart {
		margin: 15px 0px 0px 1200px;
		font-size: 1.6rem;
		background-color: rgb(242, 209, 76);
		width: 30px;
		height: 30px;
		border-radius: 10px;
	}

	.cart__header {
		font-size: 1.8rem;
	}

	.cart__total {
		font-size: 1.3rem;
		padding-top: 10px;
	}
	.cart__image {
		width: 30px;
		margin: 0px;
		position: absolute;
	}
	.cart__dropdown {
      background: white;
      border: 1px solid lightgray;
      border-radius: 10px;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
      color: #333;
      font-size: 1.3rem;
      overflow: auto;
      padding: 15px;
      position: absolute;
      right: 0;
      width: 12rem;
		margin: 10px;
	}
   .cart__dropdown-list {
      list-style: none;
		font-size: 1.2rem;
   }
   
	/* Small and medium screen devices  */
   @media screen and (max-width: 1024px) {
		.product {
			grid-template-columns: repeat(2, 1fr);
		}
		.product__image {
			width: 35vw;
			height: 28vh;
			padding: 10px;
		}
		.cart{
			margin: 0px 45px 0px 873px;
		}
		.cart__image {
			right: 40px;
		}
	}
</style>