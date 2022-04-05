export default {
   state() {
      return {
         images: [
            {
               title: 'blossom',
               caption: 'Impression of spring',
               file: './images/blossom.jpeg'
            },
            {
               title: 'collar',
               caption: 'The face of power',
               file: './images/collar.jpeg'
            },
            {
               title: 'hand',
               caption: 'we come in peace',
               file: './images/hand.jpeg'
            },
				{
               title: 'sorrow',
               caption: 'The face of sorrow ',
               file: './images/face.jpeg'
            },
         ],
      }
   },

   getters: {
      getImages(state) {
         return state.images;
      }
   }
}