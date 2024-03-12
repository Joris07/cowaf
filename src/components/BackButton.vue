<template>
	<div :style="buttonStyle" @click="handleClick">
	  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
		<path :stroke="arrowColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M7 2L2 7L7 12" />
	  </svg>
	</div>
  </template>
  
  <script>
  import router from '@/router';
  
  export default {
	props: {
		backgroundColor: {
			type: String,
			default: 'var(--color-blue)',
		},
		arrowColor: {
			type: String,
			default: 'white',
		},
		disableDefaultBehavior: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		handleClick() {
			if (!this.disableDefaultBehavior) {
				window.history.length > 1 ? router.go(-1) : router.push('/');
			}
		},
	},
	computed: {
		buttonStyle() {
			return {
				position: 'absolute',
				top: '30px',
				left: '25px',
				width: '30px',
				height: '30px',
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
  