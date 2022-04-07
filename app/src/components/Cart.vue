<template>
  <main>
    <h1>Your Cart</h1>
    <section class="cart">
      <div v-for="product in cart" :key="product._id">
		  <!-- <div v-for="(product, index) in cart" :key="index"> -->
        <h3>{{product.title}}</h3>
        <img :src="product.productImage.asset.url" />
        <div>{{ product.price }}</div>
		  <div class="product__category"> {{ product.category.type }}</div>
			<div class="product__description"> {{ product.description }}</div>
        <button @click="removeFromCart(product)">Remove from cart</button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
	data() {
		return {
			cart: []
		}
	}
}
</script>