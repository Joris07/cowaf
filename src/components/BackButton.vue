<!-- BackButton.vue -->
<template>
	<div :style="buttonStyle" @click="goBack">
	  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
		<path :stroke="arrowColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M7 2L2 7L7 12" />
	  </svg>
	</div>
  </template>
  
  <script>
  export default {
	props: {
	  backgroundColor: {
		type: String,
		default: 'var(--color-blue)', // Fond du cercle par défaut en bleu
	  },
	  arrowColor: {
		type: String,
		default: 'white', // Couleur de la flèche par défaut en blanc
	  },
	},
	methods: {
	  goBack() {
		window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
	  },
	},
	computed: {
	  buttonStyle() {
		return {
		  position: 'absolute',
		  top: '30px',
		  left: '25px',
		  width: '38px',
		  height: '38px',
		  backgroundColor: this.backgroundColor,
		  borderRadius: '50%',
		  display: 'flex',
		  alignItems: 'center',
		  justifyContent: 'center',
		  color: this.arrowColor,
		  cursor: 'pointer',
		};
	  },
	},
  };
  </script>
