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
		<div class="form">
			<button class="button-border-blue bold" :class="{'form-error': !isFormValid}" @click="submitForm">Inscription</button>
			<p v-if="!isFormValid" class="error-message">Veuillez remplir correctement tous les champs avant de vous inscrire.</p>
		</div>	
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
				isFormValid: true,
				passwordsMatch:  this.password === this.confirmPassword,
				eyeIcon: '/icons/eye-line.svg',
      			eyeOffIcon: '/icons/eye-off-line.svg',
				checkBoxIcon: '/icons/checkbox-line.svg',
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
			},
			validateForm() {
			// Validez ici tous les champs requis du formulaire
			// Par exemple, vérifiez si tous les champs sont non vides et que les mots de passe correspondent
				return this.password && this.confirmPassword && this.passwordsMatch && this.password === this.confirmPassword;
			},
			submitForm() {
				if (this.validateForm()) {
					this.isFormValid = true;
					this.$router.push('/telephone');
				} else {
					// Gérez le cas où le formulaire n'est pas valide
					// Par exemple, affichez un message d'erreur global ou mettez en surbrillance les champs invalides
					// alert("Veuillez remplir correctement tous les champs avant de vous inscrire.");
					this.isFormValid = false;
				}
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
    	height: 100vh
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
		justify-content: center;
	}

	.toggle-password {
		position: absolute;
		right: 10px;
		cursor: pointer;
		transform: translateY(25%);
	}

	.input-gris.input-error {
		border-color: red !important; /* Change l'encart en rouge */
	}

	.form {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}

	.form-error {
		border: 3px solid red !important;
	}

	.error-message {
		color: red; /* Message d'erreur en rouge */
		font-size: 0.8em; /* Ajustez selon vos besoins */
		margin-top: 5px;
	}

</style>
  