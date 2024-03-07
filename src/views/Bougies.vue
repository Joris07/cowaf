<template>
	<div id="main">
		<div id="main-second">
			<div class="vingtdeux">
				<h1 class="bold">Combien de bougies a-t-il soufflé ?</h1>
				<div id="container-photo">
					<img src="/img/gateau.png" alt="">
				</div>
			</div>
			
			<div class="vingtdeux">
				<h1 class="bold">Son permis</h1>
				<div id="permis">
					<span id="photo-permis"></span>
					<div id="texte">
						<span id="nom-permis"></span>
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
		
		<button class="bold button-off-white">Valider</button>
	</div>
</template>
  
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
</style>
  