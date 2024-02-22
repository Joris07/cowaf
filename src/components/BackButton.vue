<!-- BackButton.vue -->
<template>
    <div class="back-button" @click="goBack">
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
            <path d="M7 2L2 7L7 12" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
    .back-button {
        position: fixed;
        top: 66px;
        left: 25px;
        width: 38px;
        height: 38px;
        background-color: var(--color-blue);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        cursor: pointer;
    }
  </style>
  