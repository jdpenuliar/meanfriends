// This is our routes.js file located in server/config/routes.js
// This is where we will define all of our routing rules!
// We will have to require this in the server.js file (and pass it app!)
var friends = require('./../controllers/friends.js');
module.exports = function(app){
	// verb: get, plural of target as the URI is the RESTful index method (it returns all friends)
	app.get("/friends", function(req,res){
		// res.json([{name: "Andrew", age: 24}, {name: "Michael", age: 34}]);
		friends.index(req,res);
	});
	app.post("/friends",function(req,res){
		friends.create(req,res);
	});
	app.delete("/friends/:id",function(req,res){
		friends.delete(req,res);
	});
}