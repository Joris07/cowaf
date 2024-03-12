<template>
	<div id="main">
		<img src="/img/dog-accueil.png" alt="dog accueil" id="dog-accueil">
		<div id="bottom">
			<div id="title">
				<h3 class="bold">Votre application de</h3>
				<h2 class="blue-text" id="bold-full">covoiturage animalier</h2>
			</div>
			<div id="buttons">
				<router-link to="/register">
					<button class="button-border-blue bold">Commencer</button>
				</router-link>
				<div id="bottom-buttons">
					<router-link to="/login" id="sans-compte">Déjà un compte ?</router-link>
					<router-link to="/login" id="connexion" class="bold">Connexion</router-link>
				</div>
			</div>
			<button v-if="!isAppInstalled" @click="install" id="install" class="button-border-blue bold">Télécharger l'application</button>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: "App",
		data() {
			return {
				deferredPrompt: null,
				isAppInstalled: false
			};
		},
		created() {
			window.addEventListener("beforeinstallprompt", e => {
				e.preventDefault();
				this.deferredPrompt = e;
			});
			
			window.addEventListener("appinstalled", () => {
				this.deferredPrompt = null;
				this.isAppInstalled = true;
			});

			if (window.matchMedia('(display-mode: standalone)').matches) {
				this.isAppInstalled = true;
			}
		},
		methods: {
			async install() {
				if (this.deferredPrompt) {
					this.deferredPrompt.prompt();
				}
			}
		}
	};
</script>

<style scoped>
	#buttons {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	#install {
		text-align: center;
	}

	#install > img {
		width: 25px;
		height: 25px;
	}

	a {
		text-decoration: none;
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
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
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
		padding-bottom: 20px;
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

	@media only screen and (min-width: 768px) {
		#dog-accueil {
			display: none;
		}

		#main {
			padding-top: 100px;
		}
	}
</style>
  