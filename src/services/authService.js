import { apiService } from './apiService';
import Cookies from 'js-cookie';

const BASE_URL = 'https://joris.gourdon.angers.mds-project.fr:40112/api';

export const authService = {
  async login(credentials) {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
			method: 'POST',
      credentials : 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(credentials),
	  }).then(response => {
		
			return { token };
	  });
    } catch (error) {
      // Gérer les erreurs de manière appropriée
      console.error('Login failed:', error);
      throw error; // Propager l'erreur si nécessaire
    }
  },

  async register(userData) {
    try {
      const response = await apiService.post('register', userData);
      
      return { token };
    } catch (error) {
      console.error('Registration failed:', error);
      throw error; // Propager l'erreur si nécessaire
    }
  },
};

