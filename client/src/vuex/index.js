import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let ax = Vue.prototype.$http = axios.create({
	baseURL: "http://localhost:3000"
})

export default new Vuex.Store ({
	state: {
		token: localStorage.getItem('token'),
		name: localStorage.getItem('name'),
		userId: localStorage.getItem('userId'),
		gallerys: ''
	},
	mutations: {
		login (state,payload) {
			state.token = payload.user.data.token
			state.name = payload.user.data.user.name
			state.userId = payload.user.data.user._id		
		},
		getAllArticle (state, payload) {
			state.gallerys = payload.dataGallery.data
		}
	},
	actions: {
		login (context,payload) {
			ax.post('users/signin', {
		        username: payload.username,
		        password: payload.password				
			})
			.then(result => {
		        localStorage.setItem("name", result.data.user.name);
		        localStorage.setItem("token", result.data.token);
		        localStorage.setItem("userId", result.data.user._id);
		     	context.commit('login', {
		     		user : result
		     	})				
			})
			.catch(err => {
				console.log(err);
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
				desc: payload.desc,
				userId: context.rootState.userId
			})
		},
		getAllArticle (context) {
			ax.get('/gallery')
			.then(result => {
				context.commit('getAllArticle',{
					dataGallery : result
				})
			})
			.catch(err => {
				console.log(err)
			})
		},
		like (context, payload) {
			console.log(context.rootState.userId)
			console.log(payload)
			ax.put(`gallery/like/${payload.galleryId}`,{
				userId : context.rootState.userId
			})
			.then( result => {

			})
			.catch(err => {
				console.log(err)
			})
		}			
	}
})