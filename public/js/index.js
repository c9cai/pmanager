// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('#myUL');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("div");
  var inputAddress = $("#myInput").val();
  var tName = $("#tname").val();
  var pDate = $("#pdate").val();
  var rent = $("#mrent").val();
  var t = document.createTextNode(inputAddress);
  var t2 = document.createTextNode(tName);
  var t3 = document.createTextNode(pDate);
  var t4 = document.createTextNode(rent);
  li.appendChild(t);
  li.appendChild(t2);
  li.appendChild(t3);
  li.appendChild(t4);
  // $("#tname").val("");
  // $("#pdate").val("");
  // $("#mrent").val("");
  
  if (inputAddress === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  modal.style.display = "none";
}


function address() {
  var address = $("#myInput").val();
  $("#addressHolder").val(address);
}