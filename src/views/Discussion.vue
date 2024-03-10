<template>
	<div id="main">
        <h2 class="blue-text bold">Fonctionnalité à venir</h2>
    </div>
    <Nav selectedIcon="4"></Nav>
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
        height: 100vh;
        background-color: var(--color-off-white);
        padding: 150px 0px 100px 0px;
	}
</style>
  