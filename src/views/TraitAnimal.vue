<template>
	<div id="main">
		<div id="main-second">
			<div class="vingtdeux">
				<h1 class="bold">Comment le décriveriez-vous ?</h1>
				<div id="container-photo">
					<div class="trait-row">
                        <div class="trait-item" 
                            :class="{'selected': selectedTraits['amical']}" 
                            @click="selectedTraits['amical'] = !selectedTraits['amical']">
                            Amical
                        </div>
                        <div class="trait-item"
                            :class="{'selected': selectedTraits['Pétochard']}"
                            @click="selectedTraits['Pétochard'] = !selectedTraits['Pétochard']">
                            Pétochard
                        </div>
                    </div>
                    <div class="trait-row">
                        <div class="trait-item"
                            :class="{'selected': selectedTraits['Câlin']}"
                            @click="selectedTraits['Câlin'] = !selectedTraits['Câlin']">
                            Câlin
                        </div>
                        <div class="trait-item"
                            :class="{'selected': selectedTraits['Curieux']}"
                            @click="selectedTraits['Curieux'] = !selectedTraits['Curieux']">
                            Curieux
                        </div>
                        <div class="trait-item"
                            :class="{'selected': selectedTraits['Joueur']}"
                            @click="selectedTraits['Joueur'] = !selectedTraits['Joueur']">
                            Joueur
                        </div>
                    </div>
                    <div class="trait-row centered">
                        <div class="trait-item"
                            :class="{'selected': selectedTraits['Sauvage']}"
                            @click="selectedTraits['Sauvage'] = !selectedTraits['Sauvage']">
                            Sauvage
                        </div>
                        <div class="trait-item"
                            :class="{'selected': selectedTraits['Pleurnichard']}"
                            @click="selectedTraits['Pleurnichard'] = !selectedTraits['Pleurnichard']">
                            Pleurnichard
                        </div>
                    </div>
                    <div class="trait-row">
                        <div class="trait-item"
                            :class="{'selected': selectedTraits['Patient']}"
                            @click="selectedTraits['Patient'] = !selectedTraits['Patient']">
                            Patient
                        </div>
                        <div class="trait-item"
                            :class="{'selected': selectedTraits['Facile à vivre']}"
                            @click="selectedTraits['Facile à vivre'] = !selectedTraits['Facile à vivre']">
                            Facile à vivre
                        </div>
                    </div>
                    <div class="trait-row">
                        <div class="trait-column">
                            <div class="trait-item"
                            :class="{'selected': selectedTraits['Solitaire']}"
                            @click="selectedTraits['Solitaire'] = !selectedTraits['Solitaire']">
                            Solitaire
                        </div>
                        <div class="trait-item"
                            :class="{'selected': selectedTraits['Pipelette']}"
                            @click="selectedTraits['Pipelette'] = !selectedTraits['Pipelette']">
                            Pipelette
                        </div>
                        </div>
                        <div class="trait-column">
                            <div class="trait-item"
                            :class="{'selected': selectedTraits['Energique']}"
                            @click="selectedTraits['Energique'] = !selectedTraits['Energique']">
                            Energique
                        </div>
                        <div class="trait-item"
                            :class="{'selected': selectedTraits['Agressif']}"
                            @click="selectedTraits['Agressif'] = !selectedTraits['Agressif']">
                            Agressif
                        </div>
                        </div>
                    </div>
                    <div class="trait-row">
                        <div class="trait-item"
                            :class="{'selected': selectedTraits['Naime pas les autres animaux']}"
                            @click="selectedTraits['Naime pas les autres animaux'] = !selectedTraits['Naime pas les autres animaux']">
                            N'aime pas les autres animaux
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
						<span id="age-permis"></span>
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
		
		<button class="bold button-off-white" :class="{ 'disabled': !isAnyTraitSelected }" :disabled="!isAnyTraitSelected">Valider</button>
	</div>
</template>

<script>
	export default {
		name: 'TraitAnimal',
		data() {
			return {
				nomAnimal: '',
				selectedImageUrl: null,
                selectedTraits: {
                    'amical': false,
                    'Pétochard': false,
                    'Câlin': false,
                    'Curieux': false,
                    'Joueur': false,
                    'Sauvage': false,
                    'Pleurnichard': false,
                    'Patient': false,
                    'Facile à vivre': false,
                    'Solitaire': false,
                    'Pipelette': false,
                    'Energique': false,
                    'Agressif': false,
                    "Naime pas les autres animaux": false
                },
			};
		},
        computed: {
            isAnyTraitSelected() {
                return Object.values(this.selectedTraits).some(value => value);
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
	}

	#main-second {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 22px;
	}

	h1 {
		color: var(--color-blue);
		align-self: normal;
		max-width: 320px;
	}
    /**/
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
    .trait-row {
        display: flex;
        margin-top: 24px;
        gap: 10px;
        white-space: nowrap;
    }

    .trait-item {
        justify-content: center;
        border-radius: 50px;
        background-color: #e7edf4;
        color: #09458E;
        flex-grow: 1;
        padding: 10px 30px;
    }

    .centered {
        align-self: center;
    }

    .trait-column {
        display: flex;
        flex-direction: column;
        white-space: nowrap;
        flex-grow: 1;
        flex-basis: 0%;
        gap: 24px;
    }

    .trait-item.selected {
        background-color: #09458e; /* Nouvelle couleur de fond pour les éléments sélectionnés */
        color: #E7EDF4; /* Couleur de texte, si nécessaire */
    }
    .button-off-white.disabled {
        background-color: #e0e0e0; /* Gris clair pour le bouton désactivé */
        color: #a0a0a0; /* Texte plus clair pour indiquer qu'il est désactivé */
        cursor: not-allowed; /* Change le curseur pour indiquer qu'il n'est pas cliquable */
    }
</style>