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
		},
		remove (state, payload) {
			state.gallerys.forEach((gallery, index) => {
				if(gallery._id == payload.galleryId){
					state.gallerys.splice(index,1)
				}
			})
		},
		createGallery (state, payload) {
			state.gallerys = payload.gallery.data
		},
		updateContain (state, payload) {
			console.log('updated',payload)
			state.gallerys.forEach((gallery, index) => {
				if(gallery._id == payload.galleryId) {
					state.gallerys.splice(index,1,payload.updatedContain.data)
				}
			})
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
			.then(result => {
				context.commit('createGallery', {
					gallery :result
				})
			})
			.catch(err => {
				console.log(err)
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
			ax.put(`gallery/like/${payload.galleryId}`,{
				userId : context.rootState.userId
			})
			.then( result => {

			})
			.catch(err => {
				console.log(err)
			})
		},
		remove (context, payload) {
			ax.delete(`gallery/${payload.galleryId}`)
			.then( result => {
				context.commit('remove', {
					galleryId : payload.galleryId
				})
			})
			.catch( err => {
				console.log(err);
			})
		},
		updateContain (context, payload) {
			ax.put(`gallery/${payload.galleryId}`,{
				desc: payload.desc
			})
			.then(result => {
				context.commit('updateContain', {
					galleryId: payload.galleryId,
					updatedContain : result
				})
			})
			.catch(err => {
				console.log(err)
			})
		}			
	}
})