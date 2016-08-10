import Vue from 'vue'
import App from './App'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import CreateUser from './components/CreateUser'
import AllUser from './components/AllUser'
import ChangePassword from './components/ChangePassword'
import PunchPanel from './components/PunchPanel'
import TimeTracker from './components/TimeTracker'
import Activity from './components/Activity'
import Notice from './components/Notice'


import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueFilter from 'vue-filter'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueFilter)
Vue.use(Vuex)

const router = new VueRouter()

router.map ({
	'/home': {
		component: Home
	},
	'/create-user': {
		component: CreateUser
	},
	'/all-user': {
		component: AllUser
	},
	'/change-password': {
		component: ChangePassword
	}
})

router.redirect({
	'*':'./home'
})

router.start(App, '#app')

/* eslint-disable no-new */
new Vue({
	store,
	el: 'body',
    components: { App }
})
