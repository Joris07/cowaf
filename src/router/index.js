import {createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Animal from '@/views/Animal.vue';
import Bougies from '@/views/Bougies.vue';
import FicheAnimal from '@/views/FicheAnimal.vue';
import Arriver from '@/views/Publier/Arriver.vue';
import Bienvenue from '@/views/Bienvenue.vue';
import PhotoProfil from '@/views/PhotoProfil.vue';
import Telephone from '@/views/Telephone.vue';
import Prix from '@/views/Publier/Prix.vue'
import Login from '@/views/Login.vue';
import navRoutes from './navRoutes';
import newAccRoutes from './newAccRoutes';
import { authService } from '@/services/authService';

const router = createRouter({
  history: createWebHistory(),
  routes: [
	...navRoutes,
	...newAccRoutes,
	{
		path: '/',
		component: Home
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/ficheanimal',
		component: FicheAnimal
	},
	
	{
		path: '/arriver',
		component: Arriver
	},
	{
		path: '/prix',
		component: Prix
	},
	{
		path: "/:pathMatch(.*)*",
		redirect: '/recherche'
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
