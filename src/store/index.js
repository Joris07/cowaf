import { createStore } from 'vuex';
import Cookies from 'js-cookie';

export default createStore({
	state: {
		token: Cookies.get('token') || null,
	},
	getters: {
		isAuthenticated: (state) => state.token !== null,
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
			Cookies.set('token', token, { expires: 1 });
		},
		logout(state) {
			state.token = null;
			Cookies.remove('token');
		},
	},
	actions: {
		loginUser({ commit }, { token }) {
			commit('setToken', token);
		},
			logoutUser({ commit }) {
			commit('logout');
		},
	},
	modules: {},
});
