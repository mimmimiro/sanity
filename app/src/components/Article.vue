<template> 
	<main class="article">
		<header class="article__title"> {{ title }} </header>
			<article class="article__section"> 
				<p>
					In the perspective of the history of art, artistic works have existed for almost as long as humankind: from early pre-historic art to contemporary art; however, some theorists think that the typical concept of "artistic works" doesn't fit well outside modern Western societies.
					One early sense of the definition of art is closely related to the older Latin meaning, which roughly translates to "skill" or "craft", as associated with words such as "artisan". English words derived from this meaning include artifact, artificial, artifice, medical arts, 
					and military arts. However, there are many other colloquial uses of the word, all with some relation to its etymology. 
				</p> 
					<br>
				<p>
					With a mission to create an online marketplace that is simple, secure, and profitable for artists everywhere, Artmajeur has created the world's first global virtual art gallery with over 10 million visitors. Artmajeur offers you exclusive prices on original artworks by emerging
					and established international artists, shipping worldwide in 24 to 48h to your doorstep for free. Enjoy our selection of original artworks and high-quality prints that will make perfect gifts or decorate your walls with style!
				</p>
			</article>
	</main>
</template>
 
<script>
	export default {
		data() {
			return {
				title: 'The perspective of Art'
			}
		}
			
		};
</script>

<style> 
	.article {
		display: grid;
		grid-template-columns: var(--grid-column-12);
		column-gap: var(--gap-big);
		margin: var(--outside-margin);
	}
	.article__title {
		font-size: var(--heading);
		grid-column: 1/ span 12;
		text-align: center;
		color: 633930;
		padding-top: var(--top-large);
	}
	.article__section {
		font-size: var(--body);
		grid-column: 1/ span 12;
		margin-top: 20px;
		margin-bottom: 120px;
	}
	
	/* Small and medium screen devices  */
   @media screen and (max-width: 1024px) {
		.article__title {
			grid-column: 2/ span 8;
		}
		.article__section {
			grid-column: 1/ span 11;
		}
	}
</style>