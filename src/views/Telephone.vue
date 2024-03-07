<template>
	<div id="main">
		<BackButton />
	  	<img src="/img/car-phone.png" alt="voiture">
  
	  	<div id="off-white-background" class="full-height-container">
			<div>
				<h3 class="bold" id="titre-numero">Renseignez votre numéro de téléphone</h3>
				<input type="text" class="input-blanc" id="nom" placeholder="ex : 0678967898">
			</div>
			<button class="button-border-blue bold">Valider</button>
		</div>
	</div>
</template>
  
<script>
	import BackButton from '@/components/BackButton.vue';

	export default {
		name: 'Telephone',
		components: { BackButton }
	};
</script>
  
<style scoped>
	#main {
		padding: 120px 0px 0px 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
		height: 100vh;
	}
  
	#off-white-background {
		background-color: var(--color-off-white);
		border-radius: 25px 25px 0px 0px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 55px 100px;
		height: 100%;
		justify-content: space-between;
	}
  
	#off-white-background > div {
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: center;
	}
  
	img {
	  	width: 100%;
	}
  
	h3 {
		color: var(--color-blue);
		font-size: 25px;
		text-align: center;
		width: 250px;
	}
  
	input {
		font-size: 25px;
		width: 225px;
		color: black;
	}
</style>
  