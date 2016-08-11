import Vue from 'vue'
import Vuex from 'vuex'
import timer from './modules/timer'

Vue.use(Vuex)

const state = {
	count: 0,
	timerStarted: false,
	timerStoped: true
}

const mutations = {
	RUN_TIMER (state, amount) {
		state.count = state.count + amount
		state.timerStarted = !state.timerStarted
	}
}

export default new Vuex.Store({
	modules: {
	  timer
	},
	state,
	mutations
})
