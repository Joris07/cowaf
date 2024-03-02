import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'

const router = VueRouter.createRouter({
  history: createWebHashHistory(),
  routes: [
	{
	  path: '/',
	  component: Home
	},
	{
	  path: '/register',
	  component: Register
	},
	{ 
		path: '*', 
		redirect: '/' 
	}
  ]
})

export default router
