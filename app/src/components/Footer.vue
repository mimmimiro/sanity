<template>
	<footer class="footer">
		<div class="footer__title">{{title}}</div>
		<nav class="footer__navigation">
			<RouterLink class="footer__navigation-link" :to="{ name: 'about' }">
				<div class="footer__navigation-social">
					<img class="footer__navigation-link--social" src="/images/flipkart.png" alt="facebook icon"> {{facebook}} 
					<img src="/images/arrow.png" alt="arrow-icon" class="footer__navigation-icon"></div> 
				<div class="footer__navigation-social">
					<img class="footer__navigation-link--social" src="/images/twitter.png" alt="twitter icon"> {{twitter}} 
					<img src="/images/arrow.png" alt="arrow-icon" class="footer__navigation-icon"></div> 
			</RouterLink>
			<p class="footer__navigation-mail"> {{mail}} </p>
		</nav>
	</footer>	
</template>


<script>
export default {
	data() {
		return {
			title: '@CartaDesign',
			facebook: 'Facebook',
			twitter: 'Twitter',
			mail: 'art@info.com',
		};
	},
}
</script>

<style>
	.footer {
		display: grid;
		grid-template-columns: var(--grid-column-12);
		grid-gap: var(--gap-big);
		padding-bottom: var(--bottom-small);
		font-size: var(--body);
		background-color: #fdfcfb;
	}
	.footer__title {
		grid-column: 1 / span 1;
		color: 276448;
		padding-left: 10px;
		padding-top: var(--top-small);
	}
	
	.footer__navigation {
		grid-column: 9 / span 3;
		padding-top: var(--top-small);
	}
	.footer__navigation-icon {
		width: 20px;
	}
	.footer__navigation-link {
		text-decoration: none;
		color: 276448;
	}
	.footer__navigation-link--social {
		width: 20px;
	}
	
	.footer__navigation-mail {
		margin-top: 20px;
		color: 276448;
	}
   /* Small and medium screen devices  */
   @media screen and (max-width: 1024px) {
		.footer__navigation {
			grid-column: 8 / span 4;
		}
	}
</style>