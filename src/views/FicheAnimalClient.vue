<template>
	<div id="main">
		<div id="top">
			<img v-if="selectedImageUrl" :src="selectedImageUrl" alt="Aperçu de l'image" id="photo">
			<h1 type="text" id="nom">{{ nomAnimal }}</h1>
			<h2 id="age">{{ age }} ans</h2>
		</div>

		<div id="mid">
			<p class="bold">0 trajet effectué</p>
			<div id="avis">
				<img src="/img/stars.png"alt="">
				<p id="note" class="bold">- / 5<span> - avis</span></p>
				<button id="lire-avis">lire les avis ></button>
			</div>
		</div>

		<div id="bottom">
			<span class="description" v-if="selectedTraits['Amical']">Amical</span>
			<span class="description" v-if="selectedTraits['Pétochard']">Pétochard</span>
			<span class="description" v-if="selectedTraits['Câlin']">Câlin</span>
			<span class="description" v-if="selectedTraits['Curieux']">Curieux</span>
			<span class="description" v-if="selectedTraits['Joueur']">Joueur</span>
			<span class="description" v-if="selectedTraits['Sauvage']">Sauvage</span>
			<span class="description" v-if="selectedTraits['Pleurnichard']">Pleurnichard</span>
			<span class="description" v-if="selectedTraits['Patient']">Patient</span>
			<span class="description" v-if="selectedTraits['Facile à vivre']">Facile à vivre</span>
			<span class="description" v-if="selectedTraits['Solitaire']">Solitaire</span>
			<span class="description" v-if="selectedTraits['Pipelette']">Pipelette</span>
			<span class="description" v-if="selectedTraits['Energique']">Energique</span>
			<span class="description" v-if="selectedTraits['Agressif']">Agressif</span>
			<span class="description" v-if="selectedTraits['Naime pas les autres animaux']">N'aime pas les autres animaux</span>
		</div>
		<div id="bottom">
			<button class="bold button-off-white" @click="nextStep" style="margin-top: 40px">Enregistrer</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'FicheAnimalClient',
		data() {
			return {
				nomAnimal: '',
				selectedImageUrl: null,
                age: undefined,
                selectedTraits: {}
			};
		},
		created() {
			// Récupération du nom et de l'image de l'animal
			this.nomAnimal = localStorage.getItem('nomAnimal');
            this.age = localStorage.getItem('age');
			this.selectedImageUrl = localStorage.getItem('selectedImage');
			this.selectedTraits = JSON.parse(localStorage.getItem('selectedTraits'));
		},
		methods: {
			nextStep() {
				alert("Impossible d'enregistrer votre animal pour l'instant. Réessayez plus tard.");
				this.$router.push('/recherche');
			}
		}
	};
	
</script>
  
<style scoped>
	#main {
		padding: 100px 40px 20px 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
	}

	#nom {
		font-size: 35px;
		color: var(--color-blue);
		font-weight: 900;
	}

	#photo {
		width: 100%;
		border-radius: 10px;
	}

	h2 {
		text-align: center;
		font-weight: 800;
	}

	#top {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 10px;
	}

	#avis {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	#mid {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}

	#lire-avis {
		color: #BCBCBC;
		text-align: center;
		font-size: 14px;
		font-weight: 500;
		background-color: white;
		border: none;
	}

	#bottom {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
		justify-content: center;
		align-items: center;
	}

	.description {
        border-radius: 70px;
        background: var(--color-blue);
        gap: 10px;
        color: white;
        border: none;
        padding: 6px 20px;
    }
</style>
  