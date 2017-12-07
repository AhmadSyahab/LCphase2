const User = require('../models/user')
const Galerry = require('../models/gallery')


function create(req,res) {
	console.log(req.body)
	let gallery = new Galerry(req.body);
	gallery.save((err, newGallery) => {
		if(err){
			res.status(500).send(err)
		}else{
			res.send(newGallery);
		}
	})
}

function findAll(req,res) {
	Galerry.find()
	.then(allGalerry => {
		res.send(allGalerry)
	})
	.catch(err => {
		res.status(500).send(err)
	})
}

function destroy(req,res) {
	Galerry.remove({
		_id : req.params.galleryId
	})
	.then(result => {
		res.send(result)
	})
	.catch(err => {
		res.status(500).send(err)
	})	
}



module.exports = {
	create,
	findAll,
	destroy
}