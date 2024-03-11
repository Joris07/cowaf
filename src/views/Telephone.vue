<template>
	<div id="main">
		<BackButton />
	  	<img src="/img/car-phone.png" alt="voiture">
  
	  	<div id="off-white-background" class="full-height-container">
			<div>
				<h3 class="bold" id="titre-numero">Renseignez votre numéro de téléphone</h3>
				<input type="text" class="input-blanc" id="nom" placeholder="ex : 0678967898" v-model="phoneNumber" @input="filterInput" maxlength="10">
			</div>
			<button class="button-border-blue bold" v-if="isValidNumber" @click="submit">Valider</button>
		</div>
	</div>
</template>
  
<script>
	import BackButton from '@/components/BackButton.vue';

	export default {
		name: 'Telephone',
		components: { BackButton },
		methods: {
			filterInput() {
                this.phoneNumber = this.phoneNumber.slice(0, 10).replace(/[^0-9]/g, '');
            },
			submit() {
				this.$router.push('/photoprofil');
			}
		},
		data() {
            return {
                phoneNumber: '', // La variable liée à l'input
            };
        },
        computed: {
            isValidNumber() {
                // Validation basique d'un numéro de téléphone français (commence par 0 et a 10 chiffres)
                return /^0\d{9}$/.test(this.phoneNumber);
            }
        }
	};
</script>
  
<style scoped>
	#main {
		padding: 120px 0px 0px 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
		height: 100vh;
		overflow: hidden;
	}
  
	#off-white-background {
		background-color: var(--color-off-white);
		border-radius: 25px 25px 0px 0px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 55px 100px;
		height: 100%;
		justify-content: space-between;
	}
  
	#off-white-background > div {
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: center;
	}
  
	img {
	  	width: 100%;
	}
  
	h3 {
		color: var(--color-blue);
		font-size: 25px;
		text-align: center;
		width: 250px;
	}
  
	input {
		font-size: 25px;
		width: 225px;
		color: black;
	}

	.input-blanc {
		font-size: 25px;
		width: 225px;
		text-align: center;
		color: var(--color-blue); /* Assurez-vous que --color-blue est défini quelque part dans votre CSS global */
		/* Autres styles existants */
	}
</style>
  