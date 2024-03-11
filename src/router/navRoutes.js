import Recherche from "@/views/Recherche.vue";
import Trajets from '@/views/Trajets.vue';
import Discussion from '@/views/Discussion.vue';
import Profil from '@/views/Profil.vue';
import Depart from '@/views/Publier/Depart.vue';
import Calendrier from "@/views/Calendrier/Calendrier.vue";

const auth = true; // Mettre a true pour la version de production

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
		path: '/publier',
		component: Depart,
		meta: { requiresAuth: auth }
	},
	{
		path: '/messages',
		component: Discussion,
		meta: { requiresAuth: auth }
	},
	{
		path: '/calendrier',
		component: Calendrier
	}
];