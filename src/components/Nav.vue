<template>
	<nav class="navbar">
	  <router-link v-for="(route, index) in routes" :key="index" :to="route.path" class="group">
		<img :src="'/public/img/' + route.icon + '.svg'" alt="Icon" :class="{ 'selected': route.id === selectedIcon }"></img>
		<p :class="{ 'selected': route.id === selectedIcon }">{{ route.texte }}</p>
	  </router-link>
	</nav>
</template>
  
<script>
  	export default {
		props: ['selectedIcon'],
		data() {
			return {
				routes: [
					{ path: '/trajets', icon: 'nav-localisations', texte: 'Mes trajets', id : "1" },
					{ path: '/publier', icon: 'nav-plus', texte: 'Publier', id : "2"},
					{ path: '/rechercher', icon: 'nav-localisation', texte: 'Rechercher', id : "3" },
					{ path: '/messages', icon: 'nav-message', texte: 'Messages', id : "4" },
					{ path: '/profil', icon: 'nav-profil', texte: 'Profil', id : "5" }
				]
			};
		}
 	};
</script>
  
<style scoped>
	.selected {
		filter: brightness(0) saturate(100%) invert(12%) sepia(86%) saturate(3568%) hue-rotate(204deg) brightness(95%) contrast(93%);
	}

	.navbar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-around;
		padding: 10px;
		background-color: white;
		color: #fff;
	}

	.group {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.navbar p, 
	.navbar a {
		font-size: 10px;
		text-decoration: none;
		color: #B7B4B4;
	}

	img {
		width: 22px;
	}
</style>
