import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let ax = Vue.prototype.$http = axios.create({
	baseURL: "http://localhost:3000"
})

export default new Vuex.Store ({
	state: {
		user: '',
	},
	mutations: {
		login (state,payload) {
		},
		signup (state,payload) {

		}
	},
	actions: {
		login (context,payload) {
		},
		signup (context,payload) {
			ax.post('users/signup',{
		        username: payload.username,
		        password: payload.password,
		        email: payload.email,
		        name: payload.name				
			})
		}	
	}
})