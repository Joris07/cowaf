<template>
	<div>
		<img src="/src/assets/img/dog-accueil.png" alt="dog accueil" id="dog-accueil">
		<div id="bottom">
			<div id="title">
				<h3 class="bold">Votre application de</h3>
				<h2 class="bold blue-text">covoiturage animalier</h2>
			</div>
			<div id="buttons">
				<button class="button-border-blue bold">Commencer</button>
				<div id="">
					<a href="" id="sans-compte">Déjà un compte ?</a>
					<button id="connexion" class="bold">Connexion</button>
				</div>
			</div>
		</div>
	</div>
	<router-view></router-view>
</template>

<script>
	import BackButton from '@/components/BackButton.vue';

	export default {
		name: 'Home',
		components: { BackButton }
	};
</script>

<style scoped>
	#buttons {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}

	#title {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0;
	}
	
	#sans-compte {
		text-decoration: none;
		color: black;
		cursor: pointer;
	}

	#connexion {
		border-radius: 5px;
		background-color: var(--color-blue);
		width: 175px;
		height: 44px;
		color: white;
		border: 2px solid var(--color-blue);
	}

	#dog-accueil {
		position: relative;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 110vw;
	}

	#bottom {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
	}
</style>
  