import { apiService } from './apiService';

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
};
