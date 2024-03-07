<template>
	<div id="main">
		<BackButton />
		<div id="champs">
			<div>
				<label for="prenom">Prénom</label>
				<input type="text" class="input-gris" id="prenom" required>
			</div>
			<div>
				<label for="nom">Nom</label>
				<input type="text" class="input-gris" id="nom" required>
			</div>
			<div>
				<label for="email">E-mail</label>
				<input type="email" class="input-gris" id="email" required>
			</div>
			<div class="input-container">		
				<label for="password">Mot de passe</label>
				<div class="password-input">
					<input :type="passwordFieldType" class="input-gris" id="password" v-model="password" @input="validatePassword" required>
					<span class="toggle-password" @click="togglePasswordVisibility">
						<img :src="passwordFieldType === 'password' ? eyeIcon : eyeOffIcon" width="20" height="20" alt="Toggle Password Visibility">
					</span>
				</div>
				
				<ul>
					<li>
						Au minimum une majuscule et des minuscules.
						<img v-if="passwordCriteria.hasLowercase && passwordCriteria.hasUppercase" :src="checkBoxIcon" width="20" height="20" alt="Checked" class="checkbox-icon">
					</li>
					<li>
						Un caractère spécial.
						<img v-if="passwordCriteria.hasSpecialChar" :src="checkBoxIcon" width="20" height="20" alt="Checked" class="checkbox-icon">
					</li>
					<li>
						Un chiffre / numéro.
						<img v-if="passwordCriteria.hasNumber" :src="checkBoxIcon" width="20" height="20" alt="Checked" class="checkbox-icon">
					</li>
				</ul>
			</div>
			<div class="input-container">
				<label for="passwordConfirm">Confirmation du mot de passe</label>
				<div class="password-input">
					<input type="password" class="input-gris" :class="{'input-error': !passwordsMatch}" id="passwordConfirm" v-model="confirmPassword" @blur="validateConfirmation" required>
					<p v-if="!passwordsMatch" class="error-message">Les deux mots de passe ne sont pas pareils.</p>
				</div>
				
			</div>
		</div>
		<button class="button-border-blue bold">Inscription</button>
	</div>
</template>

<script>
	import BackButton from '@/components/BackButton.vue';

	export default {
		name: 'Register',
		components: { BackButton },
		data() {
			return {
				passwordFieldType: 'password',
				password: '',
      			confirmPassword: '',
				passwordsMatch:  this.password === this.confirmPassword,
				eyeIcon: '/public/icons/eye-line.svg',
      			eyeOffIcon: '/public/icons/eye-off-line.svg',
				checkBoxIcon: '/public/icons/checkbox-line.svg',
				passwordCriteria: {
					hasUppercase: false,
					hasLowercase: false,
					hasSpecialChar: false,
					hasNumber: false,
				},
			};
		},
		methods: {
			togglePasswordVisibility() {
				this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
			},
			validatePassword() {
				this.passwordCriteria.hasUppercase = /[A-Z]/.test(this.password);
				this.passwordCriteria.hasLowercase = /[a-z]/.test(this.password);
				this.passwordCriteria.hasSpecialChar = /[\W_]/.test(this.password);
				this.passwordCriteria.hasNumber = /\d/.test(this.password);
			},
			validateConfirmation() {
				this.passwordsMatch = this.password === this.confirmPassword;
			}
  		},
		watch: {
			confirmPassword() {
				this.validateConfirmation();
			}
		}
	};
</script>

<style scoped>
	#main {
		padding: 80px 26px 10px 26px;
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
		padding: 10px
	}

	#champs {
		display: flex;
		flex-direction: column;
		gap: 23px;
	}

	ul {
		padding-left: 20px;
	}

	.input-container {
		position: relative;
		width: 100%;
	}

	.password-input {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.toggle-password {
		position: absolute;
		right: 10px;
		cursor: pointer;
		top: 42%;
		transform: translateY(-50%);
	}

	.input-gris.input-error {
		border-color: red; /* Change l'encart en rouge */
	}

	.error-message {
		color: red; /* Message d'erreur en rouge */
		font-size: 0.8em; /* Ajustez selon vos besoins */
		margin-top: 5px;
	}

</style>
  