const jwt = require('jsonwebtoken');
require('dotenv').config()
const ObjectId = require('mongodb').ObjectId
const Question = require('../models/question');
const Comment = require('../models/comment');

function isSignIn(req,res,next) {
	console.log(req.headers)
	jwt.verify(req.headers.token , process.env.secret , function(err, decoded) {
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
	Question.findOne({
		_id : ObjectId(req.params.questionId)
	}).then(result => {
		console.log("masuk")
		console.log(req.headers)
		console.log(result)
		console.log(result.userId,req.headers.userid)
		if(result.userId == req.headers.userid){
			console.log("masuk ga")
			next()
		}else{
			res.status(500).send({message : "you cant access"})
		}
	}).catch(err => {
		res.status(500).send({message : "cant found that task"})
	})
}


function checkCommentOwner(req,res,next) {
	Comment.findOne({
		_id : ObjectId(req.params.commentId)
	}).then(result => {
		console.log("masuk sini")
		console.log(result)
		console.log(req.headers)
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
	checkQuestionOwner,
	checkCommentOwner
}