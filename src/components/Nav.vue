<template>
	<nav class="navbar">
	  <router-link v-for="(route, index) in routes" :key="index" :to="route.path">
		<i :class="route.icon"></i>
	  </router-link>
	</nav>
</template>
  
<script>
  	export default {
		data() {
		return {
			routes: [
				{ path: '/', icon: 'fas fa-home' },
				{ path: '/search', icon: 'fas fa-search' },
				{ path: '/messages', icon: 'fas fa-envelope' },
				{ path: '/notifications', icon: 'fas fa-bell' },
				{ path: '/profile', icon: 'fas fa-user' }
			]
		};
		}
 	};
</script>
  
<style scoped>
  .navbar {
	display: flex;
	justify-content: space-around;
	padding: 10px;
	background-color: #333;
	color: #fff;
  }
  
  .navbar i {
	font-size: 24px;
	cursor: pointer;
  }
</style>
  