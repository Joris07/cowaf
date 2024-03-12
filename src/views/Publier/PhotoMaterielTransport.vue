<template>
	<div>
		<h3 id="question" class="bold">Prenez en photo votre matériel de transport</h3>
		<p>Ces photos vont donner confiance aux propriétaires d'animaux qui vous choisiront plus facilement pour les trajets.</p>
	</div>
	<div id="input-container">

		<label @click="chooseImage" id="label-input-photo-display" :style="{ 'background-image': `url(${imageData})` }" >
			<img v-if="!imageData" src="/img/image-plus.png" alt="icône image">
		</label>
		<input @input="onSelectFile" ref="fileInput" id="input-photo-display" type="file">

		<label id="label-input-add-photo" for="input-add-photo">
			<p class="bold">+</p>
		</label>
		<input id="input-add-photo" type="file">
		</div>
		<div v-if="imageData">
			<div id="save-choice-container">
		<div class="input-container">
			<input id="checkbox-save-choice" type="checkbox">
		</div>
		<label for="checkbox-save-choice">Sauvegarder mes choix pour mes prochains trajets</label>
		</div>
		<div id="btn-container">
			<button id="btn-validate" class="bold grow" @click="validate">Valider</button>
		</div>
	</div>

</template>

<script>

	export default {
		name: 'PhotoMaterielTransport',
		data() {
			return {
				imageData: null
			}
		},
		props: {
			callback: Function,
		},
		methods: {
			chooseImage () {
				this.$refs.fileInput.click()
			},

			onSelectFile () {
				const input = this.$refs.fileInput
				const files = input.files
				if (files && files[0]) {
					const reader = new FileReader
					reader.onload = e => {
					this.imageData = e.target.result
					}
					reader.readAsDataURL(files[0])
					this.$emit('input', files[0])
				}
			},

			validate() {
				this.callback()
			}
		}
	}
</script>

<style scoped>
	#question {
		font-size: 18px;
		margin-bottom: 10px;
	}
	input[type="file"] {
		display: none;
	}

	#label-input-photo-display, #label-input-add-photo {
		background-color: var(--color-off-white);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#label-input-photo-display {
		border-radius: 8px;
		padding: 80px;
		width: 100px;
		height: 100px;
		background-repeat: no-repeat;
		background-size: cover;
	}

	#label-input-add-photo {
		border-radius: 50%;
		color: var(--color-blue);
		font-size: 19px;
		padding: 10px;
		width: 40px;
		height: fit-content;
	}

	#label-input-add-photo > p {
		position: relative;
		top: -2px;
	}

	#input-container {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	#btn-container {
		margin-top: 20px;
		display: flex;
		justify-content: center;
	}

	#btn-validate {
		color: var(--color-blue);
		background-color: var(--color-off-white);
		border-radius: 20px;
		border: none;
		padding: 4% 8%;
		font-size: 17px;
		width: 50%;
		margin: 0 auto;
		transition: .15s;
	}

	#btn-validate:hover:not(:disabled) {
		background-color: var(--color-blue);
		color: var(--color-off-white);
	}

	#save-choice-container {
		display: flex;
		align-items: center;
		width: 100%;
		gap: 20px;
	}

	.input-container {
		background-color: var(--color-off-white);
		padding: 10px;
		border-radius: 50%;
		width: 35px;
		display: flex;
		justify-content: center;

	}

	.input-container input {
		border: var(--color-blue);
		color: var(--color-blue);
	}

	p {
		font-size: 15px;
	}
</style>