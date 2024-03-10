import { apiService } from './apiService';

export const authService = {
	async trajetsParticipes() {
		try {
			const response = await apiService.post('trajets/participate');

			if (!response) {
				throw new Error('Erreur');
			}

			return response;
		} catch (error) {
			throw error;
		}
	},
}