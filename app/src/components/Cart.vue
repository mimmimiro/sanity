<template>
  <main>
    <h1 class="cart__header">{{ title }}</h1>
    <section class="cart">
      <div v-for="product in cart" :key="product._id">
        <h3>{{product.title}}</h3>
        <img :src="product.productImage.asset.url" />
        <div>{{ product.price }}</div>
		  <div class="cart__category"> {{ product.category.type }}</div>
			<div class="cart__description"> {{ product.description }}</div>
        <button class="cart__button" @click="removeFromCart(product)">Remove from cart</button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
	data() {
		return {
			cart: [],
      title: 'Your cart'
		}
	},
	computed: {
        cartLength () {
            return this.cart.length
        }
    },
}
</script>

<style>

  .cart__header {
		color:#633930;
		text-align: center;
	}

</style>