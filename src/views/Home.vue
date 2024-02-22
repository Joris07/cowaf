<!-- Home.vue -->
<template>
	<div>
		<BackButton />
		<h1>Bienvenue sur ma page d'accueil Vue.js</h1>
		<button class="button-border-blue bold">Valider</button>
	</div>
</template>

<script>
	import BackButton from '@/components/BackButton.vue';

	export default {
		name: 'Home',
		components: { BackButton }
	};
</script>

<style scoped>

</style>
  