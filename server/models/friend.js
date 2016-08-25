//Now, let's add in our Friend Model! Let's create our models folder inside of the server folder and then let's create friend.js like so:

// This is the friend.js file located at /server/models/friend.js
// We want to create a file that has the schema for our friends and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
// create our friendSchema
var FriendSchema = new mongoose.Schema({
	name: {type: String, required: true},
	age: {type: Number, required: true}
}, {timestamps: true});
mongoose.model("Friend",FriendSchema);