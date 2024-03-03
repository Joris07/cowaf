<template>
	<div id="main">
		<BackButton />
		<div id="champs">
			<div>
				<label for="prenom">Prénom</label>
				<input type="text" class="input-gris" id="prenom">
			</div>
			<div>
				<label for="nom">Nom</label>
				<input type="text" class="input-gris" id="nom">
			</div>
			<div>
				<label for="email">E-mail</label>
				<input type="email" class="input-gris" id="email">
			</div>
			<div>
				<label for="password">Mot de passe</label>
				<input type="password" class="input-gris" id="password">
				<ul>
					<li>Au minimum une majuscule et des minuscules.</li>
					<li>Un caractère spécial.</li>
					<li>Un chiffre / numéro.</li>
				</ul>
			</div>
			<div>
				<label for="passwordConfirm">Confirmation du mot de passe</label>
				<input type="password" class="input-gris" id="passwordConfirm">
			</div>
		</div>
		<button class="button-border-blue bold">Commencer</button>
	</div>
</template>

<script>
	import BackButton from '@/components/BackButton.vue';

	export default {
		name: 'Register',
		components: { BackButton }
	};
</script>

<style scoped>
	#main {
		padding: 120px 26px 10px 26px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
	}

	label {
		font-size: 18px;
		font-weight: 500;
	}

	input {
		font-size: 18px;
		margin-top: 10px;
		caret-color: var(--color-blue);
	}

	#champs {
		display: flex;
		flex-direction: column;
		gap: 23px;
	}

	ul {
		padding-left: 20px;
	}
</style>
  