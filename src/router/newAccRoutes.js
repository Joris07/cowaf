import Bienvenue from "@/views/Bienvenue.vue";
import PhotoProfil from "@/views/PhotoProfil.vue";
import Register from "@/views/Register.vue";
import Telephone from "@/views/Telephone.vue";

export default [
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
		path: '/telephone',
		component: Telephone
	},
];