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
                            <td><img src="/img/icon-date.png" alt=""></td>
                            <td><input type="text" id="date" class="input-blanc" placeholder="Date"></td>
                        </tr>
                        <tr>
                            <td class="tiret"></td>
                        </tr>

                        <template v-for="(animal, index) in animals" :key="index">
                            <tr>
                                <td>
                                    <img :src="getIcon(animal.selected)" alt="" width="24" height="24">
                                </td>
                                <!-- <td>
                                <input list="animal-options" class="input-blanc" placeholder="Chat" v-model="animal.selected">
                                <datalist id="animal-options">
                                    <option value="Chat"></option>
                                    <option value="Chien"></option>
                                    <option value="Tortue"></option>
                                </datalist>
                                </td> -->
                                <td>
                                    <select v-model="animal.selected" class="input-blanc" @click="resetSelection(index)">
                                        <option disabled value="">Sélectionnez un animal</option>
                                        <option v-for="option in animalOptions" :key="option" :value="option">{{ option }}</option>
                                    </select>
                                </td>
                                <td class="tiret-hori"></td>
                                <td><input type="number" class="input-blanc" placeholder="0" v-model="animal.number"></td>
                            </tr>
                            <!-- Ajout du tiret après chaque ligne d'animal -->
                            <tr v-if="index < animals.length - 1"> <!-- Ne pas ajouter après le dernier élément -->
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
            <tbody class="column-flex-center" style="gap: 20px;">
                <tr class="trajet-tr">
                    <td><img src="/img/icon-historique.png" alt=""></td>
                    <td>
                        <p>La Flèche, 72200 -> Angers, 49000</p>
                        <p class="date-trajet">9 janvier 2024</p>
                    </td>
                    <td><img src="/img/arrow-right.png" alt=""></td>
                </tr>

                <tr class="trajet-tr">
                    <td><img src="/img/icon-historique.png" alt=""></td>
                    <td>
                        <p>Le-Vieil-Baugé, 49150 -> La Flèche, 72200</p>
                        <p class="date-trajet">9 janvier 2024</p>
                    </td>
                    <td><img src="/img/arrow-right.png" alt=""></td>
                </tr>
            </tbody>
        </table>
    </div>
    <Nav selectedIcon="3"></Nav>
</template>
  
<script>
	import BackButton from '@/components/BackButton.vue';
    import Nav from '@/components/Nav.vue';

	export default {
		name: 'Home',
		components: { BackButton, Nav},
        data() {
			return {
                animals: [{ selected: '', number: 0 }],
                animalOptions: ['Chat','Chien', 'Tortue'],
            };
		},
		methods: {
			addRow() {
                this.animals.push({ selected: '', number: 0 });
            },
            getIcon(animal) {
                if (animal === 'Chien') {
                    return '/img/icon-chient.png';
                } else {
                    return '/img/icon-chat.png';
                }
            }
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
</style>
  