const mongoose = require('mongoose').connect('mongodb://localhost:27017/ahmadlc');

const galerrySchema = new Schema({
 	userId: {
    	type: Schema.Types.ObjectId,
        ref: 'user'  	
    },
    image: String,
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