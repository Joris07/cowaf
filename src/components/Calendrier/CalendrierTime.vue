<template>
	<div id="div-select-time">
		<label id="label-for-select-time" for="input-select-time">A quelle heure partez-vous ?</label>
		<input id="input-select-time" type="time">
		<button id="btn-valider-time" class="grow" @click="validateTravelTime">Valider</button>
	</div>
</template>

<script>
	export default {
		name: 'CalendrierTime',
		props: {
			hideTime: Function,
			callback: Function,
		},
		methods: {
			validateTravelTime() {
				this.callback();
			}
		}
	}
</script>

<style scoped>
	#div-select-time {
		box-shadow: 0px -6px 58px -3px rgba(0, 0, 0, 0.15);
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		position: absolute;
		width: 100%;
		left: 0;
		padding: 5%;
		border-top-left-radius: 30px;
		border-top-right-radius: 30px;
		bottom: 6%;
		animation: slideIn .5s ease-in-out;
	}
	#label-for-select-time {
		color: var(--color-blue);
		font-weight: 700;
		font-size: 21px;
	}

	#input-select-time {
		border-radius: 50px;
		border: none;
		background: #E7EDF4;
		padding: 5px 5%;
		color: var(--color-blue);
		font-size: 30px;
		font-weight: 700;
	}
	#btn-valider-time {
		padding: 5px 10%;
		background-color: var(--color-blue);
		color: white;
		border: none;
		border-radius: 50px;
		font-size: 17px;
	}
	#btn-close-div-select-time {
		background: none;
		border: none;
		position: absolute;
		right: 10%;
		cursor: pointer;
		font-size: 20px;
	}

	.grow {
		transition: .15s;
	}

	.grow:hover {
		transform: scale(1.15);
	}
	@keyframes slideIn {
		0% { transform: translateY(100%);}
		100% { transform: translateY(0%); }
	}
</style>