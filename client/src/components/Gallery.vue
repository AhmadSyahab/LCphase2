<template>
<div class="container">
	<router-view/>       
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
			])
	},
	created () {
		this.getAllArticle()
	}
}	
</script>