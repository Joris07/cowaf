<template>
	<div>
		<img src="/img/dog-accueil.png" alt="dog accueil" id="dog-accueil">
		<div id="bottom">
			<div id="title">
				<h3 class="bold">Votre application de</h3>
				<h2 class="blue-text" id="bold-full">covoiturage animalier</h2>
			</div>
			<div id="buttons">
				<button class="button-border-blue bold" @click="this.$router.push('/register')">Commencer</button>
				<div id="bottom-buttons">
					<a id="sans-compte">Déjà un compte ?</a>
					<button id="connexion" class="bold" @click="seConnecter">Connexion</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  methods: {
    seConnecter() {
      fetch('http://joris.gourdon.angers.mds-project.fr:40112/api/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			'email' : 'test@gmail.com',
			'password' : "pldhKLO74*"
		}),
	})
		.then((res) => res.json())
		.then((result) => console.log(result));
    },
  },
};
</script>

<style scoped>
	#buttons {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	#bold-full {
		font-weight: 800;
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
		font-weight: 500;
	}

	#connexion {
		border-radius: 5px;
		background-color: var(--color-blue);
		width: 150px;
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
		margin-top: 10%;
	}

	#bottom-buttons {
		gap: 10px;
		display: flex;
		align-items: center;
	}

	@media only screen and (min-width: 48em) {
		#connexion {	
			width: 175px;
		}

		#dog-accueil {
			height: 70vw;
		}

		#bottom {
			margin-top: 0%;
		}
	}
</style>
  