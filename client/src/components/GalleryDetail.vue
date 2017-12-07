<template>
<div class="container">
        <div class="col-md-offset-1">
            <div class="card border-primary mb-3">
              <div class="card-header"> {{ gallery.desc }}</div>
              <div class="card-body text-primary">
                <h4 class="card-title"> <img :src="gallery.image"></h4>
              </div>
            </div>  
		<div>
	    	<span @click="destroy(gallery._id)" class="glyphicon glyphicon-remove"></span> 
	    </div>	
	    <div>
	    	<span data-toggle="modal" :data-target="`#${gallery._id}`" class="glyphicon glyphicon-edit"></span>
	    </div>	            
            <a href="#" @click.prevent="liked(gallery._id)" class="btn btn-default"><span class="glyphicon glyphicon-thumbs-up"></span> {{ gallery.comment.length }}</a>        
           <div class="col-md-12 gap10"></div>
        </div>

		<div class="modal" :id="gallery._id">
	        <div class="modal-dialog" role="document">
	          <div class="modal-content">
	            <div class="modal-header">
	              <h5 class="modal-title">Edit</h5>
	              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	                <span aria-hidden="true">&times;</span>
	              </button>
	            </div>
	            <div class="modal-body">
	            <form>
	              <div class="form-group">
	                <label for="exampleTextarea">Edit Contain or Description</label>
	                <textarea v-model="desc" class="form-control" id="exampleTextarea" rows="3"></textarea>
	              </div>
	              <button @click="editContain(gallery._id)" data-dismiss="modal" class="btn btn-primary">Submit</button>
	            </form> 
	            </div>
	          </div>
	        </div>
	      </div>                 
</div>  	
</template>

<script>
import { mapActions } from 'vuex'
export default {
	props: ['gallery'],
	data () {
	    return {
	      desc: ''
	    }
	},	
	methods: {
		...mapActions([
			'getAllArticle',
			'like',
			'remove',
			'updateContain'
			]),
		liked: function (id) {
			this.like({
				galleryId: id
			})
		},
		destroy: function(id) {
			this.remove({
				galleryId: id
			})
		},
		editContain: function(id) {
			this.updateContain({
				galleryId: id,
				desc: this.desc
			})
		}
	},
}	
</script>