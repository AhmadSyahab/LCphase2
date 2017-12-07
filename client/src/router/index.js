import Vue from 'vue'
import Router from 'vue-router'
import Gallery from '@/components/Gallery'
import GetAllGallery from '@/components/GetAllGallery'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Gallery,
      children: [
      {
      	path: '',
      	name: 'GetAllGallery',
      	component: GetAllGallery
      }
      ]
    }
  ]
})
