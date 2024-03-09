import { apiService } from './apiService';
import store from '@/store';

export const authService = {
	async login(credentials) {
		try {
			await apiService.post('login', credentials);
		} catch (error) {
			console.error('Login failed:', error);
			throw error; 
		}
	},

	async register(userData) {
		try {
			await apiService.post('register', userData);
		} catch (error) {
			console.error('Registration failed:', error);
			throw error; 
		}
	},

	async validate() {
		try {
		  	const response = await apiService.get('validate');
		  	const userId = response.userId;
	  
		  	console.log(userId);
		  	store.commit('setUserId', userId);
	  
		  	return userId;
		} catch (error) {
		  	throw error;
		}
	},	  
};
