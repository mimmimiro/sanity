<template>
    <form class="contact__form">
		<h1 class="contact__form-title">Contact Us</h1>
		      <input class="contact__form-input" type="text" placeholder="Name" v-model="form.name" />
		      <input class="contact__form-input" type="email" placeholder="E-mail" v-model="form.email" />
		      <input class="contact__form-message" type="textarea" placeholder="Message" v-model="form.message" />
            <!-- added a reset button, to clear the form when clicked-->
		      <button class="contact__form-button" @click="submit_form">Submit</button>
		      <button class="contact__form-button" @click="clear">Clear form</button>
	  </form>
  </template>

<script>
	export default {
		data() {
			return {
				form: {
				name: null,
				email: null,
				message: null,
				clearForm: null,
				},
			};
		},
		methods: {
			submit_form() {
				alert(`Thank you, !`);
			},
			clear() {
            this.clearForm = null;
		},
	},
};
</script>

<style>
	.contact__form {
		display: flex;
		flex-flow: column nowrap;
		font-family: var(--font-family);
		padding-bottom: var(--bottom-large);
		margin: 0 auto;
		max-width: 600px;
		width: 100%;
		}
	.contact__form-title {
		font-size: var(--heading);
		color: 633930;
		padding-top: var(--top-large);
		padding-bottom: var(--bottom-large);
		}

	.contact__form-input {
		border: 1px solid black;
		padding: 10px 10px;
		font-size: 0.7em;
		margin-bottom: 0.8em;
		font-weight: bold;
		}
	.contact__form-message {
		border: 1px solid black;
		padding: 70px 10px;
		font-size: 0.8em;
		font-weight: bold;
		}
	.contact__form-button {
		background: #633930;
		border: solid 1px #633930;
		color: white;
		cursor: pointer;
		padding: 10px 50px;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		margin-top: 0.5em;
		font-size: 0.8em;
		}
		
	.contact__form-button:hover {
		background: #276448;
		border: solid 1px #276448;
		}
</style>