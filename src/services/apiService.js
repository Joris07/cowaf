const BASE_URL = 'http://joris.gourdon.angers.mds-project.fr:40112/api';

export const apiService = {
	async get(endpoint) {
		try {
			const response = await fetch(`${BASE_URL}/${endpoint}`);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			return response.json();
		} catch (error) {
			console.error('Error in GET request:', error);
			throw new Error('An error occurred while processing your request. Please try again.');
		}
	},

	async post(endpoint, data) {
		try {
		  const response = await fetch(`${BASE_URL}/${endpoint}`, {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		  });
	  
		  console.log(response);
	  
		  if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		  }
	  
		  // Vérifier si le corps de la réponse est vide
		  const responseBody = await response.text();
		  const parsedResponse = responseBody ? JSON.parse(responseBody) : null;
	  
		  return parsedResponse;
		} catch (error) {
		  throw new Error('Erreur');
		}
	  }
	  ,
};
