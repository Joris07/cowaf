<template>
	<div id="main">
		<img id="img-principal" src="/src/assets/img/principal-search.png" alt="search">
        
        <div id="div-recherche">
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td><img src="/src/assets/img/icon-depart.png" alt=""></td>
                            <td><input type="text" id="depart" class="input-blanc" placeholder="Départ"></td>
                        </tr>
                        <tr>
                            <td class="tiret"></td>
                        </tr>

                        <tr>
                            <td><img src="/src/assets/img/icon-arrive.png" alt=""></td>
                            <td><input type="text" id="arrive" class="input-blanc" placeholder="Arrivée"></td>
                        </tr>
                        <tr>
                            <td class="tiret"></td>
                        </tr>

                        <tr>
                            <td><img src="/src/assets/img/icon-date.png" alt=""></td>
                            <td><input type="text" id="date" class="input-blanc" placeholder="Date"></td>
                        </tr>
                        <tr>
                            <td class="tiret"></td>
                        </tr>

                        <tr>
                            <td><img src="/src/assets/img/icon-chat.png" alt=""></td>
                            <td>
                                <input list="animals" type="text" id="date" class="input-blanc" placeholder="Chat">
                                <datalist id="animals">
                                    <option value="Chien"></option>
                                    <option value="Tortue"></option>
                                </datalist>
                            </td>
                            <td class="tiret-hori"></td>
                            <td><input type="number" id="nombre" class="input-blanc" placeholder="0"></td>
                        </tr>
                    </tbody>
                </table>
                <img src="/src/assets/img/plus-bleu.png" alt="">
            </div>
            <button id="chercher" class="bold">Chercher un trajet</button>
        </div>

        <table id="historique" class="column-flex-center">
            <tbody class="column-flex-center" style="gap: 20px;">
                <tr class="trajet-tr">
                    <td><img src="/src/assets/img/icon-historique.png" alt=""></td>
                    <td>
                        <p>t dzdazdadadad -> zzadazdazdfrgegherhe</p>
                        <p class="date-trajet">9 janvier 2024</p>
                    </td>
                    <td><img src="/src/assets/img/arrow-right.png" alt=""></td>
                </tr>

                <tr class="trajet-tr">
                    <td><img src="/src/assets/img/icon-historique.png" alt=""></td>
                    <td>
                        <p>t dzdazdadadad -> zzadazdazdfrgegherhe</p>
                        <p class="date-trajet">9 janvier 2024</p>
                    </td>
                    <td><img src="/src/assets/img/arrow-right.png" alt=""></td>
                </tr>
            </tbody>
        </table>
    </div>
    <Nav selectedIcon="5"></Nav>
</template>
  
<script>
	import BackButton from '@/components/BackButton.vue';
    import Nav from '@/components/Nav.vue';

	export default {
		name: 'Home',
		components: { BackButton, Nav}
	};
</script>

<style scoped>
	#main {
		display: flex;
		flex-direction: column;
		align-items: center;
        height: 100vh;
        background-color: var(--color-off-white);
        padding: 150px 0px 500px 0px;
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
  