import {createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import FicheAnimal from '@/views/FicheAnimal.vue';
import Arriver from '@/views/Publier/Arriver.vue';
import Prix from '@/views/Publier/Prix.vue'
import Login from '@/views/Login.vue';
import navRoutes from './navRoutes';
import newAccRoutes from './newAccRoutes';
import Download from '@/views/Download.vue';
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
