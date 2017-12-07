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
		console.log(req.body.userId, gallery.userId)
		if(gallery.comment.indexOf(req.body.userId) == -1 && ObjectId(gallery.userId) != ObjectId(req.body.userId) ){
			console.log("masuk sini")
			gallery.comment.push(req.body.userId)
			gallery.save()
			res.send(gallery)
		}else{
			res.status(500).send(err)
		}
	})
	.catch(err => {
		res.status(500).send(err)
	})	
}



module.exports = {
	create,
	findAll,
	destroy,
	like
}