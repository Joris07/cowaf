<template>
	<div id="main">
		<div id="top">
            <img src="/img/profil-arthur.png" alt="Profil" id="photo">
            <h4 id="prenom" class="bold blue-text">Arthur</h4>
            <button id="modifier" class="bold blue-text">Modifier mes informations personnelles</button>
        </div>
        <span class="separate"></span>
        <div id="mid">
            <h4 class="bold blue-text title">Votre profil</h4>
            <div id="div-mid-profil">
                <div class="mid-profil">
                    <img src="/img/trajet-publies.png" alt="">
                    <span>16 trajets publiés</span>
                </div>
                <div class="mid-profil">
                    <img src="/img/stars-avis.png" alt="">
                    <span> 4.6 / 5 - 17 avis</span>
                </div>
            </div>
        </div>
        <span class="separate"></span>
        <div id="bottom">
            <h4 class="bold blue-text title">Mes animaux</h4>
            <div id="animaux">
                <div>
                    <img class="photos-animaux" src="/img/lumo-petit.png" alt="">
                    <span class="nom-animal">Lumo</span>
                </div>
                <div id="imposteur"><div id="plus" class="bold blue-text">+</div></div>
            </div>
        </div>
     </div>
    <Nav selectedIcon="5"></Nav>
</template>
  
<script>
    import Nav from '@/components/Nav.vue';

	export default {
		name: 'Profil',
		components: { Nav }
	};
</script>

<style scoped>
	#main {
		display: flex;
		flex-direction: column;
		align-items: center;
        padding: 75px 30px 25% 30px;
        gap: 20px;
	}

    #plus {
        width: 35px;
        height: 35px;
        background-color: var(--color-off-white);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }

    #div-mid-profil {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .mid-profil {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .title {
        align-self: normal;
    }

    #top {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    #modifier {
        padding: 6px 17px;
        border-radius: 60px;
        background: #ECF5FF;
        border: none;
    }

    #photo {
        border-radius: 50%;
        width: 120px;
        height: 120px; 
    }

    .photos-animaux {
        width: 90px;
        height: 90px;
        border-radius: 50%;
    }

    #animaux {
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        max-width: 100%;
        justify-content: center;
        align-items: center;
        padding: 0px 10px;
    }

    #animaux > div {
        position: relative;
    }



    .nom-animal {
        padding: 4px 19px;
        border-radius: 60px;
        background: var(--color-off-white);
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        font-size: 10px;
        color: var(--color-blue);
        font-weight: 700;
    }
    
    #bottom  {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-self: flex-start;
    }

    #imposteur {
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #mid {
        align-self: flex-start;
        gap: 20px;
        display: flex;
        flex-direction: column;
    }
</style>
  