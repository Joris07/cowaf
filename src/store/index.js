import { createStore } from 'vuex';
import Cookies from 'js-cookie';

export default createStore({
	state: {
		userId: null,
	},
	getters: {
		getUserId: state => state.userId,
	},
	mutations: {
		setUserId(state, userId) {
			state.userId = userId;
		},
		logout(state) {
			state.userId = null;
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
