const BASE_URL = 'https://joris.gourdon.angers.mds-project.fr:40112/api';

export const apiService = {
	async get(endpoint) {
		try {
			const response = await fetch(`${BASE_URL}/${endpoint}`, {
				method: 'GET',
				credentials : 'include'
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			return response.json();
		} catch (error) {
			throw error;
		}
	},

	async post(endpoint, data) {
		try {
			const response = await fetch(`${BASE_URL}/${endpoint}`, {
				method: 'POST',
				credentials : 'include',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
		
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
		
			const responseBody = await response.text();
			const parsedResponse = responseBody ? JSON.parse(responseBody) : null;

			return parsedResponse;
		} catch (error) {
			throw error;
		}
	},
};
