var firebase = require('../routes/firebase').firebase;
//var ref = firebase.database().ref();


exports.add = function(req,res) {
	console.log(req.body);
	var body = req.body;
	saveData(body.address, body.tname, body.mrent, body.pdate);
	res.redirect('/');
}

function saveData(address, name, rent, pdate) {
	firebase.database().ref('property/' + address).set({
		name:name,
		rent:rent,
		pdate:pdate,
		address:address
	});
}