<template>
<div id="main">
	<BackButton />
	<div id="champs">
		<div>
			<label for="email">E-mail</label>
			<input type="email" class="input-gris" id="email" v-model="email" required>
		</div>
		<div class="input-container">    
			<label for="password">Mot de passe</label>
			<div class="password-input">
				<input :type="passwordFieldType" class="input-gris" id="password" v-model="password" @input="validatePassword" required>
				<span class="toggle-password" @click="togglePasswordVisibility">
					<img :src="passwordFieldType === 'password' ? eyeIcon : eyeOffIcon" width="20" height="20" alt="Toggle Password Visibility">
				</span>
			</div>
		</div>
	</div>
	<div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
	<button class="button-border-blue bold" @click="login">Se connecter</button>
</div>
</template>

<script>
import BackButton from '@/components/BackButton.vue';
import { authService } from '@/services/authService';
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';

export default {
	name: 'Login',
	components: { BackButton },
	setup() {
		const router = useRouter();
		
		const email = ref('');
		const password = ref('');
		const passwordFieldType = ref('password');
		const errorMessage = ref('');
		
		const eyeIcon = '/icons/eye-line.svg';
		const eyeOffIcon = '/icons/eye-off-line.svg';
		const checkBoxIcon = '/icons/checkbox-line.svg';

		const togglePasswordVisibility = () => {
			passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';
		};

		const isValidForm = computed(() => {
			return email.value.trim() !== '' && password.value.trim() !== '';
		});

		const login = async () => {
			try {
				errorMessage.value = '';
				
				if (!isValidForm.value) {
					errorMessage.value = 'Veuillez remplir tous les champs';
					return;
				}
				
				await authService.login({ email: email.value, password: password.value });

				router.push('/rechercher');
			} catch (error) {
				errorMessage.value = 'Mauvais identifiants';
			}
		};

		return {
			email,
			password,
			passwordFieldType,
			eyeIcon,
			isValidForm,
			errorMessage,
			eyeOffIcon,
			checkBoxIcon,
			togglePasswordVisibility,
			login
		};
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
		justify-content: center;
	}

	.toggle-password {
		position: absolute;
		right: 10px;
		cursor: pointer;
		transform: translateY(25%);
	}

	.input-gris.input-error {
		border-color: red;
	}

	.error-message {
		color: red;
		font-size: 0.8em;
		margin-top: 5px;
	}

</style>
  