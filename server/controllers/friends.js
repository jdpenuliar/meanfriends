var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
module.exports = (function(){
	return{
		index:function(req,res){
			Friend.find({}, function(err,results){
				if(err){
					console.log(err);
				}else{
					console.log(results);
					res.json(results);
				}
			})
		},
		create:function(req,res){
			var friend = new Friend({name: req.body.name, age: req.body.age});			
			friend.save(function(err,data) {
				// if there is an error console.log that something went wrong!
				if(err) {
					console.log('something went wrong');
				} else { // else console.log that we did well and then redirect to the root route
					console.log('successfully added a hahha!\n',data);
					res.json(data);
				}
			});
		},
		delete:function(req,res){
			Friend.findOne({_id: req.params.id},function(err,data){
				if(err){
					console.log(err);
				}else{
					Friend.remove({_id: data._id}, function(err,data){
						if (err){
							console.log(err);
						}else{
							res.json(data);
						}
					});
				}
			});
		}
	}
})();