import Recherche from "@/views/Recherche.vue";
import Trajets from '@/views/Trajets.vue';
import Discussion from '@/views/Discussion.vue';
import Profil from '@/views/Profil.vue';
import EtapesPublier from '@/views/Publier/EtapesPublier.vue';

const auth = true;

export default [
    {
        path: '/recherche',
        component: Recherche,
        meta: { requiresAuth: auth }
    },
    {
		path: '/profil',
		component: Profil,
		meta: { requiresAuth: auth }
	},
	{
		path: '/trajets',
		component: Trajets,
		meta: { requiresAuth: auth }
	},
	{
		path: '/messages',
		component: Discussion,
		meta: { requiresAuth: auth }
	},
	{
		path: '/publier',
		component: EtapesPublier,
		meta: { requiresAuth: auth }
	}
];