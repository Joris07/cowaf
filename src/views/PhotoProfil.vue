<template>
	<div id="main">
		<BackButton />

		<div id="container-photo" @click="onFileSelected">
			<div id="ellipse-container">
				
				<svg xmlns="http://www.w3.org/2000/svg" width="186" height="186" viewBox="0 0 186 186" fill="none">
					<circle cx="93" cy="93" r="93" fill="#E7EDF4"/>
				</svg>
				<!-- Utilisation de :src pour lier l'image choisie -->
				<img v-if="imageUrl" :src="imageUrl" alt="profil image">
				<!-- Image par défaut si aucune image n'est choisie -->
				<img v-else src="/img/image-plus.png" alt="plus image">
			</div>
			<label for="fileInput" id="button-file">
				Ajouter une photo de profil
				<input type="file" id="fileInput" @change="onFileSelected" style="display: none;" />
			</label>
		</div>
		<button class="button-border-blue bold" @click="submit">Valider</button>
	</div>
</template>
  
<script>
	import BackButton from '@/components/BackButton.vue';

	export default {
		name: 'PhotoProfil',
		components: { BackButton },
		data() {
			return {
				imageUrl: null, // Stocke l'URL de l'image choisie
			};
		},
		methods: {
			onFileSelected(event) {
				const files = event.target.files;
				if (files.length > 0) {
					const file = files[0];
					this.imageUrl = URL.createObjectURL(file); // Crée et met à jour l'URL de l'image
				}
			},
			submit() {
				alert("Impossible de créer de nouveau compte pour le moment.")
				this.$router.push('/bienvenue');
			}
		}
	};
</script>
  
<style scoped>
	#main {
		padding: 200px 0px 55px 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
		height: 100vh;
		justify-content: space-between;
		overflow: hidden;
	}

	#button-file {
		border-radius: 60px;
		width: 247px;
		height: 36px;
		background-color: var(--color-blue);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	#container-photo {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: auto;
		max-width: 100%; 
		max-height: 100%; /* S'assurer que l'image reste dans le cercle */
		border-radius: 50%;
	}

	#ellipse-container {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}
</style>
  