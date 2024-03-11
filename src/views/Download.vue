<template>
    <div>
        <button @click="installPWA" v-if="showInstallButton">Installer l'application</button>
    </div>
</template>
  
<script>
    export default {
        data() {
        return {
            showInstallButton: false,
        };
        },
        mounted() {
            window.addEventListener('beforeinstallprompt', this.beforeInstallPrompt);
        },

        beforeDestroy() {
            window.removeEventListener('beforeinstallprompt', this.beforeInstallPrompt);
        },

        methods: {
            installPWA() {
                // Logic pour l'installation de la PWA
                if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
                // Register the service worker if not already registered
                navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
                    .then((registration) => {
                    console.log('Service Worker registered with scope:', registration.scope);
                    })
                    .catch((error) => {
                    console.error('Service Worker registration failed:', error);
                    });
                }
        
                // Cacher le bouton après l'installation
                this.showInstallButton = false;
            },
            beforeInstallPrompt(event) {
                // Empêcher l'affichage de la bannière d'installation native du navigateur
                event.preventDefault();

                // Afficher le bouton d'installation personnalisé
                this.showInstallButton = true;
            },
        },
    };
</script>

<style scoped>
    button {
        width: 100px;
    }
</style>
  