function address() {
  var address = $("#myInput").val();
  $("#addressHolder").val(address);
}

function check(address) {
  var s = "#" + address;
  //alert(s);
  $(s).submit();
}

function verify(month) {
  alert(month);
}