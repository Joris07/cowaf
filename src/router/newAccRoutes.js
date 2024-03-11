import Bienvenue from "@/views/Bienvenue.vue";
import PhotoProfil from "@/views/PhotoProfil.vue";
import Register from "@/views/Register.vue";
import Telephone from "@/views/Telephone.vue";
import Animal from "@/views/Animal.vue";
import Bougies from "@/views/Bougies.vue";
import TraitAnimal from "@/views/TraitAnimal.vue";

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
	{
		path: '/animal',
		component: Animal
	},
	{
		path: '/bougies',
		component: Bougies
	},
	{
		path: '/traitanimal',
		component: TraitAnimal
	},
];