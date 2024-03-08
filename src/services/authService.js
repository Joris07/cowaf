import { apiService } from './apiService';
import Cookies from 'js-cookie';

const BASE_URL = 'http://joris.gourdon.angers.mds-project.fr:40112/api';

export const authService = {
  async login(credentials) {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(credentials),
	  }).then(response => {
			console.log(response.headers);
			const cookieHeader = response.headers.getSetCookie();
			console.log(cookieHeader);
			const token = extractTokenFromCookieHeader(cookieHeader);
			console.log(token);
	  
			// Stocker le token dans le cookie
			if (token) {
			  setTokenCookie(token);
			}
	  
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

      // Récupérer le token du header Set-Cookie de la réponse
      const cookieHeader = response.headers.get('Set-Cookie');
	  console.log(cookieHeader);
      const token = extractTokenFromCookieHeader(cookieHeader);
	  console.log(token);

      // Stocker le token dans le cookie
      if (token) {
        setTokenCookie(token);
      }

      return { token };
    } catch (error) {
      console.error('Registration failed:', error);
      throw error; // Propager l'erreur si nécessaire
    }
  },
};

function extractTokenFromCookieHeader(cookieHeader) {
  // Parsez le header Set-Cookie pour extraire la valeur du cookie
  const match = cookieHeader.match(/BEARER=([^;]+)/);
  return match ? match[1] : null;
}

function setTokenCookie(token) {
  // Stocker le token dans le cookie avec une durée de vie d'un jour
  Cookies.set('token', token, { expires: 1 });
}
