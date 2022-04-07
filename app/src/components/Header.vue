<template>
	<section class="container">
		<header class="container__header">
			<img class="container__header-logo" src="/images/logo.png" alt="app-logo">
			<nav class="header__navigation">
				<RouterLink class="header__navigation-link" :to="{ name: 'home' }">Home</RouterLink>
				<RouterLink class="header__navigation-link" :to="{ name: 'products' }">Buy Art</RouterLink>
				<RouterLink class="header__navigation-link" :to="{ name: 'about' }">About</RouterLink>
				<RouterLink class="header__navigation-link" :to="{ name: 'contact' }">Contact</RouterLink>
			</nav>
		</header>	
	</section>

</template>


<script>
	export default {
		data() {
			return {
			
			
			}
		},
	}
</script>

<style scoped>
	.container {
		display: grid;
		grid-template-columns: var(--grid-column-12);
		grid-gap: var(--gap-big);
		
	}
	.container__header {
		background-color: #fdfcfb;
		grid-column: 1/ span 12;
		display: grid;
		height: 120px;
	}
	.header__navigation {
		grid-column: 5 / span 7;
		padding-top: 40px;
	}

	.header__navigation-link {
		text-decoration: none;
		color: 276448;
		font-weight: 600;
		font-size: 2rem;
		padding: 20px;
	}
	.header__navigation-link:hover,
	.header__navigation-link:focus {
		color: 633930;
	}
	
	.container__header-logo {
		transition: transform 1s ease-in-out;
		width: 40%;
		padding: 0px 0px 0px 0px;
		grid-column: 1/ span 4;
		grid-row: 1;
		margin-left: 20px;
	}
	.container__header-logo:hover {
		transform: rotateZ(360deg);
	}

	/* Small and medium screen devices  */
   @media screen and (max-width: 1024px) {
      .container__header-logo {
          grid-column: 1 / span 2;             
   	}  
	}
   
</style>