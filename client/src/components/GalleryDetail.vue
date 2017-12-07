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
	    	<span data-toggle="modal" :data-target="`#gallery._id`" class="glyphicon glyphicon-edit"></span>
	    </div>	            
            <a href="#" @click.prevent="liked(gallery._id)" class="btn btn-default"><span class="glyphicon glyphicon-thumbs-up"></span> {{ gallery.comment.length }}</a>        
           <div class="col-md-12 gap10"></div>
        </div>

		<div class="modal" :id="gallery._id">
	        <div class="modal-dialog" role="document">
	          <div class="modal-content">
	            <div class="modal-header">
	              <h5 class="modal-title">Upload</h5>
	              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	                <span aria-hidden="true">&times;</span>
	              </button>
	            </div>
	            <div class="modal-body">
	            <form>
	              <div class="form-group">
	                <label for="exampleTextarea">Description</label>
	                <textarea  v-model="desc" class="form-control" id="exampleTextarea" rows="3"></textarea>
	              </div>
	              <div class="form-group">
	                <label for="exampleInputFile">File input</label>
	                <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
	                <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
	              </div>
	              <button class="btn btn-primary">Submit</button>
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
}	
</script>