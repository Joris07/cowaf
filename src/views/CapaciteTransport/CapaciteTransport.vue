<template>
	<BackButton></BackButton>
	<div id="main">
		<h1 id="question">Dites nous en plus sur votre capacité de transport.</h1>
		<keep-alive>
			<component :is="component" :callback="validate"></component>
		</keep-alive>
	</div>
	<Nav></Nav>
</template>

<script>
	import Nav from '@/components/Nav.vue';
	import BackButton from '@/components/BackButton.vue';
	import NombreAnimaux from './NombreAnimaux.vue';
	import PhotoMaterielTransport from './PhotoMaterielTransport.vue';

	export default {
		name: 'CapaciteTransport',
		components: {BackButton, Nav, NombreAnimaux, PhotoMaterielTransport},
		data() {
			return {
				component: "NombreAnimaux",
				etape: 1
			}
		},
		methods : {
			validate() {
				this.etape ++;
				switch (this.etape) {
					case 1 :
						this.component = "NombreAnimaux";
						break;
					case 2 :
						this.component = "PhotoMaterielTransport"
						break;
				}
			}
		}
	}
</script>

<style scoped>
#question {
	color: var(--color-blue);
	font-size: 30px;
	font-weight: 700;
}
#main {
	margin-top: 80px;
	padding: 0 30px;
}

</style>