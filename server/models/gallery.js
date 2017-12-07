const mongoose = require('mongoose').connect('mongodb://localhost:27017/ahmadlc');
const Schema = mongoose.Schema

const galerrySchema = new Schema({
 	userId: {
    	type: Schema.Types.ObjectId,
        ref: 'user'  	
    },
    image: String,
    desc: String,
    comment: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],   
    date: {
    	type: Date,
    	default: Date.now()
    }
})

const galerryModel = mongoose.model('gallery', galerrySchema);

module.exports = galerryModel