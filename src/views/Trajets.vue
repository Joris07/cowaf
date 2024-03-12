<template>
	<div id="main">
		<h2 class="blue-text bold">Fonctionnalité à venir</h2>
	</div>
    <Nav selectedIcon="1"></Nav>
</template>
  
<script>
    import Nav from '@/components/Nav.vue';

	export default {
		name: 'Profil',
		components: { Nav }
	};
</script>

<style scoped>
	#main {
		display: flex;
		flex-direction: column;
		align-items: center;
        padding: 75px 30px 25% 30px;
        gap: 20px;
	}
</style>
  