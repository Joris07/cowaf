import {createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Animal from '@/views/Animal.vue'
import Bougies from '@/views/Bougies.vue'
import Description from '@/views/Description.vue'
import FicheAnimal from '@/views/FicheAnimal.vue'
import Recherche from '@/views/Recherche.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
	{
		path: '/',
		component: Home,
		name : 'home'
	},
	{
	  path: '/register',
	  component: Register
	},
	{
		path: '/test',
		component: Recherche
	},
	{
		path: "/:pathMatch(.*)*",
		redirect: "/"
	}
  ]
})

export default router
