<template>
	<div>
		<BackButton @click="previousStep" v-show="currentStep > 1" :disableDefaultBehavior="true"></BackButton>
		<div id="main">
			<h1 id="question">{{ currentStepData.title }}</h1>
			<keep-alive>
				<component 
					:is="currentStepData.component" 
					:callback="validate"
				></component>
			</keep-alive>
		</div>
	</div>
	<Nav selectedIcon="2"></Nav>
</template>
  
<script>
	import { markRaw } from "vue";
	import Nav from '@/components/Nav.vue';
	import BackButton from '@/components/BackButton.vue';
	import Arriver from '@/views/Publier/Arriver.vue';
	import Depart from '@/views/Publier/Depart.vue';
	import Prix from '@/views/Publier/Prix.vue';
	import CalendrierDepart from '@/views/Publier/CalendrierDepart.vue';
	import NombreAnimaux from '@/views/Publier/NombreAnimaux.vue';
	import PhotoMaterielTransport from '@/views/Publier/PhotoMaterielTransport.vue';
	
	export default {
		name: 'EtapesPublier',
		components: { BackButton, Nav },
		data() {
			return {
				steps: [
					{ title: 'D’où partez-vous ?', component: Depart },
					{ title: 'Où allez-vous ?', component: Arriver },
					{ title: 'Fixer le prix du trajet', component: Prix },
					{ title: 'Quand partez-vous ? ', component: CalendrierDepart },
					{ title: 'Dites nous en plus sur votre capacité de transport', component: NombreAnimaux },
					{ title: 'Dites nous en plus sur votre capacité de transport', component: PhotoMaterielTransport },
				],
				currentStep: 1,
				maxStep: 7,
				Depart: markRaw(Depart),
				Arriver: markRaw(Arriver),
				Prix: markRaw(Prix),
				CalendrierDepart: markRaw(CalendrierDepart),
				NombreAnimaux: markRaw(NombreAnimaux),
				PhotoMaterielTransport: markRaw(PhotoMaterielTransport)
			};
		},
		computed: {
			currentStepData() {
				return this.steps[this.currentStep - 1];
			}
		},
		methods: {
			validate() {
				if ((this.maxStep - 1) == this.currentStep) alert("Impossible d'enregistrer votre trajet pour le moment.");
				if (this.currentStep < (this.maxStep - 1)) this.currentStep++;
			},
			previousStep() {
				if (this.currentStep > 1) {
					this.currentStep--;
				}
			}
		},
	};
</script>
  
<style scoped>
	#main {
		display: flex;
		flex-direction: column;
		padding: 75px 30px 25% 30px;
		gap: 20px;
	}

  	#question {
		color: var(--color-blue);
		font-size: 26px;
		font-weight: 700;
  	}
</style>
  