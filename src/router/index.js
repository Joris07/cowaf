import {createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Animal from '@/views/Animal.vue'

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
		component: Animal
	},
	{
		path: "/:pathMatch(.*)*",
		redirect: "/"
	}
  ]
})

export default router
