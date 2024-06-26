import { apiService } from './apiService';

export const trajetService = {
	async trajetsParticipes() {
		try {
			const response = await apiService.get('trajets/participate');

			if (!response) {
				throw new Error('Erreur');
			}

			return response;
		} catch (error) {
			throw error;
		}
	},
}