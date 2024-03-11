<template>
	<div id="main">
		<BackButton />
		<div id="top">
			<img src="/img/lumo-grand.png" alt="Photo animal" id="photo">
			<h1 type="text" id="nom">Lumo</h1>
			<h2 id="age">3 ans</h2>
		</div>

		<div id="mid">
			<p class="bold">16 trajets effectués</p>
			<div id="avis">
				<img src="/img/stars.png"alt="">
				<p id="note" class="bold">4.8 / 5<span> - avis</span></p>
				<button id="lire-avis">lire les avis ></button>
			</div>
		</div>

		<div id="bottom">
			<span class="description">Amical</span>
			<span class="description">Joueur</span>
			<span class="description">Facile à vivre </span>
			<span class="description">Câlin</span>
		</div>
	</div>
</template>

<script>
	import BackButton from '@/components/BackButton.vue';
	export default {
		name: 'FicheAnimal',
		components: { BackButton }
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
  