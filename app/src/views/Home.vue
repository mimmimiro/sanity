<template>
	<Slideshow />
	<Article />
</template>

<script>
	import Slideshow from '../components/Slideshow.vue';
	import Article from '../components/Article.vue';

	export default {
		name: 'Home',
		components: {
			Slideshow,
			Article
		},
	data() {
		return{

		}
	}	
	}
</script>

<style>

</style>