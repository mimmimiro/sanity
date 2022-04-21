<template> 
	<section class="about">
		<div class="about__title"> {{ title }} </div>
			<article class="about__article"> 
				<p>
					Art is a diverse range of human activity, and resulting product, that involves creative or imaginative talent expressive of technical proficiency, beauty, emotional power, or conceptual ideas.
					<br>
					There is no generally agreed definition of what constitutes art, and its interpretation has varied greatly throughout history and across cultures. The three classical branches of visual art are painting, 
					sculpture, and architecture.Theatre, dance, and other performing arts, as well as literature, music, film and other media such as interactive media, are included in a broader definition of the arts. </p> 
					<br>
					<p> Until the 17th century, art referred to any skill or mastery and was not differentiated from crafts or sciences. In modern usage after the 17th century, where aesthetic considerations are paramount, the fine arts are separated and distinguished from acquired skills in general, such as the decorative or applied arts.
					<br>
					The nature of art and related concepts, such as creativity and interpretation, are explored in a branch of philosophy known as aesthetics. The resulting artworks are studied in the professional fields of art criticism and the history of art. 
					</p>
			</article>
	</section>
</template>
 
<script>
	export default {
		data() {
			return {
				title: 'Art'
			}
		}
			
		};
</script>

<style> 
	.about {
		display: grid;
		grid-template-columns: var(--grid-column-12);
		column-gap: var(--gap-big);
	}
	.about__title {
		font-size: var(--heading);
		grid-column: 1/ span 12;
		text-align: center;
		color: 633930;
		margin-top: 40px;
	}
	.about__article {
		font-size: var(--body);
		grid-column: 2/ span 10;
		margin-top: 60px;
		margin-bottom: 100px;
		text-align: justify;
	}
	
	.text__section {
		margin-bottom: var(--bottom-medium);
	}
	/* Small and medium devices */
	@media screen and (max-width: 1024px)  {
		.about__title {
			grid-column: 3/ span 8;
		}
		.about__article {
			grid-column: 1/ span 11;
			margin-left: 20px;
		}
	}
</style>