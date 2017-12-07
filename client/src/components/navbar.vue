<template>
  <div class="hello">
<nav class="navbar navbar-expand-lg navbar-light bg-light navecom">

  <div class="collapse navbar-collapse" id="navbarColor03">
    <button type="button" data-toggle="modal" data-target="#register" class="btn btn-outline-secondary pull-right">Register</button>
    <button type="button" data-toggle="modal" data-target="#login" class="btn btn-outline-secondary pull-right ">Login</button>
    <button type="button" @click="logout" class="btn btn-outline-secondary pull-right">Logout</button>
     <button type="button" data-toggle="modal" data-target="#upload" class="btn btn-outline-secondary pull-right">upload</button>
    <div class="modal" id="login">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Login</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
               <form class="form-horizontal" role="form">
                  <div class="form-group">
                    <label  class="col-sm-2 control-label"
                              for="username">Username</label>
                    <div class="col-sm-10">
                        <input v-model="username" type="text" class="form-control" 
                        id="inputEmail3" placeholder="username"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label"
                          for="password">Password</label>
                    <div class="col-sm-10">
                        <input type="password" v-model="password" id="area" class="form-control" placeholder="your password"/>
                    </div>
                  </div>
                </form>  
          </div>
          <div class="modal-footer">
            <button @click="isLogin" data-dismiss="modal" type="button" class="btn btn-primary">Login </button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" id="register">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Register</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
               <form class="form-horizontal" role="form">
                  <div class="form-group">
                    <label  class="col-sm-2 control-label"
                              for="Name">Name</label>
                    <div class="col-sm-10">
                        <input v-model="name" type="text" class="form-control" 
                        placeholder="Name"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label  class="col-sm-2 control-label"
                              for="username">Username</label>
                    <div class="col-sm-10">
                        <input v-model="username" type="text" class="form-control" 
                        placeholder="Username"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label  class="col-sm-2 control-label"
                              for="email">Email</label>
                    <div class="col-sm-10">
                        <input v-model="email" type="text" class="form-control" 
                        placeholder="Email"/>
                    </div>
                  </div>   
                  <div class="form-group">
                    <label  class="col-sm-2 control-label"
                              for="password">Password</label>
                    <div class="col-sm-10">
                        <input v-model="password" type="password" class="form-control" 
                        placeholder="password"/>
                    </div>
                  </div>                                  
                </form>  
          </div>
          <div class="modal-footer">
            <button @click="isSignUp" data-dismiss="modal" type="button" class="btn btn-primary">Sign Up</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div> 

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
                <button @click.prevent="upload" class="btn btn-primary">Submit</button>
              </form> 
              </div>
            </div>
          </div>
        </div>       


  </div>
</nav>  
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
  methods: {
    ...mapActions([
      'login',
      'signup',
      'createGallery'
      ]),
     isLogin: function () {
      this.login({
        username: this.username,
        password: this.password
      })
    },
     isSignUp: function () {
      this.signup({
        username: this.username,
        password: this.password,
        email: this.email,
        name: this.name
      })
     },
     logout: function () {

     },
     upload: function () {
      this.createGallery({
        image: this.image,
        desc: this.desc
      })
     }
  }
}  


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
