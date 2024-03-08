import {createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie';
import store from '../store';
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Animal from '@/views/Animal.vue'
import Bougies from '@/views/Bougies.vue'
import Description from '@/views/Description.vue'
import FicheAnimal from '@/views/FicheAnimal.vue'
import Recherche from '@/views/Recherche.vue'
import Profil from '@/views/Profil.vue'
import Depart from '@/views/Publier/Depart.vue'
import Arriver from '@/views/Publier/Arriver.vue'
import Prix from '@/views/Publier/Prix.vue'
import Login from '@/views/Login.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
	{
		path: '/',
		component: Home,
		name : 'home'
	},
	{
		path: '/login',
		component: Login
	},
	{
	  path: '/register',
	  component: Register
	},
	{
		path: '/test',
		component: Prix,
		meta: { requiresAuth: true }
	},
	{
		path: "/:pathMatch(.*)*",
		redirect: "/"
	}
  ]
})

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	const isAuthenticated = store.getters.isAuthenticated;

	if (requiresAuth && !isAuthenticated) {
	  	next('/login');
	} else {
	  	next();
	}
});

export default router
