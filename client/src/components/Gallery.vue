<template>
<div class="container">
        <div class="col-md-offset-1" v-for="gallery in gallerys">
            <div class="card border-primary mb-3">
              <div class="card-header"> {{ gallery.desc }}</div>
              <div class="card-body text-primary">
                <h4 class="card-title"> <img :src="gallery.image"></h4>
              </div>
            </div>  
            <a href="#" @click="liked(gallery._id)" class="btn btn-default"><span class="glyphicon glyphicon-thumbs-up"></span> {{ gallery.comment.length }}</a>        
           <div class="col-md-12 gap10"></div>
        </div>
</div>  	
</template>

<script>
import { mapActions } from 'vuex'
export default {
	computed: {
		gallerys () {
			return this.$store.state.gallerys
		}
	},
	methods: {
		...mapActions([
			'getAllArticle',
			'like'
			]),
		liked: function (id) {
			this.like({
				galleryId : id
			})
		}
	},
	created () {
		this.getAllArticle()
	}
}	
</script>