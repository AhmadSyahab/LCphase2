<template>
<div class="container">
	<GalleryDetail v-for="gallery in gallerys" :key="gallery._id" :gallery="gallery"/>       
</div>  	
</template>

<script>
import { mapActions } from 'vuex'
import GalleryDetail from '@/components/GalleryDetail'
export default {
	components : {
		GalleryDetail,
	},
	computed: {
		gallerys () {
			return this.$store.state.gallerys
		}
	},
	methods: {
		...mapActions([
			'getAllArticle',
			'like',
			'remove'
			]),
		liked: function (id) {
			this.like({
				galleryId : id
			})
		},
		destroy: function(id) {
			this.remove({
				galleryId : id
			})
		}
	},
	created () {
		this.getAllArticle()
	}
}	
</script>