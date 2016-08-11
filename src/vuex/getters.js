export function getCount (state) {
	return {
		count: state.count,
		timerStarted: state.timerStarted,
		timerStoped: state.timerStoped
	}
}