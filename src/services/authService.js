import { apiService } from './apiService';
import store from '@/store';

export const authService = {
	async login(credentials) {
		try {
			const response = await apiService.post('login', credentials);

			if (response && 'message' in response) {
				throw new Error('Mauvais identifiants');
			}

			return response;
		} catch (error) {
			throw error;
		}
	},

	async register(userData) {
		try {
			await apiService.post('register', userData);
		} catch (error) {
			console.error('Registration failed:', error);
		}
	},

	async validate() {
		try {
		  	const response = await apiService.get('validate');

			if (!response.userId) {
				return 0;
			}

		  	const userId = response.userId;
		  	store.commit('setUserId', userId);

			console.log(store.getters.getUserId);
	  
		  	return userId;
		} catch (error) {
		  	throw error;
		}
	},	  
};
