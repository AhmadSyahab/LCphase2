const mongoose = require('mongoose').connect('mongodb://localhost:27017/ahmadlc');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltFactor = 10

const userSchema = new Schema({
 	name: {
    	type     : String,
    	required : true    	
    },
    username: {
    	type     : String,
    	index    : { unique : true },
    	required : true
    },
    email: {
    	type     : String,
    	index    : { unique : true },
    	required : true
    },    
    password     : String,
    date: {
    	type: Date,
    	default: Date.now()
    }
})

userSchema.pre('save', function(next) {
	var user = this

	 // only hash the password if it has been modified (or is new)
	if(!user.isModified('password')) return next();

    bcrypt.genSalt(saltFactor, function(err, salt) {
    	if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
        	if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });

})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel