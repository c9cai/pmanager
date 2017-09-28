
var firebase = require('../routes/firebase').firebase;
var propdata = [];

var ref = firebase.database().ref('property');
ref.on("value", function(snapshot) {
	propdata = snapshot.val();
});

exports.viewIndex = function(req,res) {
	console.log(propdata);
	var rendData = {};
	rendData['prop'] = propdata;
	console.log(rendData);
	res.render('index',rendData);
}
