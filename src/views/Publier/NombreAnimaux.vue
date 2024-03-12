<template>
	<h3 id="question" class="bold">Combien d'animaux pouvez-vous transporter ?</h3>
	<div id="choice-container">
		<div class="choice" v-on:click="select">
			<img src="/img/icon-chien.png" alt="icone de chien">
			<div class="number bold">1</div>
		</div>
		<div class="choice" v-on:click="select">
			<img src="/img/icon-chien-et-chat.png" alt="icone de chien">
			<div class="number bold">2</div>
		</div>
	</div>
	<div id="save-choice-container" v-if="canValidate">
		<div class="input-container">
			<input id="checkbox-save-choice" type="checkbox">
		</div>
		<label for="checkbox-save-choice">Sauvegarder mes choix pour mes prochains trajets</label>
	</div>
	<div id="btn-container">
		<button id="btn-validate" class="bold grow" @click="validate" :disabled="!canValidate">Valider</button>
	</div>
</template>

<script>
	export default {
		name: 'NombreAnimaux',
		props: {
			callback: Function,
		},
		data() {
			return {
				canValidate:  false
			}
		},
		methods: {
			select(event) {
				event.target.classList.toggle("clicked");
				document.querySelectorAll(".clicked").forEach(el => {
					if (el != event.target) {
						el.classList.remove("clicked");
					}
				})
				if (event.target.classList.contains("clicked")) {
					this.canValidate = true;
				} else {
					this.canValidate = false;
				}
			},
			validate() {
				this.callback()
			}
		}
	}
</script>
<style scoped>
	#choice-container {
		display: flex;
		justify-content: space-around;
	}

	.choice {
		background-color: var(--color-off-white);
		width: fit-content;
		padding: 25px;
		border-radius: 50%;
		position: relative;
	}

	.choice img {
		filter: invert(17%) sepia(70%) saturate(2761%) hue-rotate(204deg) brightness(90%) contrast(93%);
		pointer-events: none;
		width: 60px;
		height: 60px;
	}

	.clicked {
		background-color: var(--color-blue);
	}

	.clicked img {
		filter: invert(100%) sepia(44%) saturate(323%) hue-rotate(332deg) brightness(119%) contrast(100%);
	}

	.number {
		position: absolute;
		background-color: var(--color-blue);
		color: var(--color-white);
		padding: 10px;
		width: fit-content;
		width: 45px;
		font-size: 21px;
		text-align: center;
		left: 30%;
		bottom: -25px;
		border-radius: 50%;
	}

	#question {
		font-size: 17px;
		margin: 20px 0;
	}
	
	#btn-container {
		margin: 10px 0;
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

	#btn-validate:disabled {
		filter: brightness(75%);
	}

	#save-choice-container {
		display: flex;
		align-items: center;
		margin-top: 40px;
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
</style>