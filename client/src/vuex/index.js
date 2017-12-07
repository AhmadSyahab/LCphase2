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
			ax.post('users/signin', {
		        username: payload.username,
		        password: payload.password				
			})
		},
		signup (context,payload) {
			ax.post('users/signup',{
		        username: payload.username,
		        password: payload.password,
		        email: payload.email,
		        name: payload.name				
			})
			.then(result => {
				console.log(result)
			})
			.catch(err => {
				console.log(err)
			})
		},
		createGallery (context,payload) {
			ax.post('/gallery', {
		        image: payload.image,
				desc: payload.desc
			})
		}	
	}
})