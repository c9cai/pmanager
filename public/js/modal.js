
// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn = document.getElementsByClassName("addBtn");
var btn2 = document.getElementsByClassName("rentHistBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
// When the user clicks on the button, open the modal 
btn[0].onclick = function() {
    address();
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

 span2.onclick = function() {
     modal2.style.display = "none";
 }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function rentHist(index) {
 	modal2.style.display = "block";
}
