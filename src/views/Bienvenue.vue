<template>
	<div id="main">
        <BackButton backgroundColor="white" arrowColor="var(--color-blue)" />
		
        <div id="top">
            <h1 class="bold">Bienvenue !</h1>
            <h3>
                Créons ensemble le permis de voyage de votre animal !
            </h3>
            <div class="circle"></div>
        </div>
        <div id="body">
            <img src="/img/bienvenue.png" alt="carte">
            <p>
                Afin de faciliter le trajet entre votre animal
                et le conducteur, nous vous demandons
                de créer le permis de voyage de votre
                compagnon poilu (ou non) !
            </p>
        </div>
        <button class="button-border-blue bold">C'est parti</button>
        <button class="bold" id="button-blue" @click="submit">Je souhaite uniquement effectuer les covoiturages</button>
	</div>
</template>
    
<script>
	import BackButton from '@/components/BackButton.vue';

	export default {
		name: 'Bienvenue',
		components: { BackButton },
        methods: {
            submit(){
                this.$router.push('/recherche');
            }
        }
	};
</script>
  
<style scoped>
	#main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
		height: 100vh;
		overflow: hidden;
        padding-bottom: 10px;
	}

    #top {
        background-color: var(--color-blue);
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding-top: 65px;
        overflow: hidden;
    }

    h1, h3 {
        color: white;
        text-align: center;
        max-width: 330px;
    }

    .circle {
        width: 110%;
        height: 60px; /* Ajustez la taille du cercle selon vos besoins */
        background-color: white;
        border-radius: 50% 50% 0 0; /* Ajustez les valeurs pour rendre la courbe plus creuse */
        transform: translateY(50%);
    }

    #body {
        padding: 10px 20px;
        font-weight: 400;
        font-size: 17px;
        text-align: center;
    }

    #button-blue {
        width: 250px;
        height: 58px;
        border-radius: 5px;
        border: 3px solid var(--color-blue);
        background: var(--color-blue);
        color: white;
        font-size: 17px;
    }

    #body > img {
        width: 100%;
    }
</style>
  