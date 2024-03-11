<template>
	<div id="main">
		<div id="main-second">
            <div class="vingtdeux">
                <div class="title">
                    <h1 class="bold">Encore un petit instant !</h1>
                    <h2>Nous sommes en train de créer le permis de voyager de votre animal</h2>
                </div>
                    
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
                            <div v-if="displayedTraits.length" v-for="trait in displayedTraits" :key="trait" class="selected-trait">
                                {{ trait }}
                            </div>
                            <span class="description" v-if="!displayedTraits.length"></span>
                            <span class="description" v-if="!displayedTraits.length"></span>
                            <span class="description" v-if="displayedTraits.length < 2"></span>
                            <span class="description" v-if="displayedTraits.length < 2"></span>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div id="progress-container">
            <div id="progress-bar" :style="{width: progress + '%'}"></div>
            <div id="progress-text">{{ progress }} %</div>
        </div>
    </div>
</template>
<script>
    export default {
		name: 'LoadingScreen',
		data() {
			return {
				nomAnimal: '',
				selectedImageUrl: null,
                age: undefined,
                selectedTraits: {},
                displayedTraits: [],
                progress: 0
			};
		},
        created() {
			// Récupération du nom et de l'image de l'animal
			this.nomAnimal = localStorage.getItem('nomAnimal');
            this.age = localStorage.getItem('age');
			this.selectedImageUrl = localStorage.getItem('selectedImage');
            this.displayedTraits = localStorage.getItem('displayedTraits');
		},
        mounted() {
            this.fillProgress();
        },
        methods: {
            fillProgress() {
                // Increment the progress value by 1 every 10 milliseconds until it reaches 100
                let interval = setInterval(() => {
                    if (this.progress < 100) {
                        this.progress++;
                    } else {
                        clearInterval(interval);
                        this.$router.push('/ficheanimalclient');
                    }
                }, 25); // Ajustez la vitesse si nécessaire
            }
        }
    }
</script>
<style scoped>
    #main {
		padding: 40% 40px 20px 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 80px;
	}

    .vingtdeux {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 60px;
	}

	#main-second, .title {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 22px;
	}

	h1 {
		color: var(--color-blue);
		max-width: 320px;
        width: 100%;
        align-self: center;
        display: contents;
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
		flex-direction: row;
        flex-wrap: wrap;
	}
    #age-animal {
		width: 100%;
		font-weight: 700;
		border : none;
		outline: none;
		font-size: unset;
	}
    h2 {
		font-size: unset;
    }
    #progress-container {
  width: 80%;
  position: relative;
  border-radius: 20px;
  background-color: #E7EDF4;
}

#progress-bar {
  height: 8px;
  background-color: #09458E;
  width: 0%; /* Initial state */
  border-radius: 20px;

}

#progress-text {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #09458E;
  font-weight: bold;
}
</style>