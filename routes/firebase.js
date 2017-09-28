
  // Initialize Firebase
var config = {
    apiKey: "AIzaSyAGw71TIqQt9X0SB1P6zBFN5LzUYAN__TE",
    authDomain: "pmanager-a7f96.firebaseapp.com",
    databaseURL: "https://pmanager-a7f96.firebaseio.com",
    projectId: "pmanager-a7f96",
    storageBucket: "",
    messagingSenderId: "373930725254"
};

var firebase = require('firebase').initializeApp(config);
exports.firebase = firebase;