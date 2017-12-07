<template>
<div class="container">
	<button type="button" data-toggle="modal" data-target="#upload" class="btn btn-outline-secondary pull-right">upload</button>	
	<GalleryDetail v-for="gallery in gallerys" :key="gallery._id" :gallery="gallery"/>  

    <div class="modal" id="upload">
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
                  <label  for="exampleInputEmail1">Trial URL Image</label>
                  <input type="text" v-model="image" class="form-control" id="exampleInputtext1" aria-describedby="textHelp" placeholder="URL IMAGE">
                  <small id="textHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleTextarea">Description</label>
                  <textarea  v-model="desc" class="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleInputFile">File input</label>
                  <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
                  <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                </div>
                <button @click="upload" data-dismiss="modal" class="btn btn-primary">Submit</button>
              </form> 
              </div>
            </div>
          </div>
        </div>	     
</div>  	
</template>

<script>
import { mapActions } from 'vuex'
import GalleryDetail from '@/components/GalleryDetail'
export default {
  data () {
    return {
      username: '',
      password: '',
      email: '',
      name: '',
      image: '',
      desc: ''
    }
  },	
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
			'remove',
			'createGallery'
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
		},
	     upload: function () {
	      this.createGallery({
	        image: this.image,
	        desc: this.desc
	      })
	     }		
	},
	created () {
		this.getAllArticle()
	}
}	
</script>