import { createStore } from 'vuex';

export default createStore({
	state: {

	},
	getters: {

	},
	mutations: {
		logout() {
			Cookies.remove('BEARER');
		},
	},
	actions: {
		logoutUser({ commit }) {
			commit('logout');
		},
	},
	modules: {},
});
