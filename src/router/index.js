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
import Bienvenue from '@/views/Bienvenue.vue';
import PhotoProfil from '@/views/PhotoProfil.vue';
import Telephone from '@/views/Telephone.vue';
import Prix from '@/views/Publier/Prix.vue'
import Login from '@/views/Login.vue';
import Trajets from '@/views/Trajets.vue';
import Discussion from '@/views/Discussion.vue';
import { authService } from '@/services/authService';

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
		path: '/bienvenue',
		component: Bienvenue
	},
	{
		path: '/photoprofil',
		component: PhotoProfil
	},
	{
	  path: '/register',
	  component: Register
	},
	{
		path: '/profil',
		component: Profil
	},
	{
		path: '/telephone',
		component: Telephone
	},
	{
		path: '/recherche',
		component: Recherche,
		meta: { requiresAuth: true }
	},
	{
		path: '/profil',
		component: Profil,
		meta: { requiresAuth: true }
	},
	{
		path: '/trajets',
		component: Trajets,
		meta: { requiresAuth: true }
	},
	{
		path: '/publier',
		component: Depart,
		meta: { requiresAuth: true }
	},
	{
		path: '/messages',
		component: Discussion,
		meta: { requiresAuth: true }
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
