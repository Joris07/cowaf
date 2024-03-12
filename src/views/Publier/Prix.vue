<template>
	<div id="prix-container">
        <div id="top" class="left">
           <div class="search-barre">
                <input value="12, Rue Georges Mandel, Angers" class="input-search" type="text" >
            </div> 
        </div>
        <div id="prix">
            <button class="arrow-button" @click="decrementPrice">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                    <path d="M2.90906 7.09086L8 12.4646L6.54545 14L6.04016e-07 7.09086L6.54545 0.181818L8 1.71716L2.90906 7.09086Z" fill="#09458E"/>
                </svg>
            </button>
            <div id="mid-prix">
                <input class="bold blue-text" type="number" value="15" min="0" max="100" id="prix-valeur" v-model="prixValeur">
                <h1 class="bold blue-text">€</h1>
            </div>
            <button class="arrow-button" @click="incrementPrice">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                    <path d="M5.09094 6.90913L0 1.53535L1.45455 0L8 6.90913L1.45455 13.8182L0 12.2828L5.09094 6.90913Z" fill="#09458E"/>
                </svg>
            </button>
        </div>
        <button class="bold button-off-white" @click="validateStep">Valider</button>
    </div>
   
</template>
  
<script>
    import Nav from '@/components/Nav.vue';
    import BackButton from '@/components/BackButton.vue';

	export default {
		name: 'Profil',
		components: { Nav, BackButton },
        props: {
			callback: Function
		},
        data() {
            return {
                prixValeur: 15
            };
        },
        methods: {
            incrementPrice() {
                this.prixValeur += 1;
            },
            decrementPrice() {
                if (this.prixValeur > 0) {
                    this.prixValeur -= 1;
                }
            },
            validateStep() {
                this.callback();
            },
        }
	};
</script>

<style scoped>
	#prix-container {
		display: flex;
		flex-direction: column;
        align-items: center;
        gap: 20px;
	}

    .left {
        align-self: flex-start;
    }

    .search-barre > input {
        width: 100%;
    }

    #top {
        position: absolute;
        top: 27px;
        padding: 0px 5% 0px 40px;
    }

    #prix-valeur {
        font-size: 35px;
        border: none;
        outline: none;
        width: 50px;
    }

    .arrow-button {
        width: 33px;
        height: 33px;
        background-color: var(--color-off-white);
        border: none;
        border-radius: 50%;
    }

    #prix {
        display: flex;
        padding: 20px;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    #mid-prix {
        display: flex;
        justify-content: center;
        width: 100%;
        align-items: center;
    }

    .button-off-white {
        margin-top: 230px;
    }
</style>
  