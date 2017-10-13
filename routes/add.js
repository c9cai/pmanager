var firebase = require('../routes/firebase').firebase;
//var ref = firebase.database().ref();


exports.add = function(req,res) {
	//console.log(req.body);
	var body = req.body;
	var address = body.address;
	if (address != "") saveData(address, body.tname, body.mrent, body.pdate);
	res.redirect('/');
}

function saveData(address, name, rent, pdate) {
	firebase.database().ref('property/' + address).set({
		name:name,
		rent:rent,
		pdate:pdate,
		address:address,
		january:false,
		february:false,
		march:false,
		april:false,
		may:false,
		june:false,
		july:false,
		august:false,
		september:false,
		october:false,
		november:false,
		december:false
	});
}


exports.updateRent = function(req,res) {
	console.log(req.body);
	upRent(req.body.address,req.body.month);
	res.redirect('/');
}

function upRent(address, month) {
	var mdata = []
	var ref  = firebase.database().ref('property/' + address + '/' + month);
		ref.on("value", function(snapshot) {
		mdata = snapshot.val();
	});
	mdata = !mdata;
	console.log(mdata);
	var m = month;

	firebase.database().ref('property/' + address).update({
		[m]:mdata
	});
}

