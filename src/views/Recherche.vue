<template>
	<div id="main">
		<img id="img-principal" src="/img/principal-search.png" alt="search">
        
        <div id="div-recherche">
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td><img src="/img/icon-depart.png" alt=""></td>
                            <td><input type="text" id="depart" class="input-blanc" placeholder="Départ"></td>
                        </tr>
                        <tr>
                            <td class="tiret"></td>
                        </tr>

                        <tr>
                            <td><img src="/img/icon-arrive.png" alt=""></td>
                            <td><input type="text" id="arrive" class="input-blanc" placeholder="Arrivée"></td>
                        </tr>
                        <tr>
                            <td class="tiret"></td>
                        </tr>

                        <tr>
                            <td><img src="/img/icon-date.png" alt="date"></td>
                            <td>
                                <input type="text" id="date-text" class="input-blanc" placeholder="Date" onfocus="this.style.display='none'; document.getElementById('date-date').style.display='block'; document.getElementById('date-date').focus();" />
                                <input type="date" id="date-date" class="input-blanc" style="display:none;" onblur="if(!this.value) { this.style.display='none'; document.getElementById('date-text').style.display='block'; }" />
                            </td>
                        </tr>
                        <tr>
                            <td class="tiret"></td>
                        </tr>

                        <template v-for="(animal, index) in animals" :key="index">
                            <tr>
                                <td>
                                    <img :src="getIcon(animal.selected)" alt="" width="24" height="24">
                                </td>
                                <td>
                                    <select v-model="animal.selected" class="input-blanc">
                                        <option disabled value="">Sélectionnez</option>
                                        <option v-for="option in animalOptions" :key="option" :value="option">{{ option }}</option>
                                    </select>
                                </td>
                                <td class="tiret-hori"></td>
                                <td style="width: 20%;"><input type="number" class="input-blanc" placeholder="0" min="0" max="9" v-model="animal.number"></td>
                            </tr>
                            <tr v-if="index < animals.length - 1">
                                <td colspan="4" class="tiret"></td>
                            </tr>
                        </template>
                    </tbody>
                </table>
                <img src="/img/plus-bleu.png" alt="Plus" @click="addRow">
            </div>
            <button id="chercher" class="bold">Chercher un trajet</button>
        </div>

        <table id="historique" class="column-flex-center">
            <tr v-for="trajet in trajets" :key="trajet.id" class="trajet-tr">
                <td><img src="/img/icon-historique.png" alt=""></td>
                <td>
                    <p>{{ trajet.lieuDepart }} -> {{ trajet.lieuDestination }}</p>
                    <p class="date-trajet">{{ formatDate(trajet.dateHeureDepart) }}</p>
                </td>
                <td><img src="/img/arrow-right.png" alt=""></td>
            </tr>
        </table>
    </div>
    <Nav selectedIcon="3"></Nav>
</template>
  
<script>
	import BackButton from '@/components/BackButton.vue';
    import Nav from '@/components/Nav.vue';
    import { trajetService } from '@/services/trajetService';

	export default {
		name: 'Home',
		components: { BackButton, Nav},
        data() {
			return {
                animals: [{ selected: '', number: 0 }],
                animalOptions: ['Chat','Chien', 'Tortue'],
                trajets: []
            };
		},
		methods: {
			addRow() {
                this.animals.push({ selected: '', number: 0 });
            },
            getIcon(animal) {
                if (animal === 'Chien') {
                    return '/img/icon-chien.png';
                } else {
                    return '/img/icon-chat.png';
                }
            },
            async fetchTrajets() {
                try {
                    this.trajets = await trajetService.trajetsParticipes();
                } catch (error) {
                    throw error;
                }
            },
            formatDate(dateString) {
                return new Date(dateString).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                });
            },
		},
        mounted() {
            this.fetchTrajets();
        },
	};
</script>

<style scoped>
	#main {
		display: flex;
		flex-direction: column;
		align-items: center;
        height: 100vh;
        background-color: var(--color-off-white);
        padding: 150px 0px 100px 0px;
	}

    .column-flex-center {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .date-trajet {
        color: #09458E;
        font-size: 14px;
        font-weight: 400;
    }

    .trajet-tr {
        width: 80%;
    }

    .n-trajet {
        display: flex;
        width: 80%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }

    #historique {
        margin-top: 20px;
    }

    #img-principal {
        height: 40%;
        width: 100%;
        position: absolute;
        z-index: 0;
        top: 0;
    }

    #div-recherche {
        background-color: white;
        top: 25%;
        z-index: 1;
        border-radius: 12px;
        width: 80%;
        max-width: 300px;
    }

    #div-recherche > div {
        padding: 12px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    tr {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .input-blanc {
        font-size: 15px;
        width: 100%;
        height: 40px;
        border: none;
    }

    .tiret {
        width: 100%;
        height: 0.5px;
        border-radius: 5px;
        background: #D9D9D9;
    }

    .tiret-hori {
        width: 50px;
        height: 1px;
        border-radius: 5px;
        background: #D9D9D9;
        transform: rotate(90deg);
    }

    table {
        width: 100%;
    }

    #chercher {
        border-radius: 0px 0px 12px 12px;
        background: var(--color-blue);
        color: white;
        font-size: 15px;
        width: 100%;
        border: none;
        padding: 14px;
    }

    .input-blanc::placeholder {
        color: #B7B4B4; /* Couleur du placeholder */
        opacity: 1; /* Nécessaire pour certains navigateurs pour voir la couleur */
    }

    .input-blanc[type="date"] {
        position: relative;
        -webkit-appearance: none; /* Pour Chrome */
        appearance: none;
        padding-right: 30px; /* Ajustez selon la taille de l'icône de calendrier */
        cursor: pointer; /* Pour indiquer que l'élément est interactif */
    }

    .input-blanc[type="date"]::-webkit-calendar-picker-indicator {
        position: absolute;
        right: 0;
        opacity: 0; /* Rend l'icône d'origine invisible, mais elle reste fonctionnelle */
        width: 20px; /* Ajustez la largeur pour couvrir l'icône d'origine complètement */
        height: 100%;
        cursor: pointer; /* Assure que le curseur indique une action */
    }
</style>
  