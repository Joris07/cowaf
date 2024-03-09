import {createRouter, createWebHistory } from 'vue-router'
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
import Trajets from '@/views/Trajets.vue';
import { authService } from '@/services/authService';

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
		path: '/rechercher',
		component: Recherche
	},
	{
		path: '/profil',
		component: Profil
	},
	{
		path: '/trajets',
		component: Trajets
	},
	{
		path: '/publier',
		component: Depart
	},
	{
		path: "/:pathMatch(.*)*",
		redirect: async (to) => {	
			const userId = await authService.validate();
		
			if (userId && userId !== 0) {
			  	return "/rechercher";
			} else {
			  	return "/";
			}
		}
	}
  ]
})

router.beforeEach(async (to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
	if (requiresAuth) {
		try {
			const userId = await authService.validate();
			
			if (userId && userId !== 0) {
				next();
			} else {
				next('/login');
			}
		} catch (error) {
			next('/login');
		}
	} else {
		next();
	}
});

export default router
