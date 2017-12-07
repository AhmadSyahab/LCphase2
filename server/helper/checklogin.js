const jwt = require('jsonwebtoken');
require('dotenv').config()
const ObjectId = require('mongodb').ObjectId
const Gallery = require('../models/gallery');

function isSignIn(req,res,next) {
	console.log(req.headers)
	jwt.verify(req.headers.token , 'livecode2' , function(err, decoded) {
		if(err){
			res.status(500).send(err)
		}else{
			req.headers.id = decoded.id
			req.headers.username = decoded.username
			req.headers.email = decoded.email
			next()	
		}
	});

// invalid token - synchronous
}

function checkQuestionOwner(req,res,next) {
	Gallery.findOne({
		_id : ObjectId(req.params.galleryId)
	}).then(result => {
		if(result.userId == req.headers.userid){
			next()
		}else{
			res.status(500).send({message : "you cant access"})
		}
	}).catch(err => {
		res.status(500).send({message : "cant found that task"})
	})
}

module.exports ={
	isSignIn,
	checkQuestionOwner
}