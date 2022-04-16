<template>
	<main class="slideshow">
			<figure class="slideshow__images">
					<section v-for="image in [currentIndex]" :key="image">
						<img class="slideshow__image" :src="startImage.file" :alt="startImage.caption" >
						<figcaption class="slideshow__images-caption">{{ startImage.caption }}</figcaption>
					</section>
			</figure>
			<button class="previous" @click="previous" ><img class="previous__image" src="/images/pointb.png" alt="previous"> </button>
     		<button class="next" @click="next"><img class="next__image" src="/images/point.png" alt="next"></button>
	</main>
</template>

<script>
	export default {
		data() {
			return {
			image: [
            {
               title: 'blossom',
               caption: 'Impression of spring',
               file: './images/blossom.jpg'
            },
            {
               title: 'collar',
               caption: 'The face of power',
               file: './images/collar.jpg'
            },
            {
               title: 'hand',
               caption: 'we come in peace',
               file: './images/hand.jpg'
            },
				{
               title: 'sorrow',
               caption: 'The face of sorrow ',
               file: './images/face.jpg'
            },
         ],
			timer: null,
			currentIndex: 0
			
			};
	   },
		mounted() {
    			this.startSlideshow();
  		},
		//   the slides glide every 6 seconds with this method
		methods: { 
			startSlideshow() {
      		this.timer = setInterval(this.next, 6000);
    		},
			next() {
			   this.currentIndex = this.currentIndex === this.image.length - 1 ? 0 : this.currentIndex + 1;
				
			},
			previous() {
				this.currentIndex = this.currentIndex === 0 ? this.image.length - 1 : this.currentIndex - 1;
				
			},
	 	},
		computed: {
			startImage() {
				return this.image[this.currentIndex];
		}
 	}
}
</script>

<style>
	.slideshow__image {
		 box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		 width: 40vw;
		 height: 60vh;
		 margin-left: 250px;
		 margin-top: 30px;
	}

	.slide-enter-active,
	.slide-leave-active {
		transition: all 0.5s ease;
	}
	.slide-enter-from,
	.slide-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}
	.slide-leave-active {
		position: absolute;
	}
	.slide-move {
		transition: transform 0.8 ease;
	}
	.slideshow__images-caption {
		margin-left: 250px;
		color: 276448;
		font-size: 1.4rem;
		margin-top: 5px;
		font-weight: bold;
	}
	.previous, .next {
		cursor: pointer;
		position: absolute;
		top: 55%;
		width: auto;
		padding: 10px 14px;
		font-size: 15px;
		transition: 0.7s ease;
		border-radius: 0 4px 4px 0;
 	}
  .next {
    	right: 475px;
  }

  .previous {
    	left: 200;
 	}

	.next__image {
		width: 30px;
	}
	.previous__image {
		width: 30px;
	}
	/* Small and medium screen devices  */
   @media screen and (max-width: 1024px) {
		.slideshow__image {
		  width: 690px;
		  height: 700px;
		  margin-left: 100px;
		}
	}

</style>