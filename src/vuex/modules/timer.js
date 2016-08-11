import {
	RUN_TIMER
} from '../mutation-types'

const state = {
	count: 1
}

const mutations = {
	RUN_TIMER (state, amount) {
		state.count = state.count + amount
	}
}

export default {
	state,
	mutations
}