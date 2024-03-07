
export default {
    actions: {
      async loginUser({ commit }, credentials) {
        try {
          const response = await api.post('/login', credentials);
          const { token, user } = response.data;
  
          // Dispatch l'action pour sauvegarder les informations utilisateur dans Vuex
          commit('setUser', { token, user });
  
          // Stocker le token dans localStorage si nécessaire
          localStorage.setItem('token', token);
        } catch (error) {
          console.error('Erreur de connexion :', error);
        }
      },
    },
  };
  