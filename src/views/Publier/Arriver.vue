<template>
	<div id="arriver">
        <div class="search-barre">
            <img src="/img/loupe.png" alt="Loupe">
            <input 
                placeholder="Saisissez l'adresse..." class="input-search" type="text" list="addresses" v-model="searchInput" @change="validateStep">
            <datalist id="addresses">
                <option v-for="address in randomAddresses" :key="address" :value="address"></option>
            </datalist>
        </div>
        <CurrentLocationButton 
            @update:searchInputValue="updateSearchInput"
            @update:validateStep="validateStep"
        ></CurrentLocationButton>
        <span class="separate"></span>
        <div id="historique">
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5ZM9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15ZM9.75 9H12.75V10.5H8.25V5.25H9.75V9Z" fill="#263238"/>
                </svg>
                Le veil baugé
            </p>
        </div>
    </div>
</template>
  
<script>
    import CurrentLocationButton from '@/components/CurrentLocationButton.vue';

	export default {
		name: 'Arriver',
        components: { CurrentLocationButton },
        props: {
			callback: Function
		},
        data() {
            return {
                animalCount: 0,
                searchInput: '',
                randomAddresses: []
            };
        },
        methods: {
            validateStep() {
                this.callback();
            },
            updateSearchInput(value) {
                this.searchInput = value;
            },
            generateRandomAddresses() {
                const addresses = [
                    '3 Rue de la République, 75001 Paris',
                    '15 Avenue des Champs-Élysées, 75008 Paris',
                    '22 Rue du Faubourg Saint-Antoine, 75011 Paris',
                    '7 Rue de la Pompe, 75116 Paris',
                    '123 Rue du Faubourg Saint-Honoré, 75008 Paris',
                ];

                this.randomAddresses = addresses.sort(() => Math.random() - 0.5).slice(0, 5);
            },
        },
        mounted() {
            this.generateRandomAddresses();
        },
	};
</script>

<style scoped>
	#arriver {
		display: flex;
		flex-direction: column;
        gap: 20px;
	}

    #position-actuelle {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    p {
        font-size: 14px;
    }

    #historique > p {
        display: flex;
        align-items: center;
        gap: 10px;
    }
</style>
  