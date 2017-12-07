const User = require('../models/user')
const Gallery = require('../models/gallery')
const ObjectId = require('mongodb').ObjectId;


function create(req,res) {
	console.log(req.body)
	let gallery = new Gallery(req.body);
	gallery.save((err, newGallery) => {
		if(err){
			res.status(500).send(err)
		}else{
			res.send(newGallery);
		}
	})
}

function findAll(req,res) {
	console.log("wew")
	Gallery.find()
	.then(allgallery => {
		res.send(allgallery)
	})
	.catch(err => {
		res.status(500).send(err)
	})
}

function destroy(req,res) {
	Gallery.remove({
		_id : req.params.galleryId
	})
	.then(result => {
		res.send(result)
	})
	.catch(err => {
		res.status(500).send(err)
	})	
}

function like(req,res) {
	console.log(req.body)
	Gallery.findOne({
		_id : req.params.galleryId
	})
	.then(gallery => {
		console.log(req.body.userId == gallery.userId)
		console.log(gallery.comment.indexOf(req.body.userId))
		if(gallery.comment.indexOf(req.body.userId) == -1 ){
			if(gallery.userId != req.body.userId){
				console.log("masuk sini")
				gallery.comment.push(req.body.userId)
				gallery.save()
				res.send(gallery)				
			}else{
				res.status(500).send(err)
			}
		}else{
			let index = gallery.comment.indexOf(req.body.userId)
			gallery.comment.splice(index,1);
			gallery.save();
		}
	})
	.catch(err => {
		res.status(500).send(err)
	})	
}

function updateContent(req,res) {
	Gallery.findOne({
		_id : req.params.galleryId
	})
	.then(gallery => {
		gallery.set({
			userId  	: gallery.userId,
			image   	: gallery.image,
			desc    	: req.body.desc || gallery.desc,
			comment 	: gallery.comment
		})
		gallery.save()
		res.send(gallery)		
	})
	.catch(err => {
		res.status(500).send(err)
	})		
}



module.exports = {
	create,
	findAll,
	destroy,
	like,
	updateContent
}