<template>
	<div id="main">
		<div id="main-second">
			<div>
				<h1 class="bold">Combien de bougies a-t-il soufflé ?</h1>
			</div>
			<div class="vingtdeux">
				<div id="container-photo">
					<img src="/img/gateau.png" alt="">
				</div>
				<div id="number-selector" class="number-selector">
					<div class="numbers-scroll-container">
						<div 
							v-for="num in 30" 
							:key="num" 
							class="number" 
							:class="{ 'active': num === age }" 
							@click="updateValue(num)">
						{{ num }}
						</div>
					</div>
				</div>
			</div>
			
			<div class="vingtdeux">
				<h1 class="bold">Son permis</h1>
				<div id="permis">
					<span id="photo-permis">
						<img v-if="selectedImageUrl" :src="selectedImageUrl" alt="Aperçu de l'image" style="width: 100%; height: 100%;">
					</span>
					<div id="texte">
						<span id="nom-permis" v-if="!nomAnimal"></span>
						<div id="nom-animal" v-if="nomAnimal">{{ nomAnimal }}</div>
						<span id="age-permis" v-if="!age"></span>
						<div id="age-animal" v-if="age">{{ age }} ans</div>
						<div id="description-permis">
							<span class="description"></span>
							<span class="description"></span>
							<span class="description"></span>
							<span class="description"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<button class="bold button-off-white" @click="nextStep">Valider</button>
	</div>
</template>
<script>
	export default {
		name: 'Bougies',
		data() {
			return {
				nomAnimal: '',
				selectedImageUrl: null,
				age: 0,
			};
		},
		methods: {
			nextStep(){
				localStorage.setItem('age', this.age);
				this.$router.push('/TraitAnimal');
			},
			updateValue(value) {
				this.age = value;
			}
		},
		created() {
			// Récupération du nom et de l'image de l'animal
			this.nomAnimal = localStorage.getItem('nomAnimal');
			this.selectedImageUrl = localStorage.getItem('selectedImage');
		}
	}
</script>
  
<style scoped>
	#main {
		padding: 50px 40px 20px 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
	}

	.vingtdeux {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 22px;
		width: 100%;
		overflow: hidden;
	}

	#main-second {
		display: flex;
		flex-direction: column;
		gap: 22px;
		width: 100%;
	}

	h1 {
		color: var(--color-blue);
		align-self: normal;
		max-width: 320px;
	}

	#permis {
		display: flex;
		align-items: normal;
		gap: 40px;
		border: 2px solid transparent;
		border-image: linear-gradient(to top, transparent 25%, #D9D9D9 75%) 1;
		box-sizing: border-box;
		padding: 22px 22px 0px 22px;
		border-radius: 17px 17px 0px 0px;
	}

	#photo-permis {
		width: 100px;
		height: 100px;
		border-radius: 5px;
		background: #E4E4E4;
	}

	#texte {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	#nom-permis {
		width: 100px;
		height: 14px;
		border-radius: 100px;
		background: #D9D9D9;
	}

	#nom-animal {
		width: 100%;
		caret-color: var(--color-blue);
		color: var(--color-blue);
		font-weight: 700;
		border : none;
		outline: none;
		font-size: unset;
	}

	#age-animal {
		width: 100%;
		font-weight: 700;
		border : none;
		outline: none;
		font-size: unset;
	}

	#age-permis {
		width: 50px;
		height: 10px;
		border-radius: 100px;
		background: #D9D9D9;
	}

	.description {
		width: 100px;
		height: 3px;
		background: #D9D9D9;
		border-radius: 100px;
	}

	#description-permis {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	/**/
	.number-selector {
		overflow-x: auto;
		display: flex;
		width: 100%;
		flex-wrap: nowrap;
		padding-left: 47.5%;
		padding-right: 42.5%;
		position: relative;
		scrollbar-width: none;
	}

	.numbers-scroll-container {
		display: flex;
		flex-wrap: nowrap;
		/* position: relative; Pour le contexte de positionnement des enfants sticky */
  		height: 100%;
	}

	.number {
		flex: none; /* Éléments flexibles qui ne grandissent ni ne rétrécissent */
		scroll-snap-align: center; /* Aligner correctement lors du défilement */
		display: inline-block;
		margin-right: 10px; /* Espacer les chiffres */
		padding: 5px 10px; /* Couleur de fond pour les chiffres non-sélectionnés */
		color: #09458E; /* Couleur du texte pour tous les chiffres */
		text-align: center;
		border-radius: 25%;
		opacity: 1; /* Assurez-vous que les numéros sont pleinement opaques au départ */
  		transition: opacity 0.3s;
	}

	.number.active {
		background-color: #09458E; /* Couleur de fond pour le chiffre sélectionné */
		color: white; /* Couleur du texte pour le chiffre sélectionné */
	}

</style>
  